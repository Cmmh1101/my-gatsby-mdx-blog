import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, embeddedImages },
      body,
    },
  } = data
  return (
    <Layout>
      <Hero smallHero />
      <Wrapper>
        <article>
          <div className="img-box">
            <GatsbyImage image={getImage(image)} alt={title} />
          </div>
          <div className="post-info">
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className="underline"></div>
          </div>
          <MDXRenderer embeddedImages={embeddedImages}>{body}</MDXRenderer>
        </article>
        <article>
          <Banner />
        </article>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMM Do, YYYY")
        slug
        title
        readTime
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
      body
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;

  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  .img-box {
    width: 100%;
    /* height: 25rem; */
    overflow: hidden;
    border-radius: var(--radius);
    margin-bottom: 1rem;
    box-shadow: 0px 0px 15px 0px rgba(50, 50, 50, 0.589);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(50, 50, 50, 0.589);
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
    .img-box {
      width: 100%;
      height: 25rem;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`

export default PostTemplate
