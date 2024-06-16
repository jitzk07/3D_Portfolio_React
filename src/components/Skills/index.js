import { useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Skills = () => {
  const [letterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>

          <h2>Job Seeking Application</h2>
          <p>
            The project was created using <b>MERN</b>
            <br />• Implemented <b>Bcrypt</b> for robust password hashing and{' '}
            <b>JSON Web Tokens (JWT)</b> for secure user authentication..
            <br />• Integrated <b>Cloudinary</b> for efficient cloud-based image
            storage and retrieval. <br />• Ensured application security and
            performance with <b>CORS</b> implementation.
            <br />• Employed <b>Cookie-parser</b> for seamless handling of HTTP
            cookies and enhanced user experience.
            <br />
          </p>
          <h2>Online Code Editor</h2>
          <p>
            The Project was created using <b> HTMl, CSS, Bootstrap, JavaScript, Node.js.</b> <br/>
            • Spearheaded the development of an innovative online code editor, facilitating  <b>seamless code compilation and execution </b> within a 
            user-friendly interface. <br/>
            • Enhanced the <b>coding experience by providing a streamlined platform for developers to write and execute code efficiently.</b> <br/>
            • Implemented features to support Web Development, allowing users to create and edit websites using <b>HTML, CSS, and JavaScript </b> within the platform.
          </p>
          <h2>3-D Portfolio</h2>
          <p>
          • The project was created using <b>React.js</b>.<br /> 
          • Use of <b>Advanced Animations.</b>
          </p>
        </div>
      </div>
    </>
  )
}
export default Skills
