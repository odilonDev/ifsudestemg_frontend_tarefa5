import './App.css';
import React, { useState } from 'react';


function App() {

  const [listagemTarefas, setListagemTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function incluirTarefa(){
    setListagemTarefas([... listagemTarefas,  novaTarefa]);
    setNovaTarefa("");
  };

  function excluirTarefa(tarefa){
    const filtroTarefas = listagemTarefas.filter((listagemTarefas) => listagemTarefas !== tarefa);
    setListagemTarefas(filtroTarefas);
  };

  function alterarTarefa(tarefa, index){
    console.log(listagemTarefas);
    const tarefaAlterada = listagemTarefas;
    tarefaAlterada[index]=tarefa;
    setListagemTarefas(tarefaAlterada);
    console.log(listagemTarefas);
  };

  return (
  <div>
    <input type="text" value={novaTarefa} onChange={ e => setNovaTarefa(e.target.value) }></input>
    <button onClick={incluirTarefa} >Incluir</button>
      <ul>
        {listagemTarefas.map((itemTarefa, index) => (
        <li key={index}> 
          <input type="text" value={itemTarefa} onChange={(e) =>alterarTarefa(e.target.value, index) }></input>
          <button type="button"  onClick={() => excluirTarefa(itemTarefa)}>Excluir</button>
        </li>  
       ))}
      </ul>
    </div>
  );
}

export default App;
