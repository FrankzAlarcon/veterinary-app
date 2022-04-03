import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormComponent from '../components/FormComponent';
import useCustomersValues from '../hooks/useCustomersValues';

function EditCustomer() {
  const { id } = useParams();
  const { customer, setCustomer } = useCustomersValues();
  const [wasFound, setWasFound] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setWasFound(true);
    if (id) {
      // "Fetch" a los customers
      const customerToEdit = JSON.parse(window.localStorage.getItem('customers')).find((customerData) => customerData.id === id);
      if (customerToEdit) {
        setCustomer(customerToEdit);
        setLoading(false);
      } else {
        setWasFound(false);
      }
    } else {
      setWasFound(false);
    }
  }, []);
  return (
    wasFound
      ? (
        <>
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl lg:mb-6 font-black">
            Edita un
            {' '}
            <span className="text-indigo-600">Paciente</span>
          </h1>
          <p className="text-center text-xl my-3">
            Edita los datos de tus
            {' '}
            <span className="text-indigo-600 font-bold">Pacientes y Administralos</span>
          </p>
          <FormComponent customer={customer} loading={loading} />
        </>
      ) : (
        <h1 className="text-center text-3xl md:text-5xl lg:text-6xl lg:mb-6 font-black">
          No se encontró registros de este
          {' '}
          <span className="text-indigo-600">Paciente</span>
        </h1>
      )
  );
}

export default EditCustomer;
