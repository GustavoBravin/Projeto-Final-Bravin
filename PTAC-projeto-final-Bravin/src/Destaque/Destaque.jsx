import Header from "../Componentes/header"
import Card from '../Componentes/Card'
import Footer from "../Componentes/footer" 


export default function Destaque(){

    const lista = JSON.parse(localStorage.getItem("Lista"))
    const destaque = lista.slice(-2)
    console.log(destaque)

     
    return(
        <div>
        <Header/>
       <Card listaV={destaque} />
       <Footer/>
       </div>
       )










}