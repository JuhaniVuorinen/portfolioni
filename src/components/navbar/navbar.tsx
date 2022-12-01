import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'


type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
       <Link to="/"></Link> 
      <Link to="AboutMe">AboutMe</Link>
      <Link to="Footer">Footer</Link>
      <Link to="Projects">Projects</Link>
      <Link to="CV">CV</Link>
    </div>
  )
}

export default Navbar;
