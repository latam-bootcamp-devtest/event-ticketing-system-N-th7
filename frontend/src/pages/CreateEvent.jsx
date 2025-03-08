import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const CreateEvent = () =>{
const [name, setName] = useState("");
const [image, setImage] = useState ("");
const [location, setLocation] = useState("");
const [date,setDate] = useState("");
const [cost, setCost] = useState(0);
const navigate = useNavigate();


const create = async (name,date,image,cost,location) =>{
        try {
          const response = await api.post("/Event", {
            "applicationId": "07914cb7-9126-49ea-a76a-d51d87fb1ede",
            "name": name,
            "date": "2025-03-08T15:40:40.886Z",
            "image": image,
            "price": cost,
            "location":location,
          });
          console.log("Event created:", response.data);
          alert("Event Created 🎉");
          navigate("/adminpanel");
    
        } catch (error) {
          console.error("Error creating event:", error.response?.data || error.message);
          alert("There was an error creating event");
        }
}

    return(
        <div className="w3-center">
            <form action="">
                <label htmlFor="">Image</label>
                <input type="text" onChange={(e) => setImage(e.target.value)}/><br />

                <label htmlFor="">Name: </label>
                <input type="text" onChange={(e) => setName(e.target.value)} /><br />

                <label htmlFor="">Date: </label>
                <input type="date" name="" id="" onChange={(e) => setDate(e.target.value)}/><br />

                <label htmlFor="">Location: </label>
                <input type="text" onChange={(e) => setLocation(e.target.value)} /><br />

                <label htmlFor="">Cost: </label>
                <input  
                type="number"
                min={0}
                step= {1} onChange={(e) => setCost(e.target.value)}/> <br />
                
                

            </form>
            <button onClick={()=>create(name,date,image,cost,location)} >Save</button>

        </div>
    );
}

export default CreateEvent;