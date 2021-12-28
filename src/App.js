import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Headline from './components/Headline';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="content">
        <article className="main-content">
          <Headline/>
          <Profile/>
        </article>
        <Projects/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
