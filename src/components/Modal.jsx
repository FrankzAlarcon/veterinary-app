import React from 'react';
import { createId } from '../helpers';
import useTodosValues from '../hooks/useTodosValues';

function Modal({ setOpenModal }) {
  const {
    todos, setTodos, input, setInput, todoToEdit, setTodoToEdit,
  } = useTodosValues();
  const handleSaveTodo = () => {
    if (todoToEdit.id) {
      // Editar todo
      const todoUpdated = { id: todoToEdit.id, text: input };
      const newTodos = todos.map((todoData) => (todoData.id === todoToEdit.id
        ? todoUpdated : todoData));
      setTodos(newTodos);
      window.fetch(`${import.meta.env.VITE_DB_TASKS}/${todoToEdit.id}`, {
        method: 'PUT',
        body: JSON.stringify(todoUpdated),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((response) => response.json())
        .catch((error) => console.log(error));
      setTodoToEdit({});
      setInput('');
    } else {
      // Añadir todo
      const newTodo = { id: createId(), text: input };
      window.fetch(import.meta.env.VITE_DB_TASKS, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((response) => response.json())
        .catch((error) => console.log(error));
      setTodos([...todos, newTodo]);
      setInput('');
    }
    setOpenModal(false);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setTodoToEdit({});
    setInput('');
  };
  return (
    <div className="fixed w-full h-screen z-10 bg-black bg-opacity-40 sm:p-20 p-2 top-0 right-0 grid place-items-center">
      <div className="w-full md:w-3/4 lg:w-3/5 h-auto max-w-2xl bg-indigo-500 rounded-md py-3 px-5 text-center">
        <p className=" uppercase font-bold text-white mb-3 lg:text-xl">
          {todoToEdit.id ? 'Edita esta tarea' : 'Escribe tu tarea'}
        </p>
        <textarea
          className="w-full rounded-md h-36 p-2"
          type="text"
          placeholder="Escribe tu tarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex justify-around mt-2">
          <button
            onClick={handleSaveTodo}
            className="bg-violet-400 transition-colors hover:bg-violet-500 p-2 px-5 rounded-md uppercase font-bold"
            type="button"
          >
            {todoToEdit.id ? 'Guardar' : 'Añadir'}
          </button>
          <button
            onClick={handleCloseModal}
            className="bg-red-500 transition-colors hover:bg-red-600 p-2 rounded-md uppercase font-bold"
            type="button"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
