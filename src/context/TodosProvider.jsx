import React, { useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodosContext = React.createContext();

function TodosProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [inputSearchTodo, setInputSearchTodo] = useState('');

  const values = useMemo(
    () => ({
      todos,
      setTodos,
      inputSearchTodo,
      setInputSearchTodo,
    }),
    [todos, inputSearchTodo],
  );
  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider };
