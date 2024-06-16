import {useState } from 'react'
import {
 
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass] = useState('text-animate')



  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
          My name is <b>Jitendra Kumar</b>, and I have recently completed my Master's in <b>Computer Applications (MCA) from USICT, graduating with a CGPA of 8.395.</b> I am writing to express my keen interest in the Full Stack Developer position.

          </p>
          <p >
          Over the past year, I have gained extensive hands-on experience in frontend development, showcasing my proficiency in <b>HTML, CSS, JavaScript, and various frontend frameworks, including React.</b> During my internship at Clouclix Software PVT LTD, which I completed in May, I played a pivotal role in <b>designing and implementing responsive user interfaces </b> that significantly enhanced the overall user experience. My ability to translate <b> design mockups into clean and efficient code ensures seamless functionality </b> across diverse browsers and devices.
          </p>
          <p>
          In addition to my frontend skills, I have a foundational understanding of backend technologies and am actively learning more about them. I am familiar with<b> databases such as MongoDB and MySQL</b>, which further enhances my capability to contribute to full-stack development projects.

          </p>
          <p>I am now actively seeking a Full Stack developer role where I can leverage my skills and experiences to contribute to impactful projects.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About