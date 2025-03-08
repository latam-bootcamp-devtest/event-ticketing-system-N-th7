import React, { useState, useEffect } from "react";
import CardAdmin from "../componentes/CardAdmin";
import api from "../api/api";
import { useNavigate } from "react-router-dom";


const AdminPanel = () =>{
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
      const nav =() =>{
        navigate('/createevent');
      };

      const deleteEvent = async (id) =>{
        try {
            const response = await api.delete(`/Events/${id}?applicationId=07914cb7-9126-49ea-a76a-d51d87fb1ede`);
      
            console.log("Event deleted:", response.data);
            alert("Event deleted 🎉");
            getEvents();
      
          } catch (error) {
            console.error("Error deleting event:", error.response?.data || error.message);
            alert("There was an error deleting event");
          }
      }
  

      useEffect(() => {
        getEvents();
      }, []);

    return(
        <div>
            <h1 className="w3-margin">Admin Panel</h1>
            <h2 className="w3-margin"> Event List</h2>
            <button className="w3-right w3-margin" onClick={nav}> Create</button>
                <div>
                    {events ? (
                    <div className="w3-row w3-margin w3-center">
                        {events.map((event)=>(<CardAdmin img={event.image} name= {event.name} date = {event.date} price= {event.price} actiondelete={()=>deleteEvent(event.id)}></CardAdmin>))}
                    </div>
                    ) : (
                        
                        <p>There is no events avaible</p>
                    )}
                </div>  
        </div>
    );
};

export default AdminPanel;