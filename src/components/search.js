/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Search = () => {
  return (
    <form
      css={css`
        margin: 2rem 0;

        input {
          display: block;
          width: 100%;
          border: transparent;
          border-bottom: 1px solid var(--colorPrimary);
          background: transparent;
          border-radius: var(--borderRadius);
          padding: 1rem;
          transition: var(--transition);

          &:hover {
            border: 1px solid var(--colorPrimary);
          }
        }
      `}
    >
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          placeholder="Search breweries by name or city"
        />
      </label>
    </form>
  )
}

export default Search
