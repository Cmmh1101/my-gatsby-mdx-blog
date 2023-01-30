import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <Title title="About me" />
      <StaticImage
        src="../../assets/pic-carla.png"
        layout="fixed"
        width={100}
        height={100}
        alt="author"
        className="img"
      />
      <p>Software Engineer @ Green Mountain Technology.</p>
      <p>
        As software engineer I enjoy every oportunity I have to building,
        learning, and mentoring others. I changed careers from teaching to
        programming and I like to help others make that transition happen as
        well.
      </p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
