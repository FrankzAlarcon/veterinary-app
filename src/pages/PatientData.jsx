import React from 'react';
import CustomerDetails from '../components/CustomerDetails';

function PatientData() {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-5xl lg:text-6xl lg:mb-6 font-black">
        Seguimiento de
        {' '}
        <span className="text-indigo-600">Pacientes</span>
      </h1>
      <p className="text-center text-xl my-3">
        Observa los detalles de tus
        {' '}
        <span className="text-indigo-600 font-bold">Pacientes y Administralos</span>
      </p>
      <CustomerDetails />
    </div>
  );
}

export default PatientData;
