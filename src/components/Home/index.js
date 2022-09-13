import './index.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import LogoS from '../../assets/images/LogoS.png'
import LogoA from '../../assets/images/LogoA.png'
import LogoSA from '../../assets/images/LogoSA.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['h', 'a', 'u', 'l', ' ']
  const surnameArray = ['t', 't', 'i', 'e']
  const jobArray = [
    'f',
    'u',
    'l',
    'l',
    ' ',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
  ]

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4500)
  //   useEffect(() => {
  // }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoS}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <img
              src={LogoA}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={surnameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>JavaScript | HTML | CSS | React | Redux | Express | Node.js | MongoDB | SQL </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
        <div className='home_logosa'>
          <img
            src={LogoSA}
            alt="JavaScript Developer Name, Web Developer Name"
          />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home

