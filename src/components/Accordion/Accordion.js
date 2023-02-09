import React, { useState } from 'react'
import AccordionITEM from './AccordionITEM';
import { AccordionData } from './api';
export default function Accordion() {
    const [data, setData] = useState(AccordionData)
    console.log(data);

    return (
        <>
            <h1>hello</h1>
            {data.map((d) => {
                return <>
                    <AccordionITEM key={d.id} {...d} />
                </>
            })

            }
        </>
    )
}
