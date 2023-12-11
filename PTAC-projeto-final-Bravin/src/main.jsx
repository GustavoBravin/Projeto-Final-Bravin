import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detalhe from './Detalhe/detalhe'
import Destaque from './Destaque/Destaque'
import Cadastrar from './Cadastrar/cadastrar'
import Home from './Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastrar" element={<Cadastrar />}></Route>
        <Route path="/destaque" element={<Destaque />}></Route>
        <Route path="/detalhe/:id" element={<Detalhe />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
