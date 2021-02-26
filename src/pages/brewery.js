/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import Loading from '../components/loading'

// format the phone number to look like (555) 555-5555
const formatPhone = phoneNum => {
  let cleaned = ('', phoneNum).replace(/\D/g, '')
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }

  return null
}

// url to get single brewery by id
const url = `https://api.openbrewerydb.org/breweries/`

const Brewery = () => {
  const { id } = useParams()
  const { loading, getBrewery, brewery } = useGlobalContext()

  const fetchBrewery = useCallback(async () => {
    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      getBrewery(data)
    } catch (error) {
      console.error(error)
    }
  }, [getBrewery, id])

  useEffect(() => {
    fetchBrewery()
  }, [id, fetchBrewery])

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

  const breweryAddress = `${street}, ${city}, ${state}, ${postal_code}`

  if (loading) {
    return <Loading />
  }

  if (!brewery) {
    return (
      <h1
        css={css`
          text-align: center;
          margin-top: 5vh;
        `}
      >
        No brewery to display
      </h1>
    )
  }

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
          <p>{street}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{postal_code}</p>
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <a href={`tel:${formatPhone(phone)}`}>{formatPhone(phone)}</a>
          <a href={website_url} target="_blank" rel="noopener noreferrer">
            {website_url}
          </a>
          <a
            href={`http://maps.google.com/?q=${breweryAddress}`}
            target="_blank"
            aria-label="brewery directions"
            rel="noopener noreferrer"
          >
            Directions
          </a>
        </div>
      </div>
    </section>
  )
}

export default Brewery
