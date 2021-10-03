import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo.png'
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={Styles.Container}>
           <nav className={`navbar navbar-expand-lg justify-content-between p-0 ${Styles.Nav}`}>
  <a className={Styles.Logo} href="#">
      <img src={logo} />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={`collapse navbar-collapse ${Styles.Navbar}`} id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className={Styles.NavItem} href="#">About </a>
      </li>
      <li className="nav-item">
        <a className={Styles.NavItem} href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className={Styles.NavItem} href="#">Contact</a>
      </li>
    </ul>
    <div>
        <button>Get Started</button>
    </div>
   
  </div>
</nav>
        </div>
    )
}

export default Navbar
