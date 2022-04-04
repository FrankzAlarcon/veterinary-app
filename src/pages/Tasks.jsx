import React, { useState } from 'react';
import Searcher from '../components/Searcher';
import Todo from '../components/Todo';
import useTodosValues from '../hooks/useTodosValues';
import Modal from '../components/Modal';

function Tasks() {
  const { todos, inputSearchTodo, setInputSearchTodo } = useTodosValues();
  const [openModal, setOpenModal] = useState(false);
  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(inputSearchTodo));
  const handleAddTodo = () => {
    setOpenModal(true);
  };
  return (
    <div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      {todos.length === 0 ? (
        <>
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl lg:mb-6 font-black">
            No tienes tareas por
            {' '}
            <span className="text-indigo-600">Hacer</span>
          </h1>
          <p className="text-center text-xl my-3">
            Añade tus
            {' '}
            <span className="text-indigo-600 font-bold">
              Tareas y Cosas por hacer
            </span>
          </p>
        </>
      ) : (
        <>
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl lg:mb-6 font-black">
            Lista de
            {' '}
            <span className="text-indigo-600">Tareas</span>
          </h1>
          <p className="text-center text-xl my-3">
            Administra tus
            {' '}
            <span className="text-indigo-600 font-bold">
              Tareas y Cosas por hacer
            </span>
          </p>
          <div className="lg:flex gap-x-6">
            <div className="flex-grow">
              <Searcher
                value={inputSearchTodo}
                setValue={setInputSearchTodo}
                placeholder="Filtra tus tareas"
              />
            </div>
            <div className="none hidden lg:block">
              <button
                className="bg-yellow-500 w-44 transition-colors hover:bg-yellow-600 rounded-md text-xl p-2 text-white uppercase font-bold"
                type="button"
              >
                Añadir tarea
              </button>
            </div>
          </div>
        </>
      )}
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} text={todo.text} />
      ))}
      <button
        onClick={handleAddTodo}
        className="bg-yellow-500 lg:hidden transition-colors hover:bg-yellow-600 w-16 h-16 rounded-full fixed bottom-0 right-0 m-2 text-5xl pb-4 text-white"
        type="button"
      >
        +
      </button>
    </div>
  );
}

export default Tasks;
