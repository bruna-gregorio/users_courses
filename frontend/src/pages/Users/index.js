import { useState, useEffect } from "react"
import { FiTrash2 } from "react-icons/fi"

import api from "../../services/api"

import Footer from "../../components/Footer"

import './styles.css'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data)
    })
  }, [])

  async function handleDeleteUser(id) {
    try {
      await api.delete(`users/${id}`)

      setUsers(users.filter(user => user.id !== id))
    } catch (err) {
      alert("Error")
    }
  }

  return (
    <div className="main">
      <div className="users-container">
        <h2>Our Students</h2>
        <ul className="list-users">
          {users.map(user => [
            <li key={user.id}>
              <div className="user-content">
                <button onClick={() => handleDeleteUser(user.id)}>
                  <FiTrash2 fontSize={16} color="#000" />
                </button>
                <div className="user-image">
                  <img src={user.photo} alt={user.name} />
                </div>
                <div className="user-info">
                  <span>{user.name}, {user.age}</span>
                  <span>{user.email}</span>
                </div>
                <div className="course-name">
                  <span>{user.course.name}</span>
                </div>
              </div>
            </li>
          ])}
        </ul>
      </div>
      <Footer />
    </div>
  )
}