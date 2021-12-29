import '../styles/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1>James Spencer</h1>
      <nav>
        <ul>
          <li><a target="_blank" href={process.env.PUBLIC_URL + 'assets/CV.pdf'}>CV</a></li>
          <li><a target="_blank"  href="https://github.com/jkcswd">Github</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;