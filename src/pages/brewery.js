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
        padding: 1rem;

        .btn {
          color: var(--colorPrimary);
          display: block;
          margin-bottom: 1rem;
        }

        h3 {
          margin-bottom: 0;
          font-size: 2rem;
        }

        span {
          background-color: var(--colorPrimary);
          color: var(--colorLight);
          padding: 0.25rem;
          border-radius: var(--borderRadius);
        }

        .info {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
        }

        .location {
          margin: 1rem 0;
        }

        .contact {
          a {
            display: block;
          }
        }
      `}
    >
      <Link to="/" className="btn">
        Back Home
      </Link>
      <h3>{name}</h3>
      <span>{brewery_type}</span>
      <div className="info">
        <div className="location">
          <h4>Address</h4>
          <p>{city}</p>
          <p>{state}</p>
          <p>{postal_code}</p>
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <a href={`tel:${phone}`}>{phone}</a>
          <a href={website_url}>{website_url}</a>
        </div>
      </div>
    </section>
  )
}

export default Brewery
