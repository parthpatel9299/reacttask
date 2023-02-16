import React from "react";
import { Button } from "reactstrap";

export default function KeepTicket(props) {
  console.log(props, "props");

  const DeleteKeep = () => {
    return props.DeleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <Button color="success" className="btn" onClick={DeleteKeep}>
          <div className="deleteIcon">-</div>
        </Button>
      </div>
    </>
  );
}
