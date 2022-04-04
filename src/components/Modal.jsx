import React, { useState } from 'react';
import { createId } from '../helpers';
import useTodosValues from '../hooks/useTodosValues';

function Modal({ setOpenModal }) {
  const { todos, setTodos } = useTodosValues();
  const [input, setInput] = useState('');
  const handleSaveTodo = () => {
    const newTodos = [...todos, { id: createId(), text: input }];
    setTodos(newTodos);
    setOpenModal(false);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="fixed w-full h-screen z-10 bg-black bg-opacity-40 sm:p-20 p-2 top-0 right-0 grid place-items-center">
      <div className="w-full md:w-3/4 lg:w-3/5 h-auto max-w-2xl bg-indigo-500 rounded-md py-3 px-5 text-center">
        <p className=" uppercase font-bold text-white mb-3 lg:text-xl">
          Escribe tu tarea
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
            Añadir
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
