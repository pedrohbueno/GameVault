const express = require("express")
const routes = express.Router();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const sessionInit  = require('./src/helpers/sessionInit')
const app = express()

sessionInit(app);
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000

//Chamada das Rotas
const userRoutes = require('./src/routes/userRoutes');
const accessRoutes = require('./src/routes/accessRoutes');
const sessionRoutes = require('./src/routes/sessionRoutes');

//Definição de Rotas
app.use('/user', userRoutes);
app.use('/access', accessRoutes);
app.use('/session', sessionRoutes);


module.exports = routes
app.listen(port, () => console.log(`Server rodando na porta: ${port}!`))
