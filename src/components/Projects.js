import '../styles/Projects.css';
import Project from './Project';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <section className="Projects">
      <h1>Projects</h1>
      <Project 
        imageUrl="/images/FakeShop.png" 
        imageAlt="Screenshot of e-commerce app" 
        info="
          An example E-commerce Website. It consumes an example API from the Fake Store API, takes the data and displays it in
          a functional React App which uses React-Router-Dom and dynamic client-side routing. I increased my confidence using
          React-Router-Dom, asynchronous JavaScript in React and how the unidirectional ﬂow of data works.
          "
      />
      <Project 
        imageUrl="/images/Battleship.png" 
        imageAlt="Screenshot of battleship app" 
        info="
          A single player Battleship game against a computer.I created this app to learn TDD and in particular unit testing. I built it
          using JavaScript, Jest, HTML, Scss/Sass, NPM, Webpack, Babel and ESLint. I was able to further my knowledge of TDD,
          unit testing and Scss/Sass by doing this.
          "
      />
      <Project
        imageUrl="/images/Weather.png" 
        imageAlt="Screenshot of weather app" 
        info="
          A web app for looking up the current weather conditions for a location. I constructed the app using ES8 JavaScript
          (async/await), OpenWeather API, HTML/CSS, NPM, Webpack and Babel. From this I was able to solidify my knowledge of
          asynchronous JavaScript, the JavaScript event loop, APIs and JSON data.
          "
      />
      <p>Find all my projects on my <a href="https://github.com/jkcswd">github</a> </p>
    </section>
  );
}

export default Projects;