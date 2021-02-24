import { Link } from 'react-router-dom'

const BreweryCard = ({ id, name, state, city }) => {
  return (
    <Link to={`/brewery/${id}`}>
      <h3>{name}</h3>
      <p>{city}</p>
      <p>{state}</p>
    </Link>
  )
}

export default BreweryCard
