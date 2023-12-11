import { Link } from "react-router-dom"
<link rel="stylesheet" href="Card.css" />

export default function Cards({listaV}){
    
    if(listaV  == []){
       return <h1>Nada Cadastrado Ainda</h1> 
    }
    return(
        
     listaV.map((video) =>  
     
        
     <div className="card">

      <Link to={`/detalhe/${video.id} `}>
     <h1>{video.nome}</h1>
     </Link>

     <iframe 
     src={"https://www.youtube.com/embed/" + video.url.slice(17)} 
     frameborder="0"
     >
        
     </iframe>

    </div>
    
    )
    )
}