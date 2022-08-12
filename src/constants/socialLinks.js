import React from 'react'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://github.com/Cmmh1101/" target="_blank" rel="noreferrer">
          <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/carla-montano/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/cmmh1101" target="_blank" rel="noreferrer">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
