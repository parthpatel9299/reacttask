import React, { useState } from "react";

export default function ToDoListItem(props) {

    const Delete = () => {
        props.deleteItem(props.id);
    }
    console.log(Delete)
    return (
        <>
            <h1>
                <button
                    onClick={Delete}
                >
                    x
                </button>{" "}
                {props.item}{props.id}
            </h1>
        </>
    );
}
