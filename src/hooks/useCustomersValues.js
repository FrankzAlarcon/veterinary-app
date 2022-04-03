import { useContext } from 'react';
import { CustomersContext } from '../context/CustomersProvider';

function useCustomersValues() {
  return useContext(CustomersContext);
}

export default useCustomersValues;
