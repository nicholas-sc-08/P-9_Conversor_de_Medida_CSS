import React, { useContext, useEffect, useState } from 'react';
import './Cadastro.css'
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  
  const [formulario, set_formulario] = useState({nome: ``, email: ``, senha: ``, confirmar_senha: ``});
  const {lista_de_cadastrantes, set_lista_de_cadastrantes} = useContext(GlobalContext);
  const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);
  const mudar_de_pagina = useNavigate(``);
  useEffect(() => {

    atualizar_array();
    
  }, []);

  const atualizar_array = async () => {

    try{

      const pegar_dados = await axios.get(`http://localhost:3000/usuarios`);
      set_lista_de_cadastrantes(pegar_dados.data);
    
    } catch(erro) {

      console.error(`Erro ao buscar os usuarios!`, erro);
      
    };
  };

  const enviar_formulario = async e => {

    e.preventDefault();

    try {

      const passar_informacoes = await axios.post(`http://localhost:3000/usuarios`, formulario);
      
      if(passar_informacoes.status == 201){

        atualizar_array();
        mudar_de_pagina(`/`);
      
      };
    } catch(erro) {

      console.error(`Erro ao cadastrar!`, erro);
      
    };  
  };

  return (
    <div>
      <form onSubmit={enviar_formulario}>

      <label>Nome</label>
      <input type="text" value={formulario.nome} onChange={e => set_formulario({...formulario, nome: e.target.value})}/>

      <label>Email</label>
      <input type="email" value={formulario.email} onChange={e => set_formulario({...formulario, email: e.target.value})}/>

      <label>Senha</label>
      <input type="password" value={formulario.senha} onChange={e => set_formulario({...formulario, senha: e.target.value})}/>

      <label>Confirmar senha</label>
      <input type="password" value={formulario.confirmar_senha} onChange={e => set_formulario({...formulario, confirmar_senha: e.target.value})}/>

      <button type='submit'>Cadastrar</button>

      </form>

      {mensagem_de_erro}
    </div>
  )
}

export default Cadastro