import React, { useState } from "react";
import { Button } from "reactstrap";
import "../Keep/keep.css";
import Header from "./Header";
import KeepTicket from "./KeepTicket";
import Notepad from "./Notepad";
export default function keep() {
  const [noteStore, setNoteStore] = useState([]);
  const saveNote = (note) => {
    setNoteStore((d) => {
      return [...d, note];
    });
  };
  const DeleteItem = (id) => {
    setNoteStore((allItem) => {
      console.log('allItem', allItem);
      return allItem.filter((arry, index) => {
        return index !== id;
      });
    });
  };
  
  return (
    <>
      <Header />
      <Notepad saveNote={saveNote} />
      <div className="w-100 d-flex flex-wrap">
        {noteStore.map((e, index) => {
          return (
            <>
              <KeepTicket
                key={index}
                id={index}
                {...e}
                DeleteItem={DeleteItem}
              />
            </>
          );
        })}
      </div>

      <br />
    </>
  );
}
