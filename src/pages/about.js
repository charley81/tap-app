import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <h3>About</h3>
      <p>
        tapApp is an application that allows you to enter a zip-code and see
        what breweries are in your area. Select a brewery and get detailed
        information including the brewery address and link to their website.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, repellat
        eveniet? Eum modi dolore iure totam beatae quo non! Nesciunt, dicta
        labore! Beatae aliquam aperiam reiciendis dolor earum perferendis
        exercitationem.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officia
        placeat eveniet veritatis rem ab nam in magni dicta iste mollitia odit,
        cumque dolorum voluptates quidem eos necessitatibus dignissimos nobis
        aspernatur sequi natus. Deleniti cupiditate harum incidunt dolores quae
        saepe commodi numquam doloremque, ipsum expedita.
      </p>
      <Link to="/">
        <button>back home</button>
      </Link>
    </section>
  )
}

export default About
