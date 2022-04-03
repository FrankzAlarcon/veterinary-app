import React from 'react';

function Alerta({ children }) {
  return (
    <div className="w-full bg-red-700 my-3 p-2 text-center text-white font-bold">{children}</div>
  );
}

export default Alerta;
