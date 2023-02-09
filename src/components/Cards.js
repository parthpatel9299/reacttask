import React from "react";
import { Button } from "reactstrap";
function Cards(props) {
  const cal =  props.index + 1
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgLink} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category"> {props.cardCate}</span>
          <h3 className="card_title">
            {props.cardTitle
              + '' + cal}
          </h3>
          <a href={props.link}>
            <Button color="success" >Watch now</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Cards;
