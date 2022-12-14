import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './CreateTodo.css';

const CreateTodo = () => {
  const { handleConfirmTodo, handleCreateTodo, setNewTodo } =
    useContext(TodoContext);

  const handleSubmit = (e) => e.preventDefault();

  const handleChange = (e) => setNewTodo(e.target.value);

  return (
    <div className="CreateTodo">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput" className="title">
          Crear otra Tarea
        </label>
        <input
          id="todoInput"
          className="todoInput"
          onChange={handleChange}
          type="text"
          placeholder="Crea tu To Do aqui ..."
        />
        <div className="buttons">
          <button className="buttons__cancel" onClick={handleConfirmTodo}>
            Cancelar
          </button>
          <button className="buttons__add" onClick={handleCreateTodo}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export { CreateTodo };
