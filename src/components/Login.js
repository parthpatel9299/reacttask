import React, { useState } from "react";

export default function Login() {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
    });
    const [store, setStore] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
    });
    console.log(store, "store");
    const onSubmit = (e) => {
        e.preventDefault();
        setStore(data);
    };
    const inputValue = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         number: preValue.number,
            //     };
            // } else if (name === "lname") {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         number: preValue.number,
            //     };
            // } else if (name === "email") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         number: preValue.number,
            //     };
            // } else if (name === "number") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         number: value,
            //     };
            // }
        });
    };
    return (
        <>
            <form>
                <h1>
                    Hello {store.fname} {store.lname}
                </h1>
                <div>{store.email}</div>
                <div> {store.number}</div>
                <input
                    type={"text"}
                    name={"fname"}
                    onChange={inputValue}
                    placeholder="fname"
                    value={data.fname}
                />
                <br />
                <input
                    type={"text"}
                    name={"lname"}
                    onChange={inputValue}
                    placeholder="lname"
                    value={data.lname}
                />
                <br />

                <input
                    type={"email"}
                    name={"email"}
                    onChange={inputValue}
                    placeholder="email"
                    value={data.email}
                />
                <br />

                <input
                    type={"text"}
                    name={"number"}
                    onChange={inputValue}
                    placeholder="number"
                    value={data.number}
                />
                <button type="submit" onClick={onSubmit}>
                    Submit
                </button>
            </form>
        </>
    );
}
