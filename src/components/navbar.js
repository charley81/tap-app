/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import About from '../pages/about'

const Navbar = () => {
  return (
    <header
      css={css`
        padding: 1rem;
        background: var(--colorDark);
        width: 100%;

        a {
          color: var(--colorLight);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--maxWidth);
          margin: auto;
        }

        span {
          color: var(--colorPrimary);
          text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.7);
        }

        ul {
          display: flex;
        }

        li {
          padding: 0 0.5rem;
        }
      `}
    >
      <nav>
        <h1>
          <Link to="/">
            tap<span>App</span>
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
