import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerDetails from '../components/CustomerDetails';
import useCustomersValues from '../hooks/useCustomersValues';

function PatientData() {
  const { customers } = useCustomersValues();
  const { id } = useParams();
  const customer = customers.find((customerSaved) => customerSaved.id === id);
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
      <CustomerDetails customer={customer} />
    </div>
  );
}

export default PatientData;
