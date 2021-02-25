/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const BreweryCard = ({ id, name, state, city }) => {
  return (
    <div
      css={css`
        background: var(--colorMed);
        margin-bottom: 1rem;
        padding: 0.25rem 0.5rem;
        border-radius: var(--borderRadius);
        box-shadow: 1px 1px 3px 1px var(--colorPrimary);
        transition: all 0.1s ease;

        &:hover {
          border: 1px solid var(--colorPrimary);
          box-shadow: none;
        }

        .link {
          color: var(--colorDark);
        }

        .location {
          display: flex;
        }
      `}
    >
      <Link to={`/brewery/${id}`} className="link">
        <h4>{name}</h4>
        <div className="location">
          <p>{city},</p>
          <p> {state}</p>
        </div>
      </Link>
    </div>
  )
}

export default BreweryCard
