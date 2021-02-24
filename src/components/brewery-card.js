/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const BreweryCard = ({ id, name, state, city }) => {
  return (
    <div
      css={css`
        background: var(--colorMed);
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: var(--borderRadius);
        box-shadow: 1px 1px 3px 1px var(--colorPrimary);

        &:hover {
          border: 1px solid var(--colorPrimary);
          box-shadow: none;
        }

        a {
          color: var(--colorDark);
        }
      `}
    >
      <Link to={`/brewery/${id}`}>
        <h3>{name}</h3>
        <p>City: {city}</p>
        <p>State: {state}</p>
      </Link>
    </div>
  )
}

export default BreweryCard
