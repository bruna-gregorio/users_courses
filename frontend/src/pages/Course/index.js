import { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { useNavigate, Link } from "react-router-dom"

import api from "../../services/api"

import './styles.css'


export default function Course() {
  const [name, setName] = useState('')

  const navigate = useNavigate()

  async function handleRegisterCourse(e) {
    e.preventDefault()

    const data = { name }

    try {
      await api.post('courses', data)

      alert("Success")

      navigate('/courses')
    } catch (err) {
      alert("Falha")
    }
  }


  return (
    <div className="register-course-container">
      <div className="register-course-content">
        <Link to="/courses">
          <FiArrowLeft size={26} color="#f5f5f5" />
        </Link>

        <div className="text-info">
          <h3>Lorem Ipsum</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui vel aspernatur excepturi.</p>
        </div>
        <form onSubmit={handleRegisterCourse}>
          <h2>Register Course</h2>

          <div className="input-btn">
            <input type="text" placeholder="name" required value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}