import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import LogoSA from '../../assets/images/LogoSA.png'
// import LogoA from '../../assets/images/LogoA.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
    return (
        <div className='nav-bar'>
            <div className='logo_nav-bar'>
                <Link to='/' >
                    <img className='logos' src={LogoSA} alt='logoSA' />
                    {/* <img className='logoa' src={LogoA} alt='logoA' /> */}
                    {/* <img className='sub-logo' src={LogoSubtitle} alt='slobodan' /> */}
                </Link>
            </div>

            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <div className='social_link'>
                <a
                    href="https://www.linkedin.com/in/shaul-attie/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
                <a
                    href="https://github.com/ShaulAttie"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>

                {/*
                        <a
                            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                        </a>
                   
                        <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                        </a>
                    */}

            </div>
        </div>
    )
}

export default SideBar
