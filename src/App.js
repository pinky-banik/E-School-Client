import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CourseDetails from './Components/Courses/CourseDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseDetails/:courseId" element={<CourseDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
