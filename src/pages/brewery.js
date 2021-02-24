/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/loading'

// url to get single brewery by id
const url = `https://api.openbrewerydb.org/breweries/`

const Brewery = () => {
  const { id } = useParams()
  const [brewery, setBrewery] = useState(0)

  const getBrewery = async () => {
    const response = await fetch(`${url}${id}`)
    const data = await response.json()
    setBrewery(data)
  }

  useEffect(() => {
    getBrewery()
  }, [id])

  const {
    brewery_type,
    city,
    state,
    street,
    postal_code,
    phone,
    website_url,
    name,
  } = brewery

  return (
    <section
      css={css`
        .link {
          text-align: center;
          display: block;
          color: var(--colorDark);
        }
      `}
    >
      <Link to="/" className="btn">
        Back Home
      </Link>
      <h3>{name}</h3>
      <h4>{brewery_type}</h4>
      <div className="info">
        <div className="location">
          <p>{city}</p>
          <p>{state}</p>
          <p>{postal_code}</p>
        </div>
        <div className="contact">
          <a href={phone}>{phone}</a>
          <a href={website_url}>{website_url}</a>
        </div>
      </div>
    </section>
  )
}

export default Brewery
