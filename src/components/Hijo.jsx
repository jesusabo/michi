import { useState } from 'react';

export const Hijo = ({ subiendoNivel }) => {
  const [nombre, setNombre] = useState('');

  /*
  const mostrarNombre = () => {
    setNombre('Jesus');
    console.log('Hijo');
    subiendoNivel('AAA');
  };
  */

  return (
    <div>
      <button
        onClick={() => {
          subiendoNivel('BBB');
        }}>{`Hola ${nombre}`}</button>
    </div>
  );
};
