import React, { useState } from "react";
export default function AccordionITEM(props) {
    const [show, setShow] = useState(false);
    const toggle = () => { setShow(!show) }
    return (
        <>
            <h1 onClick={toggle}>{props.title}</h1>
            {show && <p>{props.content}</p>}
        </>
    )
}
