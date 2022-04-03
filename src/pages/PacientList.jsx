import React from 'react';
import useCustomersValues from '../hooks/useCustomersValues';
import CustomerCard from '../components/CustomerCard';

function PacientList() {
  const { customers } = useCustomersValues();
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl lg:text-6xl lg:mb-6 font-black">
        Listado de
        {' '}
        <span className="text-indigo-600">Pacientes</span>
      </h1>
      <p className="text-center text-xl my-3">
        Administra tus
        {' '}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {/* Todo: añadir buscador(filtrador) */}
      {
        customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer}>{customer.petName}</CustomerCard>
        ))
      }
    </>
  );
}

export default PacientList;
