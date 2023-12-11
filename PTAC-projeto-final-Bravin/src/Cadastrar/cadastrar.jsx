import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Componentes/header"

export default function cadastrar(){
const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [];
const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 ||1);
const [nome,setNome] = useState("");
const [url,setUrl] = useState("");
const [lista, setLista ] = useState(listaLocalStorage);


useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);


  const salvar =(e) =>{
    e.preventDefault();
     setLista([...lista, {
            nome: nome,
            url:url,
            id: id
    }]);
    setId(id + 1);
    setNome("");
    setUrl("");
    console.log(id)
    console.log(nome)
    console.log(url)


};


const remover = (id) => {
    const auxLista = lista.filter((item) => item.id !== id);
    setLista(auxLista);
  }


return (
    <div>
        <Header/>
        <Link to="/">home</Link>
        <h1>Cadastro</h1>  
        <div> 
        <form onSubmit={salvar}>

            <p><strong>Nome:</strong></p>
            &emsp;
        <input value={nome} type="text"
        onChange={(e)=>{ setNome(e.target.value)}}/>
        
        <p><strong>Url:</strong></p>
            &emsp;
        <input value={url} type="text"
        onChange={(e)=>{ setUrl(e.target.value)}}/>

     &emsp;                        
        <button>concluir</button>
        </form>   
        </div>   
        {lista.map((cadastrar)=>
     <div key= {cadastrar.id}>
         <p>{cadastrar.nome}</p>
         <button onClick={() => remover(cadastrar.id)}>Remover</button>
     </div>
     )}   
    </div>
   
     

);

 }