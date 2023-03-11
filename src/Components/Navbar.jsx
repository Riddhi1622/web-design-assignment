import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand navlink" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active navlink" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active navlink" aria-current="page" to='about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active navlink" aria-current="page" to='services'>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active navlink" aria-current="page" to='tools'>Tools</Link>
              </li>
            
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar