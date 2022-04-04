import React, { useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodosContext = React.createContext();

function TodosProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [inputSearchTodo, setInputSearchTodo] = useState('');
  const [input, setInput] = useState('');
  const [todoToEdit, setTodoToEdit] = useState(false);
  const values = useMemo(
    () => ({
      todos,
      setTodos,
      inputSearchTodo,
      setInputSearchTodo,
      input,
      setInput,
      todoToEdit,
      setTodoToEdit,
    }),
    [todos, inputSearchTodo, input, todoToEdit],
  );
  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider };
