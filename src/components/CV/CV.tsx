import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CV.module.scss'



type CVProps = {

}

const CV: React.FC<CVProps> = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8"></meta>
        <title>Resume-CV</title>
        <link rel="stylesheet" href="CV.module.scss"></link>
        <script src="https://kit.fontawesome.com/b99e675b6e.tsx"></script>

      </head>
      <body>

        <div className="resume"></div>
        <div className="resume_left"></div>
        <div className="resume_profile"></div>
        <img src="https://imgur.com/NRLhOyl.jpg" alt="profile_pic"></img>
        <div>
          <div className="resume_content"></div>
          <div className="resume_item resume_info"></div>
          <div className="title"></div>
            <p className="bold">Juhani Vuorinen</p>
            <p className="regular">Student</p>
        </div>
          <ul>
            <li>
              <div className="icon">      
                <i className="fas fa-map-signs"></i>     
                </div> 
            <div className="data">
            Hevostilantie 1, Espoo, <br></br> Finland
            </div>
            </li>
            <li>
            <div className="icon">
            <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="data"> 
            +040 0556963
            </div>
          
            </li>
            <li>
              <div className="icon">
              <i className="fas fa-envelope"></i>
              </div>
              <div className="data">
                jjvuorinen05@gmail.com
              </div>
            </li>
            <li>
              <div className="icon">
              <i className="fab fa-weebly"></i>
              </div>
              <div className="data">
              www.juhaniPortfolio.com
              </div>
            </li>
          </ul>
          <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">skill's</p>

            </div>
            <ul>
              <li>
                <div className="skill_name">
                HTML
                </div>
                <div className="skill_progress">
                </div>
                <div className="skill_per">70%</div>
              </li>
            </ul>
          </div>

      </body>
    </div>
  )
}

export default CV
