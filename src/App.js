import React from 'react';
import Navbar from './components/navbar'
import Home from './components/home'
import Skills from './components/skills'
import Portfolio from './components/portfolio'
// import Contact from './components/contact'
import Footer from './components/footer'
import './App.css';

class App extends React.Component {


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY > 500) {
      document.querySelector(".scroll-up-btn").className = "scroll-up-btn show";

    } else {
      document.querySelector(".scroll-up-btn").className = "scroll-up-btn";
    }
  }

  render() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
    return (
      <>
        <div className="scroll-up-btn" onClick={scrollToTop}>
          <i className="fas fa-angle-up"></i>
        </div>
        <Navbar />
        <Home />
        <Skills />
        <Portfolio />
        <Footer />
      </>
    );
  }
}

export default App;



