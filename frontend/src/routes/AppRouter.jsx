import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayEvents from "../pages/DisplayEvents";
import EventDetails from "../pages/EventDetails";
import BookingHistory from "../pages/BookingHistory";

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/events" element={<DisplayEvents />} />
          <Route path="/history" element = {<BookingHistory/>} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />

        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;