import React from 'react'
import { Link } from 'react-router-dom'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div>
      <Link to="/">Home</Link> 
      <Link to="first">My First Component</Link>
    </div>
  )
}

export default NavbarProps
