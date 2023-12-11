import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from '../Componentes/Card'
import Header from "../Componentes/header"
import Footer from "../Componentes/footer" 

export default function Home(){
    
   
    const lista = JSON.parse(localStorage.getItem("Lista"))  
      
   
    return(
      
        <div>
        <Header/>
        <h1>PTAC 2 - PROJETO FINAL</h1>
        <Cards listaV={lista} />
        <Link to="/cadastrar">Cadastrar</Link>
        <Footer/>
        </div>
        
        );
}