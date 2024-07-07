import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FindJobs from "./pages/FindJobs/FindJobs";
import NavBar from "./components/NavBar/NavBar";
import Employer from "./pages/Employer/Employer";
import Signin from "./pages/Signin/Signin";
import Register from "./pages/Register/Register";
import FooterDiv from "./components/Footer/FooterDiv";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/FindJobs" element={<FindJobs />} />
          <Route path="/Employer" element={<Employer />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <FooterDiv />
      </Router>
    </div>
  );
};

export default App;
