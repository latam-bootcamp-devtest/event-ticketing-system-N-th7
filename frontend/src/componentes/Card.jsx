import React from "react";
import 'w3-css/w3.css';

const Card = (props) => {
    const dateFormat = (fechaISO) => {
        return fechaISO.split("T")[0];
      };
      
    return(
        <div className="w3-card-4 w3-col m4 l3 w3-margin">
            <h2>Event: {props.name}</h2>
            <p>Date: {dateFormat(props.date)}</p>
            <p>Price: {props.price}</p>
        </div>
    );
};

export default Card;