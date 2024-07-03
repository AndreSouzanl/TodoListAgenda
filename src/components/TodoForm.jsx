import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  // funcao cuida  do submit do formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    // adicionar tarefa

    addTodo(value, category);
    //limpar os campos
    setValue("");
    setCategory("");

    console.log(value, category);
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Lazer">Lazer</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
