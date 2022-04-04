import React from 'react';
import useCustomersValues from '../hooks/useCustomersValues';

function Searcher() {
  const { inputData, setInputData } = useCustomersValues();
  return (
    <div>
      <label htmlFor="searcher">
        <input
          onChange={(e) => setInputData(e.target.value)}
          className="w-full md:w-1/2 mx-auto block p-3 rounded-md border-2"
          id="searcher"
          type="text"
          placeholder="Busca a un paciente por su propietario"
          value={inputData}
        />
      </label>
    </div>
  );
}

export default Searcher;
