import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
const IndexPage = ({ data }) => {
  console.log(data)
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero showHeroImg />
      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do YYYY")
          slug
          readTime
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
        excerpt
      }
    }
  }
`

export default IndexPage
