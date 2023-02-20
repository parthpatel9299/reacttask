import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Notepad(props) {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputNote = (e) => {
    const { name, value } = e.target;
    setNote((preData) => {
      return { ...preData, [name]: value };
    });
  };
  const AddData = () => {
    props.saveNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const NormalStyle = () => {
    setShow(false);
  };
  return (
    <>
      <div className="main_note" onDoubleClick={NormalStyle}>
        <form
          onClick={() => {
            setShow(true);
          }}
        >
          {show ? (
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={note.title}
              onChange={inputNote}
            />
          ) : null}
          <textarea
            name="content"
            placeholder="Write a note..."
            onChange={inputNote}
            value={note.content}
          ></textarea>
          {show ? (
            <Button color="success" onClick={AddData}>
              <div className="plus_sign">+</div>
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}
