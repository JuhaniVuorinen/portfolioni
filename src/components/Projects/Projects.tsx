import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div>
      <Link to="Projects">Projects</Link>
    </div>
  )
}

export default Projects
