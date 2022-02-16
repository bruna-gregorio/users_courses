import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import Footer from '../../components/Footer'

import './styles.css'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    api.get('courses').then(response => {
      setCourses(response.data)
    })
  }, [])

  async function handleDeleteCourse(id) {
    try {
      await api.delete(`courses/${id}`)

      setCourses(courses.filter(course => course.id !== id))
    } catch (err) {
      alert('Error')
    }
  }

  return (
    <div className="main">
      <div className="courses-container">
        <Link to="/course">
          <span className="btn">Cadastrar</span>
        </Link>

        <ul className="courses-list">
          {courses.map(course => (
            <li key={course.id}>
              <div className="courses-content">
                <h3>{course.name}</h3>

                <button onClick={() => handleDeleteCourse(course.id)}>
                  <FiTrash2 fontSize={16} color="#000" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}