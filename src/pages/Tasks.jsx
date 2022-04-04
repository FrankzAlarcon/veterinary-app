import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await window.fetch(import.meta.env.VITE_DB_TASKS);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, [/** todos */]);
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
          <div className="none hidden mx-auto w-fit mx-auto lg:block">
            <button
              onClick={handleAddTodo}
              className="bg-yellow-500 w-44 transition-colors hover:bg-yellow-600 rounded-md text-xl p-2 text-white uppercase font-bold"
              type="button"
            >
              Añadir tarea
            </button>
          </div>
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
                onClick={handleAddTodo}
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
        <Todo key={todo.id} todo={todo} setOpenModal={setOpenModal} />
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
