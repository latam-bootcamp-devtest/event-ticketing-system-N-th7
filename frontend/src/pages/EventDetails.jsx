import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState();
    const [customer, setCustomer] = useState("");
    const [ticket, setTickets]= useState (0);
    const [finalPrice,setFinal] = useState(0);
    const [state, setState] = useState();
    const navigate = useNavigate();

    const dateFormat = (fechaISO) => {
        return fechaISO.split("T")[0];
      };
    

    const book = async (id,ticket,customer) => {
        try {
          const response = await api.post("/Booking", {
            "applicationId": "07914cb7-9126-49ea-a76a-d51d87fb1ede",
            "userId": "b6c51c7d-b987-492e-b2e3-c3536bcfe3ab",
            "eventId": id,
            "ticketQuantity": ticket,
            "customerName": customer
          });
          console.log("Reserva exitosa:", response.data);
          alert("Reserva exitosa 🎉");
          navigate('/events')
    
        } catch (error) {
          console.error("Error al reservar:", error.response?.data || error.message);
          alert("Hubo un error al reservar evento");
        }
      };

    const calculatePrice = () =>{
        setFinal(ticket*event.price);

    };
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
    const handleChange= () => {
        setState( true);
      }

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
                <h3>Date: {dateFormat(event.date)}</h3>
                <p>Description: {event.description}</p><br />
                <p>Ticket price: {event.price}</p><br />
                <p>Avaible seats: {event.availableTickets}</p>

                <div hidden={state ?  false : true}>
                    <form action="">
                        <label htmlFor="">Customer name : </label>
                        <input type="text" onChange={(e) => setCustomer(e.target.value)}/>
                        <br />
                        <label htmlFor="">Tickets to book : </label>
                        <input
                        onChange={(e) => {setTickets(e.target.value)
                            calculatePrice()
                        }
                        }
                        type="number"
                        min={0}
                        max={10}
                        step= {1}
                        /> <br />
                            <p > Tolal price: </p> 
                            <p>{
                            finalPrice} $</p>   
                            <button onClick={()=> book(id,ticket,customer)} type="button">Book NOW</button>
                    </form>
                </div>
                <div hidden={state ?  true : false}>
                    <button onClick={handleChange}>Book ticket</button>
                </div>
                </div>
            </div>):
            (<p>Loading</p>)}

        </div>
    );
};

export default EventDetails;