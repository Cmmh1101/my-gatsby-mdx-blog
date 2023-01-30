import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showHeroImg, showHeroHeader, smallHero }) => {
  return (
    <header className={smallHero ? 'small-hero' : 'hero'}>
      <div className="header">
        {showHeroHeader && (
          <>
            <h1>Welcome to my blog</h1>
            <p>A journey from teaching to programming and beyond</p>
          </>
        )}
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
