import React from 'react';
import useCustomersValues from '../hooks/useCustomersValues';
import CustomerCard from '../components/CustomerCard';
import Searcher from '../components/Searcher';
import Alerta from '../components/Alerta';

function PacientList() {
  const {
    customers, inputData,
  } = useCustomersValues();
  const filteredCustomers = customers
    .filter(({ customerName }) => customerName.toLowerCase().includes(inputData.toLowerCase()));
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
      <Searcher />
      {
        filteredCustomers.length === 0 ? (
          <Alerta type="alert">
            No existen coincidencias con
            {' '}
            {inputData}
          </Alerta>
        )
          : filteredCustomers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer}>{customer.petName}</CustomerCard>
          ))
      }
    </>
  );
}

export default PacientList;
