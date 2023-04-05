

import React, { useState } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
    setContador(contador - 1);
  }

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
}


