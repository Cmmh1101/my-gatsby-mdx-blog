import './src/css/main.css'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Code,
  Headings,
  Blockquote,
  PrismSetup,
} from './src/components/PostsUtils'

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
