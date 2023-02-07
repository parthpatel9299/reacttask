import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState();
  const [toDoItem, setToDoItem] = useState([]);

  console.log(toDoItem, "toDoList");
  const itemListType = (e) => {
    setToDoList(e.target.value);
  };
  const deleteItem = (id) => {
    setToDoItem((allItem) => {
      return allItem.filter((arry, index) => {
        return index !== id;
      });
    });
  };
  const submitToDo = () => {
    setToDoItem((allItem) => {
      return [...allItem, toDoList];
    });
    setToDoList("");
  };

  return (
    <>
      <div className="main-div ">
        <div className="child-div">
          <div className="todolog" />
          <h1>to do list </h1>
          <div className="input d-flex mt-3">
            <input
              type="text"
              placeholder=" Add Items..."
              onChange={itemListType}
              value={toDoList}
            />
            <button onClick={submitToDo}>+</button>
          </div>
          {toDoItem.map((item, index) => {
            return (
              <ToDoListItem
                key={index}
                id={index}
                item={item}
                deleteItem={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
