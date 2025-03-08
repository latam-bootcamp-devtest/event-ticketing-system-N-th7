import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayEvents from "../pages/DisplayEvents";
import EventDetails from "../pages/EventDetails";

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/events" element={<DisplayEvents />} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />

        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;