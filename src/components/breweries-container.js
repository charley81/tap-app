import { useGlobalContext } from '../context/context'
import BreweryCard from './brewery-card'

const BreweriesContainer = () => {
  const { breweries } = useGlobalContext()

  return (
    <section>
      {breweries.map(brewery => {
        return <BreweryCard key={brewery.id} {...brewery} />
      })}
    </section>
  )
}

export default BreweriesContainer
