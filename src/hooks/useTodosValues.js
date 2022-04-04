import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';

function useTodosValues() {
  return useContext(TodosContext);
}

export default useTodosValues;
