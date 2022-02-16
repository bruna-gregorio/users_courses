import { BrowserRouter, Route, Routes } from "react-router-dom"

import Users from "./pages/Users";
import User from "./pages/User";
import Courses from "./pages/Courses";
import Course from "./pages/Course";


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/course" element={<Course />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}