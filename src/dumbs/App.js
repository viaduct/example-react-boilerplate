import React from "react"
import {Item} from "src/dumbs";

export function App(props)
{
    return <>
        <h1>This is a list!</h1>
        <h2>{props.title}</h2>
        <button onClick={props.onAddItemClick}>Add item</button>
        <ul>
            {props.items.map(item=><Item key={item.id} {...item}/>)}
        </ul>
    </>;
}