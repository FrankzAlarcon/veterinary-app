import React from 'react';

function Todo({ text }) {
  return (
    <div className="w-full bg-white my-3 rounded-md p-3 lg:w-3/4 mx-auto">
      <h2 className="uppercase font-bold text-lg text-gray-500">Tarea</h2>
      <p className="">
        {text}
      </p>
      <div className="flex justify-around mt-4 mb-1 text-white">
        <button
          className="bg-indigo-500 transition-colors hover:bg-indigo-700 min-w-max md:px-4 md:mb-2 p-2 rounded-md sm:uppercase font-bold"
          type="button"
        >
          Editar
        </button>
        <button
          className="bg-red-600 transition-colors hover:bg-red-700 min-w-max md:px-4 md:mb-2 p-2 rounded-md sm:uppercase font-bold"
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Todo;
