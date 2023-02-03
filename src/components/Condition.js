import React from 'react'
import Cards from "./Cards";
import CardData from "./CardData"
export default function Condition() {
    const FevSeries = "amazone";
    return (
        <>
            {FevSeries === "Netflix" ? <Cards
                key={CardData[1].id}
                imgLink={CardData[1].imgLink}
                cardCate={CardData[1].cardCate}
                cardTitle={CardData[1].cardTitle}
                link={CardData[1].link}
            /> : <Cards
                key={CardData[2].id}
                imgLink={CardData[2].imgLink}
                cardCate={CardData[2].cardCate}
                cardTitle={CardData[2].cardTitle}
                link={CardData[2].link}
            />}
        </>
    )
}
