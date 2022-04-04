import React, { useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CustomersContext = React.createContext();

function CustomersProvider({ children }) {
  const [customer, setCustomer] = useState({});
  const [customers, setCustomers] = useLocalStorage('customers', []);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [inputData, setInputData] = useState('');
  const values = useMemo(() => ({
    customers,
    filteredCustomers,
    customer,
    inputData,
    setFilteredCustomers,
    setCustomer,
    setCustomers,
    setInputData,
  }), [customer, customers, filteredCustomers, inputData]);
  return (
    <CustomersContext.Provider value={values}>
      { children }
    </CustomersContext.Provider>
  );
}

export {
  CustomersContext,
  CustomersProvider,
};
