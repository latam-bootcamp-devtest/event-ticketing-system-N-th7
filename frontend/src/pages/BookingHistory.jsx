import React, { useState, useEffect } from "react";
import Card from "../componentes/Card";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();


    const getEvents = async() => {
        try {
          const response = await api.get("User/b6c51c7d-b987-492e-b2e3-c3536bcfe3ab/Events?applicationId=07914cb7-9126-49ea-a76a-d51d87fb1ede"); 
          setEvents(response.data); 
          console.log("eventos " +response.data)
        } catch (error) {
          console.error(":", error);
        }
      };
  

      useEffect(() => {
        getEvents();
      }, []);

    return(
        <div>
            
                <h1 className="w3-margin">Booking History</h1>
                <div>
                    {events ? (
                    <div className="w3-row w3-margin w3-center">
                        {events.map((event)=>(<Card img={event.image} name= {event.name} date = {event.date} price= {event.price} ></Card>))}
                    </div>
                    ) : (
                        
                        <p>There is no booked events</p>
                    )}
                </div>     
            
        </div>
    );
};
export default BookingHistory;