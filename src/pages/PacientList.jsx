import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCustomersValues from '../hooks/useCustomersValues';
import CustomerCard from '../components/CustomerCard';
import Searcher from '../components/Searcher';
import Alerta from '../components/Alerta';

function PacientList() {
  const {
    customers, inputData, setInputData,
  } = useCustomersValues();
  const filteredCustomers = customers
    .filter(({ customerName }) => customerName.toLowerCase().includes(inputData.toLowerCase()));

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await window.fetch(import.meta.env.VITE_DB_PATIENTS);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCustomers();
  }, []);

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
      {
        customers.length === 0 ? (
          <>
            <h1 className="text-center text-xl pt-5 md:text-2xl lg:text-3xl lg:mb-6 font-black">
              No tienes registros de
              {' '}
              <span className="text-indigo-600">Pacientes Pendientes</span>
            </h1>
            <p className="text-center text-xl my-3">
              Para agregar un registro da clic en:
              {' '}
              <span className="text-indigo-600 font-bold"><Link to="/new-patient">Nuevo Paciente</Link></span>
            </p>
          </>
        ) : (
          <>
            <Searcher value={inputData} setValue={setInputData} placeholder="Busca a un paciente por su propietario" />
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
        )
      }
    </>
  );
}

export default PacientList;
