import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CustomerDetails({ customer }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    petName, customerName, email, date, symptoms,
  } = customer;
  return (
    <div>
      <div className="md:text-xl lg:text-3xl">
        <p className="uppercase text-gray-600 font-bold mb-3">
          Nombre Mascota:
          {' '}
          <span className="normal-case text-black font-medium">{petName}</span>
        </p>
        <p className="uppercase text-gray-600 font-bold mb-3">
          Propietario:
          {' '}
          <span className="normal-case text-black font-medium">
            {customerName}
          </span>
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
        <p className="uppercase text-red-600 font-bold mb-3">
          Mas campos añadir abajo ⬇ ⬇
        </p>
      </div>
      <button
        onClick={() => navigate(`/edit-patient/${id}`)}
        className="bg-indigo-500 mx-auto block transition-colors text-xl text-white uppercase hover:bg-indigo-700 w-40 h-12 md:px-4 md:mb-2 p-2 rounded-md sm:uppercase font-bold"
        type="button"
      >
        Editar
      </button>
    </div>
  );
}

export default CustomerDetails;
