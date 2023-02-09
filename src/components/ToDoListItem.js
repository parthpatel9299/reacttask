import React from "react";
import { Button } from "reactstrap";

export default function ToDoListItem(props) {

    const Delete = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <h1>
                <Button color="success" 
                    onClick={Delete}
                >
                    x
                </Button>
                {props.item}
            </h1>
        </>
    );
}
