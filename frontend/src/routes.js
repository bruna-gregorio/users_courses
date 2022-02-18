import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Users from "./pages/Users";
import Register from "./pages/User";
import Courses from "./pages/Courses";
import Course from "./pages/Course";


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/users" element={<Users />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}