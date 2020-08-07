import React from "react";

export function Item(props)
{
    return <div
        style={styles.container}>
        <span style={{fontWeight: "bold"}}>{props.title}</span>
        <p>{props.body}</p>
        <button onClick={props.onDeleteClick}>X</button>
    </div>;
}

const styles = {
    container: {
        border: "1px solid black",
        margin: "12px",
        width: "400px",
    },
};