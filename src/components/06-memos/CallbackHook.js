import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter(counter + 1);
    // }
    
    const increment = useCallback((step = 1) => {
        setCounter(prevCounter => prevCounter + step);
    }, [setCounter]);

    // Segundo caso de uso importante
    useEffect(() => {
        // ??? si usamos una versión no memorizada de la función increment. Se genera un ciclo infinito
        increment();
    }, [increment]);
    
    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            
            {/* Primer caso de uso, mandar una función a un componente */}
            <ShowIncrement increment={increment} />
        </div>
    );
};