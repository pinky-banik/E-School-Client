import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CourseDetails from './Components/Courses/CourseDetails';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import RequireAuth from "./RequireAuth/RequireAuth";
import Payment from './Pages/Payment';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseDetails/:courseId" element={<CourseDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/payment" element={<RequireAuth><Payment/></RequireAuth>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
