import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Headline from './components/Headline';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <div className="App">
      <Header/>
      <section className="content">
        <article className="main-content" data-aos="fade-in">
          <Headline/>
          <Profile/>
        </article>
        <div data-aos="fade-in">
          <Skills /> 
        </div>
        <div data-aos="fade-in">
         <Projects />
        </div>
        <div data-aos="fade-in">
          <Contact/>
        </div>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
