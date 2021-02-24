import { useGlobalContext } from '../context/context'

const BreweriesContainer = () => {
  const { loading, breweries } = useGlobalContext()

  console.log(breweries)

  return (
    <section>
      {breweries.map(brewery => {
        return <p key={brewery.id}>{brewery.name}</p>
      })}
    </section>
  )
}

export default BreweriesContainer
