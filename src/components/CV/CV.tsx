import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CV.module.scss'



type CVProps = {

}

const CV: React.FC<CVProps> = () => {
  return (
    <><div>

      {/* <meta charSet="UTF-8"></meta>
    <title>Resume-CV</title>
    <link rel="stylesheet" href="CV.module.scss"></link>
    <script src="https://kit.fontawesome.com/b99e675b6e.tsx"></script> */}



      <div className={styles.container}></div>
      <div className={styles.bold}></div>
      <div className={styles.resume_left}></div>
      <div className={styles.resume_profile}></div>
      <div className={styles.profile_pic}>
        <img src="https://imgur.com/NRLhOyl.jpg"></img>
      </div>
      <div>
        <div className={styles.resume_content}></div>
        <div className={styles.resume_item}></div>
        <div className={styles.resume_info}></div>
        <div className={styles.title}></div>
        <p className={styles.bold}>Juhani Vuorinen</p>
        <p className={styles.regular}>Student</p>
      </div>
      <ul>
        <li>
          <div className={styles.icon}>

          </div>
          <div className={styles.data}>
            Finland
            <br></br>
          </div>
        </li>
        <li>
          <div className={styles.icon}>

          </div>
          <div className={styles.data}>
            +999999999999
          </div>

        </li>
        <li>
          <div className={styles.icon}>

          </div>
          <div className={styles.data}>
            gmail@gmail.com
          </div>
        </li>
        <li>
          <div className={styles.icon}>

          </div>
          <div className={styles.data}>
            www.juhaniPortfolio.com
          </div>
        </li>
      </ul>
      <div className={styles.skills}>
        <div className={styles.title}>
          <p className={styles.bold}>Skill's</p>

        </div>
        <ul>
          <li>
            <div className={styles.skill_name}>
              HTML
            </div>
            <div className={styles.skill_progress}>

            </div>
            <div className={styles.progress_bar}>70%</div>
          </li>
          <li>
            <div className={styles.skill_name}>
              CSS
            </div>
            <div className={styles.skill_progress}>

            </div>
            <div className={styles.skill_per}>75%</div>
          </li>
          <li>
            <div className={styles.skill_name}>
              Javascript
            </div>
            <div className={styles.skill_progress}>

            </div>
            <div className={styles.skill_per}>80%</div>
          </li>
          <li>
            <div className={styles.skill_name}>
              Photoshop
            </div>
            <div className={styles.skill_progress}>

            </div>
            <div className={styles.skill_per}>100%</div>
          </li>
        </ul>
      </div>
      <div className={styles.resume_item_resume_social}>
        <div className={styles.title}>
          <p className={styles.bold}>SOCIAl'S</p>
        </div>
        <ul>
          <li>
            <div className={styles.icon}>

            </div>
            <div className={styles.data}>
              <p className={styles.semibold}>Twitter</p>
              <p>@FinnieshFlash</p>
            </div>
          </li>
          <li>
            <div className={styles.icon}>

            </div>
            <div className={styles.data}>
              <p className={styles.semibold}>Youtube</p>
              <p>Football Knowledge</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.resume_right}>
        <div className={styles.resume_item_resume_about}>
          <div className={styles.title}>
            <p className={styles.bold}>About Me</p>
          </div>
          <p>ufejshaffjwhdfgeugfbsuafufb</p>
        </div>
        <div className={styles.resume_work}>
          <p className={styles.bold}>Work Experience</p>
        </div>
        <ul>
          <li>
            <div className={styles.work1}> Few weeks in 2020</div>
            <div className={styles.work2}>
              <p className={styles.work3}>lorem ipsutmit</p>
              <p>jjfisnfsjfisjfi</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.resume_education}>

        <p className={styles.bold}>Education</p>
      </div>
      <ul>
        <li>
          <div className={styles.edu1}>2021 - Present</div>
          <div className={styles.edu2}>
            <p className={styles.edu3}>Programming (Vantaan ammattiopisto Varia)</p>
            <p>lorempisumit</p>
          </div>
        </li>
        <li>
          <div className={styles.date}>2011 - 2021</div>
          <div className={styles.info}></div>
          <p className={styles.semibold}>Juvanpuistonkoulu</p>
          <p>loremipsumit</p>
        </li>
      </ul>
    </div><div className={styles.resume_hobby}>
        <div className={styles.title}>
          <p className={styles.bold}>Free Time</p>
        </div>
        <div className={styles.title}></div>
          <p className={styles.bold}>Football Historically</p>
        <ul>
          <li className={styles.Football}>Ballon d'or winners and nominees</li>
          <li className={styles.Football}>World Cup and European Cup/UCL winners</li>
          <li className={styles.Football}>Football Records</li>
          </ul>

          <div className={styles.title}></div>
          <p className={styles.bold}>Video Games: I play lot of video games in my spare time.</p>
          <ul>
          <li className={styles.Games}>Favorite genres:</li>
          <li className={styles.Games}>Platformers</li>
          <li className={styles.Games}>2D Pixel Horror </li>
          <li className={styles.Games}>Sport</li>
          </ul>

          <div className={styles.title}></div>
          <p className={styles.bold}>Games i play now:</p>

          <ul>
          <li className={styles.Games2}>WWE 2k22</li>
          <li className={styles.Games2}>FIFA 23</li>
          <li className={styles.Games2}>Ratchet And Clank Original Trilogy</li>
          <li className={styles.Games2}>Stardew Valley with mods</li>
          </ul>

          <div className={styles.title}></div>
          <p className={styles.bold}>Music: i listen to pretty much all the time:</p>

          <div className={styles.title}></div>
          <p className={styles.bold}>Favorite genres:</p>

          <ul>

          <li className={styles.Music}>Power Metal</li>
          <li className={styles.Music}>Alternative Metal</li>
          <li className={styles.Music}>Metalcore</li>
          </ul>

          <div className={styles.title}>
          
          </div>
          <p className={styles.bold}>Favorite bands with 3 songs from them:
         
          </p>
          <div className={styles.profile_pic}>
          <img src="https://imgur.com/a/bwC8dg5.jpg"></img>
      </div>
           

         
          <li className={styles.Music}>Demon Hunter: PRAISE THE VOID, The Heart of a Graveyard, I Am a Stone(Resurrected Version)</li>
          <li className={styles.Music}>Sabaton: Steel Commanders, Soldier of 3 Armies, White Death</li>
          <li className={styles.Music}>HIM (His Infernal Majesty): Join Me in Death, The Funeral Of Hearts, Killing Loneliness</li>
          <li className={styles.Music}>Five Finger Death Punch: Sham Pain, Hell To Pay, The End</li>
          <li className={styles.Music}>Limp Bizkit: Rollin' (Air Way Vehicle) (Was used as The Undertakers theme song in early 2000s), My Way, Behind Blue</li>
          <li className={styles.Editing}>Editing/Designs: I do lot of projects with Photoshop</li>
          <li className={styles.Design}>Custom cards for FIFA</li>
          <li className={styles.Design}>Custom tattoos and images for my custom WWE 2k22 wrestler</li>
          <li className={styles.Design}>Sometimes video editing</li>
        
      </div></>
      
    
  )
}

export default CV;