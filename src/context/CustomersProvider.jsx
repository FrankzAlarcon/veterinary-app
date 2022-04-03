import React, { useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CustomersContext = React.createContext();

function CustomersProvider({ children }) {
  const [customer, setCustomer] = useState({});
  const [customers, setCustomers] = useLocalStorage('customers', []);
  const values = useMemo(() => ({
    customers,
    customer,
    setCustomer,
    setCustomers,
  }), [customer, customers]);
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
