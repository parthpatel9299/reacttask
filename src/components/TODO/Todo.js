import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import "../../todo.css";
export default function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleData, setToggleData] = useState(true);
  const [editData, setEditData] = useState();
  const AddItem = () => {
    if (!inputData) {
    } else if (inputData && !toggleData) {
      setItems(items.map((data) => {
        if (data.id === editData) {
          return { ...data, name: inputData };
        }
        return data;
      }));
      setInputData("");
      setToggleData(true)
    } else {
      const updateData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, updateData]);
      setInputData("");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!inputData) {
      } else if (inputData && !toggleData) {
        setItems(items.map((data) => {
          console.log("data", data, editData);
          if (data.id === editData) {
            return { ...data, name: inputData };
          }
          return data;
        }));
        setInputData("");
        setToggleData(true)

      } else {
        const updateData = {
          id: new Date().getTime().toString(),
          name: inputData,
        };
        setItems([...items, updateData]);
        setInputData("");
      }
    }
  };
  const deleteItem = (id) => {
    const deleteItems = items.filter((d, index, array) => {
      return id !== d.id;
    });
    setItems(deleteItems);
  };
  const RemoveAll = () => {
    setItems([]);
  };
  const editItem = (dataID) => {
    const editItemsData = items.find((data) => {
      return data.id === dataID;
    });
    setToggleData(false);
    setInputData(editItemsData.name);
    setEditData(dataID);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src={
                "https://vaibhavsharma1998.github.io/todo-list/static/media/Logo.3bee1e3a6c4ebdf1f139.png"
              }
              alt="todologo"
            />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onKeyDown={handleKeyDown}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleData ? (
              <Icon
                icon={"ic:round-plus"}
                className="fa fa-plus add-btn"
                title="Add Items"
                onClick={AddItem}
              />
            ) : (
              <Icon
                icon="fa:edit"
                title="Edit Items"
                className="far fa-edit add-btn"
                onClick={AddItem}
              />
            )}
          </div>
          {items.map((d) => {
            return (
              <div className="showItems" key={d.id}>
                <div className="eachItem">
                  <h3>{d.name}</h3>
                  <div class="todo-btn">
                    <Icon
                      icon="fa:edit"
                      title="Edit Items"
                      className="far fa-edit add-btn"
                      onClick={() => editItem(d.id)}
                    />
                    <Icon
                      icon="uil:trash-alt"
                      title="Delete Items"
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(d.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* clear all button  */}
          <div className="showItems">
            <button className="btn effect04" onClick={RemoveAll}>
              <span> CHECK LIST </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
