import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayEvents from "../pages/DisplayEvents";

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/events" element={<DisplayEvents />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;