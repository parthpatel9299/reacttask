import React from "react";
import Cards from "./Cards";
import CardData from "./CardData"

const FevSeries = "Netflix";
const IfCondition = () => {

    if (FevSeries === "Netflix") {
        return (
            <>
                <Cards
                    key={CardData[1].id}
                    imgLink={CardData[1].imgLink}
                    cardCate={CardData[1].cardCate}
                    cardTitle={CardData[1].cardTitle}
                    link={CardData[1].link}
                />
            </>
        );
    } else {
        return (
            <>
                <Cards
                    key={CardData[2].id}
                    imgLink={CardData[2].imgLink}
                    cardCate={CardData[2].cardCate}
                    cardTitle={CardData[2].cardTitle}
                    link={CardData[2].link}
                />
            </>
        );
    }
  
};
export default IfCondition;
