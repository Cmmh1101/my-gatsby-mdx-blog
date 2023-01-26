import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showHeroImg }) => {
  return (
    <header className="hero">
      <div className="header">
        <h1>
          <span>Welcome </span>to my blog
        </h1>
        <p>A journey from teaching to programming and beyond</p>
      </div>

      {showHeroImg && (
        <StaticImage
          src="../assets/person2.svg"
          placeholder="blurred"
          className="hero-person"
          alt="person typing"
        />
      )}
    </header>
  )
}

export default Hero
