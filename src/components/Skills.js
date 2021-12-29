import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="Skills">
      <h1>Skills</h1>
      <img src={process.env.PUBLIC_URL + 'images/webLanguages.png'}/>
      <img src={process.env.PUBLIC_URL + 'images/reactIcon.png'}/>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Scss</li>
        <li>JSON</li>
        <li>APIs</li>
        <li>Jest</li>
        <li>Linux</li>
        <li>Webpack</li>
        <li>NPM</li>
      </ul>
    </section>
  );
}

export default Skills;