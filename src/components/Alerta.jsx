import React from 'react';

function Alerta({ children, type = 'error' }) {
  return (
    <div className={`w-full ${type === 'error' && 'bg-red-700'} ${type === 'alert' && 'bg-indigo-500 '} my-3 p-2 text-center text-white font-bold`}>{children}</div>
  );
}

export default Alerta;
