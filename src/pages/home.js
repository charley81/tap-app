import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Search from '../components/search'
import BreweriesContainer from '../components/breweries-container'

const Home = () => {
  return (
    <div
      css={css`
        max-width: var(--maxWidth);
        margin: auto;
        padding: 1rem;
      `}
    >
      <Search />
      <BreweriesContainer />
    </div>
  )
}

export default Home
