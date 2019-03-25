import React from 'react'
import { A } from 'hookrouter'
import './styles.scss'

export default () => {
  return (
    <nav className="primary-nav">
      <div className="nav-links">
        <A href="/">Home</A>
        <A href="/profile">Profile</A>
        <A href="/login">Login</A>
        <A href="/login">Logout</A>
      </div>
    </nav>
  )
}
