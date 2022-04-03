import React from 'react';
import FormComponent from '../components/FormComponent';

function NewPacient() {
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl lg:text-6xl lg:mb-6 font-black">
        Registra un nuevo
        {' '}
        <span className="text-indigo-600">Paciente</span>
      </h1>
      <p className="text-center text-xl my-3">
        Añade tus pacientes y
        {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <FormComponent />
    </>
  );
}

export default NewPacient;
