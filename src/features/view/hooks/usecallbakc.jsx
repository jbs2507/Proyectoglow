import * as React from 'react'
import { useState, useCallback } from 'react';

export const Usecallback = () => {

const Button = React.memo(({ onClick, text }) => {
  console.log(`Escuadrón ${text} renderizado`);
  return <button onClick={onClick}>{text}</button>;
});

// Parent component WITH useCallback
function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(prev => prev + 1);
    alert("Descuento no aceptado");
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2(prev => prev + 1);
    alert("¡DESCUENTO APLICADOO!");
  }, []);

  console.log("El descuento fue iniciado...");

  return (
    <div>
      <h2>Proceso de los descuentos</h2>

      <p>Descuento no aceptado: {count1}</p>
      <p>Descuento aceptado: {count2}</p>

      <Button onClick={handleClick1} text="Procesar descuento" />
      <Button onClick={handleClick2} text="Aplicar descuento" />
    </div>
  );
}

return <WithCallbackExample />;
}