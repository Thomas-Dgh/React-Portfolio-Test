import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <>

        <div className="nav-bar">

            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='linkedin.com'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4D4D4E" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='github.com'>
                        <FontAwesomeIcon icon={faGithub} color="#4D4D4E" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='youtube.com'>
                        <FontAwesomeIcon icon={faYoutube} color="#4D4D4E" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='skype.com'>
                        <FontAwesomeIcon icon={faSkype} color="#4D4D4E" />
                    </a>
                </li>
            </ul>
        </div>


    </>)

export default Sidebar