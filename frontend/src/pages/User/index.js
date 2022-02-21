import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiEye, FiEyeOff } from "react-icons/fi"

import api from "../../services/api"

import './styles.css'


export default function User() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')
  const [course_id, setCourse_id] = useState('')

  const [courses, setCourses] = useState([])

  // const [passwordShow, setPasswordShow] = useState(false)

  // const togglePassword = () => {
  //   setPasswordShow(!passwordShow)
  // }

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  useEffect(() => {
    api.get('courses').then(response => {
      setCourses(response.data)
    })
  }, [])

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
            {/* <div className="input-password">
              <input type={passwordShow ? "text" : "password"} className="input-pass" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
              <button type="button" className="btn-pass" onClick={togglePassword}>
                <FiEye color="#000" />
              </button>
            </div> */}

            <div className="input-password">
              <input type={values.showPassword ? "text" : "password"} className="input-pass" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
              <button type="button" className="btn-pass" onClick={handleClickShowPassword}>
                {values.showPassword ? <FiEye color="#000" /> : <FiEyeOff color="#000" />}
              </button>
            </div>
            <input type="text" placeholder="Photo" required value={photo} onChange={e => setPhoto(e.target.value)} />

            <select id="courses" value={course_id} onChange={e => setCourse_id(e.target.value)}>
              <option value="">-- Course --</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}