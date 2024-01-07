const { DataTypes } = require('sequelize');
const { sequelize }  = require('../config/sequelizeConfig');

const sessionModel = sequelize.define('sessions', {
    pk_id_sess: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    exp_sess: {
        type: DataTypes.DATE,
    },
    data_sess: {
        type: DataTypes.TEXT,
    },
},  {
    tableName: 'sessions', 
    timestamps: false,
})

module.exports = sessionModel;