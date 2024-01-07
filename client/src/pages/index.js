import Carousel from "@/components/Carousel";
import React from "react";
import axios from "axios";

export default function Home() {
  const handleLogout = async ()=>{
    try {
      const response = await axios.post('http://localhost:8000/session/logout', {}, { withCredentials: true })
      if (response.status === 200) {
        console.log('Token deletado')
      }else{
        console.log(response)
      }
    } catch (error) {
      console.log('Erro ao deletar token: ', error)
    }
  }
  return (
    <>
      <h1 className="text-center my-5">
        Home Chat Bot
      </h1>
      <button onClick={handleLogout}>Sair</button>
      <Carousel />

    </>
  );
};