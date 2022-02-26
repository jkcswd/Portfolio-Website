import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="Skills">
      <h1>Skills</h1>
      <img src={process.env.PUBLIC_URL + 'images/webLanguages.png'}/>
      <img src={process.env.PUBLIC_URL + 'images/reactIcon.png'}/>
      <ul>
        <li>JavaScript</li>
        <li>Express</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Scss</li>
        <li>REST APIs</li>
        <li>Jest</li>
        <li>Linux</li>
        <li>Webpack</li>
      </ul>
    </section>
  );
}

export default Skills;