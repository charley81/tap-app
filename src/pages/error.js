import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
      <h3>Something went wrong...</h3>
      <Link to="/">
        <button>back home</button>
      </Link>
    </section>
  )
}

export default Error
