/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useGlobalContext } from '../context/context'
import BreweryCard from './brewery-card'
import Loading from './loading'

const BreweriesContainer = () => {
  const { breweries, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  return (
    <section
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
      `}
    >
      {breweries.map(brewery => {
        return <BreweryCard key={brewery.id} {...brewery} />
      })}
    </section>
  )
}

export default BreweriesContainer
