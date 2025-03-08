import React, { useState, useEffect } from "react";
import Card from "../componentes/Card";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const DisplayEvents = () =>{
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();


    const getEvents = async() => {
        try {
          const response = await api.get("/Event?applicationId=07914cb7-9126-49ea-a76a-d51d87fb1ede"); 
          setEvents(response.data); 
          console.log("eventos " +response.data)
        } catch (error) {
          console.error(":", error);
        }
      };

      const nav = () => {
        
      }
  

      useEffect(() => {
        getEvents();
      }, []);

    return(
        <div>
            
                <h1 className="w3-margin">Upcoming Events</h1>
                <div>
                    {events ? (
                    <div className="w3-row w3-margin w3-center">
                        {events.map((event)=>(<Card name= {event.name} date = {event.date} price= {event.price} onclick= {nav}></Card>))}
                    </div>
                    ) : (
                        
                        <p>There is no events avaible</p>
                    )}
                </div>     
            
        </div>
    );
};

export default DisplayEvents;