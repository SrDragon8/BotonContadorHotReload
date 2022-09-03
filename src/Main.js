import React, {useState} from "react";
import { AddCounter } from "./AddCounter";
import { ShowCounter } from "./ShowCounter";
import { RemoveCounter } from "./RemoveCounter";

import './styles.css'
export const Main = () =>
{
    const [number, setNumber] = useState(0);
    //const useState = (value) => {
    // return [value, () => {}]
    //}

    /* estas son las funciones, los setters  */
    const onAdd =() => 
    {
        setNumber( number + 1);
        console.log('I added one');
    }

    const onRemove =() =>
    {
        setNumber( number - 1);
        console.log('I rested one');
    }

    return (
        <>
            <ShowCounter number={number}/>
            <AddCounter onAddPress={onAdd}/> {/* componente (su nombre)/ parametro de entrada (tipo de evento)/ que entra al parametro */}
            <RemoveCounter onRemovePress={onRemove}/>
        </>
    );
};