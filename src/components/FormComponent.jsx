import React from 'react';
import { Form, Field, Formik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2/dist/sweetalert2.all';
import { useNavigate } from 'react-router-dom';
import Alerta from './Alerta';
import useCustomersValues from '../hooks/useCustomersValues';
import { createId } from '../helpers';
import Spinner from './Spinner';

function FormComponent({ customer, loading }) {
  const { customers, setCustomers } = useCustomersValues();
  const navigate = useNavigate();
  const newCustomerSchema = yup.object({
    petName: yup
      .string()
      .min(3, 'Nombre demasiado corto')
      .max(60, 'Nombre demasiado largo')
      .required('El nombre de la mascota es obligatorio'),
    customerName: yup
      .string()
      .min(3, 'Nombre demasiado corto')
      .max(60, 'Nombre demasiado largo')
      .required('El nombre es obligatorio'),
    email: yup
      .string()
      .email('El correo no es válido')
      .required('El email es obligatorio'),
    date: yup
      .date()
      .required('La fecha es obligatoria'),
    symptoms: yup
      .string(),
  });
  const handleSubmit = (values) => {
    const {
      petName, customerName, date, email,
    } = values;
    if ([petName, customerName, date, email].includes('')) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha llenado los campos obligatorios',
      });
      return;
    }
    if (customer?.id) {
      // editar registro
      const newCustomers = customers.map((customerData) => (customerData.id === customer.id
        ? { id: customer.id, ...values } : customerData));
      setCustomers(newCustomers);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Se ha editado al paciente: ${petName}`,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate('/');
      });
    } else {
    // crea un nuevo paciente
      setCustomers([...customers, { id: createId(), ...values }]);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Se ha agregado al paciente: ${petName}`,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate('/');
      });
    }
  };
  return (
    loading ? <Spinner />
      : (
        <div className="mt-6 mb-2 max-w-5xl mx-auto">
          <Formik
            initialValues={{
              petName: customer?.petName ?? '',
              customerName: customer?.customerName ?? '',
              email: customer?.email ?? '',
              date: customer?.date ?? '',
              symptoms: customer?.symptoms ?? '',
            }}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
            validationSchema={newCustomerSchema}
            enableReinitialize
          >
            {({ errors, touched }) => (
              <Form className="w-full bg-white shadow-md rounded-md p-3">
                <div className="my-4">
                  <label
                    htmlFor="pet-name"
                    className="uppercase text-gray-700 font-bold pb-2 block"
                  >
                    Nombre Mascota
                  </label>
                  <Field
                    type="text"
                    name="petName"
                    id="pet-name"
                    className="border-2 rounded-md w-full p-2"
                    placeholder="Nombre de la mascota"
                  />
                  {errors.petName && touched.petName && <Alerta>{errors.petName}</Alerta>}
                </div>
                <div className="my-4">
                  <label
                    htmlFor="customerName"
                    className="uppercase text-gray-700 font-bold pb-2 block"
                  >
                    Nombre Propietario
                  </label>
                  <Field
                    type="text"
                    name="customerName"
                    id="customerName"
                    className="border-2 rounded-md w-full p-2"
                    placeholder="Nombre del propietario"
                  />
                  {errors.customerName && touched.customerName
              && <Alerta>{errors.customerName}</Alerta>}
                </div>
                <div className="my-4">
                  <label
                    htmlFor="email"
                    className="uppercase text-gray-700 font-bold pb-2 block"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="border-2 rounded-md w-full p-2"
                    placeholder="Email del propietario"
                  />
                  {errors.email && touched.email && <Alerta>{errors.email}</Alerta>}
                </div>
                <div className="my-4">
                  <label
                    htmlFor="date"
                    className="uppercase text-gray-700 font-bold pb-2 block"
                  >
                    Fecha
                  </label>
                  <Field
                    type="date"
                    name="date"
                    id="date"
                    className="border-2 rounded-md w-full p-2"
                    placeholder="Fecha de ingreso"
                  />
                  {errors.date && touched.date && <Alerta>{errors.date}</Alerta>}
                </div>
                <div className="my-2">
                  <label
                    htmlFor="symptoms"
                    className="uppercase text-gray-700 font-bold pb-2 block"
                  >
                    Síntomas
                  </label>
                  <Field
                    as="textarea"
                    name="symptoms"
                    id="symptoms"
                    className="border-2 rounded-md w-full p-2"
                    placeholder="Síntomas"
                  />
                  {errors.symptoms && touched.symptoms && <Alerta>{errors.symptoms}</Alerta>}
                </div>
                <input
                  type="submit"
                  className="cursor-pointer w-full bg-indigo-600 transition-colors hover:bg-indigo-700 p-3 my-3 uppercase font-bold text-white"
                  value={customer?.id ? 'Guardar datos del paciente' : 'Agregar Paciente'}
                />
              </Form>
            )}
          </Formik>
        </div>
      )
  );
}

export default FormComponent;
