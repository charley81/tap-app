/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Navbar = () => {
  return (
    <nav
      css={css`
        background: red;
      `}
    >
      <h1>tapApp</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default Navbar
