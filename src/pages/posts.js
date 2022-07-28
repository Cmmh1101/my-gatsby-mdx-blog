import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'

const PostsPage = () => {
  return (
    <Layout>
      <Hero />
      {/* <Posts /> */}
    </Layout>
  )
}

export default PostsPage
