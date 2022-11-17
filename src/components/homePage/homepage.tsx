import React from 'react'
import styles from './homePage.module.scss'

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Juhani Portfolio</h1>
    </div>
  )
}

export default Homepage

