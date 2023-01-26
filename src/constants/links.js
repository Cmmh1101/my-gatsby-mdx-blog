import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link
          to="/"
          className="page-link"
          activeStyle={{
            color: '#3987f3',
            fontWeight: 700,
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/posts"
          className="page-link"
          activeStyle={{
            color: '#3987f3',
            fontWeight: 700,
          }}
        >
          Posts
        </Link>
        {children}
      </li>
      {/* <li>
        <Link
          to="/newsletter"
          className="page-link"
          activeStyle={{
            color: '#3987f3',
            fontWeight: 700,
          }}
        >
          Newsletter
        </Link>
      </li> */}
      <li>
        <a
          href="https://carlamontano.tech"
          className="page-link"
          target="_blank"
          rel="noreferrer"
        >
          Portfolio
        </a>
      </li>
    </ul>
  )
}

export default Links
