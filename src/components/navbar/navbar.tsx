import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
       <Link to="/"></Link> 
      <Link to="HomePage">HomePage</Link>
    </div>
  )
}

export default Navbar;
