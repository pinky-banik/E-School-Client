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
import MyProfile from "./Pages/MyProfile";
import AllCourse from "./Pages/AllCourse";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";
import Checkout from "./Pages/Checkout";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseDetails/:courseId" element={<CourseDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/courses" element={<AllCourse/>} />
        <Route path="/profile" element={<MyProfile/>} />
        <Route path="/payment" element={<RequireAuth><Payment/></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><Payment/></RequireAuth>} />
        <Route path='*' element={<Error/>}/>
        <Route path="/checkout" element={<RequireAuth><Checkout/></RequireAuth>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
