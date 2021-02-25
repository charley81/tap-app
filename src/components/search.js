/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context/context'

const Search = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  })

  const searchBreweries = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
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
          ref={searchValue}
          onChange={searchBreweries}
        />
      </label>
    </form>
  )
}

export default Search
