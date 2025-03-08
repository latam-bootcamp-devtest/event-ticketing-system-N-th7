import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import { Link } from "react-router-dom";


const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState();

    const goBack= () =>{

    }

    const getEvent = async() => {
        try {
          const response = await api.get(`/Event/${id}?applicationId=07914cb7-9126-49ea-a76a-d51d87fb1ede`); 
          setEvent(response.data); 
          console.log("evento " +response.data)
        } catch (error) {
          console.error(":", error);
        }
      };

    useEffect(() => {
      getEvent();
    }, []);

    return(
        <div>
            
            <Link to={"/events"}>
            <button>
                Event details
            </button>
            </Link>
            
            {event ? 
            (<div className="w3-row">
                <div className="w3-col m5 l5">
                <img src={event.image} alt="" />
                </div>
                <div className="w3-col m5 l5">
                <h1>Event: {event.name}</h1>
                <h3>Date: {event.date}</h3>
                <p>Description: {event.description}</p><br />
                <p>Ticket price: {event.price}</p><br />
                <p>Avaible seats: {event.availableTickets}</p>
                <button>Book ticket</button>
                </div>
            </div>):
            (<p>Loading</p>)}

        </div>
    );
};

export default EventDetails;