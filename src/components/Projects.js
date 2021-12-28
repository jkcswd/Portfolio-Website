import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="Projects">
      <div className="shop">
        <p>
          An example E-commerce Website. It consumes an example API from the Fake Store API, takes the data and displays it in
          a functional React App which uses React-Router-Dom and dynamic client-side routing. I increased my confidence using
          React-Router-Dom, asynchronous JavaScript in React and how the unidirectional ﬂow of data works.
        </p>
        <img src={process.env.PUBLIC_URL + '/images/FakeShop.png'} alt="Screenshot of e-commerce app"/>
      </div>
      <div className="battleship">
        <img src={process.env.PUBLIC_URL + '/images/Battleship.png'} alt="Screenshot of battleship app"/>
        <p>
          A single player Battleship game against a computer.I created this app to learn TDD and in particular unit testing. I built it
          using JavaScript, Jest, HTML, Scss/Sass, NPM, Webpack, Babel and ESLint. I was able to further my knowledge of TDD,
          unit testing and Scss/Sass by doing this.
        </p>
      </div>
      <div className="weather">
        <p>
          A web app for looking up the current weather conditions for a location. I constructed the app using ES8 JavaScript
          (async/await), OpenWeather API, HTML/CSS, NPM, Webpack and Babel. From this I was able to solidify my knowledge of
          asynchronous JavaScript, the JavaScript event loop, APIs and JSON data.
        </p>
        <img src={process.env.PUBLIC_URL + '/images/Weather.png'} alt="Screenshot of weather app"/> 
      </div>
    </section>
  );
}

export default Projects;