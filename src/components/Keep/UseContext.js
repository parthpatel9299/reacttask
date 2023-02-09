import React, { useContext } from 'react'
import { FullName, LastName } from './ContextApi'
export default function UseContext() {
    const fname = useContext(FullName)
    const lname = useContext(LastName)
    return (
        <>
            <h1>{lname} {fname}</h1>
        </>
    )
}
