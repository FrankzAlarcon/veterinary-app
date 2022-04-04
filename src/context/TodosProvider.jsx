import React from 'react';

const TodosContext = React.createContext();

function TodosProvider({ children }) {
  return (
    <TodosContext.Provider>{children}</TodosContext.Provider>
  );
}

export {
  TodosContext,
  TodosProvider,
};
