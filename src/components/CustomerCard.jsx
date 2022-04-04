import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.all';
import useCustomersValues from '../hooks/useCustomersValues';

function CustomerCard({ customer }) {
  const { customers, setCustomers } = useCustomersValues();
  const {
    petName, customerName, email, date, symptoms, id,
  } = customer;
  const navigate = useNavigate();

  const handleCustomerDetails = () => {
    navigate(`/patient/${id}`);
  };
  const handleEditCustomer = () => {
    navigate(`/edit-patient/${id}`);
  };
  const handleDeleteCustomer = () => {
    Swal.fire({
      title: `¿Estás seguro que quieres eliminar a ${petName}?`,
      text: 'No podrás recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const newCustomers = customers.filter((customerData) => customerData.id !== id);
        setCustomers(newCustomers);
        window.fetch(`${import.meta.env.VITE_DB_PATIENTS}/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
        });
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success',
        );
      }
    });
  };
  return (
    <div className="bg-white text-white max-w-7xl mx-auto shadow-md rounded-md p-3 md:flex md:gap-x-10 my-4 md:justify-between md:items-center">
      <div>
        <p
          className="uppercase text-gray-600 font-bold mb-3"
        >
          Nombre Mascota:
          {' '}
          <span className="normal-case text-black font-medium">{petName}</span>
        </p>
        <p className="uppercase text-gray-600 font-bold mb-3">
          Propietario:
          {' '}
          <span className="normal-case text-black font-medium">{customerName}</span>
        </p>
        <p className="uppercase text-gray-600 font-bold mb-3">
          Email:
          {' '}
          <span className="normal-case text-black font-medium">{email}</span>
        </p>
        <p className="uppercase text-gray-600 font-bold mb-3">
          Fecha:
          {' '}
          <span className="normal-case text-black font-medium">{date}</span>
        </p>
        <p className="uppercase text-gray-600 font-bold mb-3">
          Síntomas:
          {' '}
          <span className="normal-case text-black font-medium">{symptoms}</span>
        </p>
      </div>
      <div className="flex justify-around mt-5 mb-3 md:flex-col">
        <button onClick={handleCustomerDetails} className="bg-yellow-500 transition-colors hover:bg-yellow-600 min-w-max md:px-4 md:mb-2 p-2 rounded-md sm:uppercase font-bold" type="button">Ver Detalles</button>
        <button onClick={handleEditCustomer} className="bg-indigo-500 transition-colors hover:bg-indigo-700 min-w-max md:px-4 md:mb-2 p-2 rounded-md sm:uppercase font-bold" type="button">Editar</button>
        <button onClick={handleDeleteCustomer} className="bg-red-600 transition-colors hover:bg-red-700 min-w-max md:px-4 md:mb-2 p-2 rounded-md sm:uppercase font-bold" type="button">Eliminar</button>
      </div>
    </div>
  );
}

export default CustomerCard;
