import React from 'react';

function Searcher({ value, setValue, placeholder }) {
  return (
    <div>
      <label htmlFor="searcher">
        <input
          onChange={(e) => setValue(e.target.value)}
          className="w-full lg:w-3/5 mx-auto block p-3 rounded-md border-2"
          id="searcher"
          type="text"
          placeholder={placeholder}
          value={value}
        />
      </label>
    </div>
  );
}

export default Searcher;
