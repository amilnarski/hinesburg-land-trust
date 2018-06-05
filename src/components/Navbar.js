import React from 'react'
import Link from 'gatsby-link'

// import logo from '../img/temp-icon.svg'
import logo from '../img/hlt_gww_logo.jpg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="HLT" style={{ width: '47px'}} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/conserved-land">
          Conserved Land
        </Link>
        <Link className="navbar-item" to="/turkey-trot">
          Turkey Trot
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar


// <Link className="navbar-item" to="/current-projects">
//   Current Projects
// </Link>
