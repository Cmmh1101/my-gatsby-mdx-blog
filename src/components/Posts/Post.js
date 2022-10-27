import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = ({ excerpt, frontmatter }) => {
  const { title, image, slug, date, category, readTime } = frontmatter
  return (
    <Wrapper>
      <div className="img-box">
        <GatsbyImage image={getImage(image)} alt={title} className="img" />
      </div>
      <div className="info">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <div className="underline"></div>
        <p>{excerpt}</p>
        <Link to={`/posts/${slug}`} className="link">
          Continue Reading <IoMdArrowRoundForward />
        </Link>
        <footer>
          <span className="date">
            <FaRegClock className="icon"></FaRegClock>
            {date}
          </span>
          <span>{readTime} min</span>
        </footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  transition: all 0.3s ease-in-out;
  :hover .img {
    transform: scale(1.2);
  }
  .info {
    text-align: center;
  }
  .img-box {
    width: 100%;
    height: 20rem;
    overflow: hidden;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  .img {
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 15px 0px rgba(50, 50, 50, 0.589);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(50, 50, 50, 0.589);
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-grey-10);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.5;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--clr-primary-5);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--clr-primary-8);
    color: var(--clr-primary-8);
  }
  footer {
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-primary-5);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img-box {
        margin-bottom: 0;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
