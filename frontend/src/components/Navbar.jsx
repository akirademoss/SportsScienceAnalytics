import React, {useState} from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="runner-img">
            <img src= '/runner4.png' />
          </div>
          <h1>Player Performance Analysis Dashboard</h1>
        </div>
      </nav>
    </>
  )
}

export default Navbar