import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";

export default function TodoTwo() {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState();
  const [toggle, setToggle] = useState("Add");
  console.log(data);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      saveData();
    }
  };
  const saveData = () => {
    if (!inputData) {
    } else if (toggle === "Edit") {
      setData(
        data.map((items) => {
          if (items.id === editData) {
            return { ...items, name: inputData };
          }
          return items;
        })
      );
      setInputData("");
    } else {
      const IdWithData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setData([...data, IdWithData]);
      setInputData("");
    }
  };
  const editItem = (id) => {
    const selectedId = data.find((d) => {
      return d.id === id;
    });
    setInputData(selectedId.name);
    setEditData(id);
    setToggle("Edit");
  };
  const deleteItem = (id) => {
    setData(
      data.filter((f) => {
        return f.id !== id;
      })
    );
  };
  return (
    <>
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
                onChange={(d) => setInputData(d.target.value)}
              />
              {toggle === "Add" ? (
                <Icon
                  icon={"ic:round-plus"}
                  className="fa fa-plus add-btn"
                  title="Add Items"
                  onClick={saveData}
                />
              ) : (
                <Icon
                  icon="fa:edit"
                  title="Edit Items"
                  className="far fa-edit add-btn"
                  onClick={saveData}
                />
              )}
            </div>
            {data.map((d) => {
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
              <button className="btn effect04" onClick={() => setData([])}>
                <span> CHECK LIST </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
