import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../../services/api"

import './styles.css'


export default function User() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')
  const [course_id, setCourse_id] = useState('')

  const navigate = useNavigate()

  async function handleRegisterUser(e) {
    e.preventDefault()

    const data = { name, age, email, password, photo, course_id }

    try {
      await api.post('users', data)

      alert("Sucesso")

      navigate('/users')
    } catch (err) {
      alert("Falha")
    }
  }

  return (
    <div className="register-user-container">
      <div className="register-user-content">
        <div className="text-info">
          <h3>Lorem Ipsum</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui vel aspernatur excepturi.</p>
        </div>
        <form onSubmit={handleRegisterUser}>
          <h2>Register</h2>

          <div className="input-btn">
            <div className="input-group">
              <input type="text" className="name" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} />
              <input type="number" placeholder="Age" required value={age} onChange={e => {
                if (e.target.value.length > 2 || e.target.value < 0) return false

                setAge(e.target.value)
              }} />
            </div>
            <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
            <input type="text" placeholder="Photo" required value={photo} onChange={e => setPhoto(e.target.value)} />

            <select id="courses" value={course_id} onChange={e => setCourse_id(e.target.value)}>
              <option value="">Course</option>
              <option value="3236aa63-4524-4fec-b71e-314143aa1f02">Contabilidade</option>
              <option value="5f0daf74-3272-4dc2-bf67-6c6fa3612a63">Jornalismo</option>
              <option value="6fb35195-661e-481e-b036-52e8bc7d273f">Enfermaria</option>
              <option value="b435f25a-a99a-45d3-906b-1692a5a2f4c7">Advocacia</option>
              <option value="c64295d2-5e55-485b-b0d0-c6416bfcf8d7">Engenharia</option>
              <option value="c918a7e0-74e4-4746-9769-f6d779fe5783">Administração</option>
              <option value="cc941e50-7f2b-4d75-90ae-835551011e1c">Odontologia</option>
              <option value="d602cd10-7d3e-417c-82d7-0eef265b2cc6">Ciências da computação</option>
              <option value="ed7b92bc-d10f-4ace-8926-b3ac3e2b903c">Medicina</option>
            </select>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}