import React from 'react'
import { Input } from 'reactstrap'

export default function Pokemon() {
    return (
        <>
            <Input
                name="select"
                type="select"
            >
                <option >
                    1
                </option>
                <option>
                    25
                </option>
                <option>
                    3
                </option>
                <option>
                    6
                </option>
                <option>
                    5
                </option>
            </Input>
        </>
    )
}
