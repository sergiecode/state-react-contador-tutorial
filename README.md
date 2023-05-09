![Tutorial de como usar el STATE de REACT imagen 1](https://raw.githubusercontent.com/sergiecode/state-react-contador-tutorial/master/react-contador-state-tutorial%20%281%29.png)

![Tutorial de como usar el STATE de REACT imagen 2](https://raw.githubusercontent.com/sergiecode/state-react-contador-tutorial/master/react-contador-state-tutorial%20%282%29.png)

![Tutorial de como usar el STATE de REACT imagen 3](https://raw.githubusercontent.com/sergiecode/state-react-contador-tutorial/master/react-contador-state-tutorial%20%283%29.png)

# ¿Qué es el STATE?

En React, el `state` es una propiedad especial que nos permite almacenar datos dentro de un componente y actualizarlos de manera dinámica a lo largo del ciclo de vida del mismo. En este tutorial, aprenderás cómo funciona el `state` y cómo utilizarlo en un ejemplo práctico.

## ¿Qué es el useState?

El `useState` es un hook de React que nos permite utilizar el `state` en un componente funcional. Para utilizarlo, primero debemos importarlo:

`import React, { useState } from 'react';` 

Luego, podemos utilizar el `useState` para definir una variable de estado y una función para actualizarla:

`const [contador, setContador] = useState(0);` 

En este ejemplo, estamos definiendo una variable de estado llamada `contador` y una función para actualizarla llamada `setContador`. La variable de estado se inicializa con el valor `0`.

## Ejemplo práctico

Ahora que ya sabemos qué es el `useState`, podemos utilizarlo en un ejemplo práctico. En este ejemplo, crearemos un componente `Contador` que utiliza el `state` para mostrar y actualizar un contador:

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

En este ejemplo, estamos definiendo un componente `Contador` que utiliza el `useState` para definir una variable de estado llamada `contador`. También definimos dos funciones `sumar` y `restar` que utilizan la función `setContador` para actualizar el valor del contador.

Finalmente, el componente `Contador` renderiza un `div` que muestra el valor actual del contador y dos botones que llaman a las funciones `sumar` y `restar` cuando se hace clic en ellos.

¡Y eso es todo! Con este ejemplo, ya deberías tener una buena comprensión de cómo funciona el `state` y cómo utilizarlo en tus propios proyectos de React.
