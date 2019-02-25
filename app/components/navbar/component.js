import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export default () => {
  return (
    <nav className="primary-nav">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/login">Logout</Link>
      </div>
    </nav>
  )
}
