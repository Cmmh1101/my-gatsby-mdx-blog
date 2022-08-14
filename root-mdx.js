import './src/css/main.css'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  //  logic
  //   h3: () => <span>an you thought you had a heading 3</span>,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
