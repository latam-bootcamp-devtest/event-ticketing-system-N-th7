import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayEvents from "../pages/DisplayEvents";
import EventDetails from "../pages/EventDetails";
import BookingHistory from "../pages/BookingHistory";
import AdminPanel from "../pages/AdminPanel";
import CreateEvent from "../pages/CreateEvent";

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/events" element={<DisplayEvents />} />
          <Route path="/history" element = {<BookingHistory/>} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />
          <Route path = "/adminpanel" element= {<AdminPanel/>}/>
          <Route path = "/createevent" element= {<CreateEvent/>}/>

        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;