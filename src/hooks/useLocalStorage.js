import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const storageValue = window.localStorage.getItem(key);

  useEffect(() => {
    if (storageValue) {
      setValue(JSON.parse(storageValue));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      setValue(initialValue);
    }
  }, []);

  const saveValue = (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [
    value, saveValue,
  ];
}

export default useLocalStorage;
