import React from "react";
import 'w3-css/w3.css';

const CardAdmin = (props) => {
    const dateFormat = (fechaISO) => {
        return fechaISO.split("T")[0];
      };
      
    return(
        <div className="w3-card-4 w3-col m4 l3 w3-margin"  onClick = {props.onClick}>
            <h2>Event: {props.name}</h2>
            <img src={props.img} width={300} />
            <p>Date: {dateFormat(props.date)}</p>
            <p>Price: {props.price}</p>
            <button onClick={props.actionedit}>Edit</button>
            <button onClick={props.actiondelete}>Delete</button>
        </div>
    );
};

export default CardAdmin;