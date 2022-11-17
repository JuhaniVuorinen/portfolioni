import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
    return (
        <div className={styles.container}>
      <h1>testi</h1>
      <p>About Me Page</p>
        </div>
      )
}

export default AboutMe
