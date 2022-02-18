import { FiGlobe } from "react-icons/fi"
import { Link } from "react-router-dom"

import './styles.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <header>
          <FiGlobe fontSize={24} color="#8072e6" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/users">Students</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </nav>
        </header>
        <div className="text">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit facere officiis. Consequatur qui alias ex omnis.</p>

          <button>Lorem ipsum</button>
        </div>
      </div>
    </div>
  )
}