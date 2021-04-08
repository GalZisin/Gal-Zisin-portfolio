import React from 'react';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebar: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if (window.scrollY > 20) {
            document.querySelector(".navbar").className = "navbar sticky";

        } else {
            document.querySelector(".navbar").className = "navbar";
        }
    }

    showSidebar = () => {
        this.setState(({ sidebar }) => ({ sidebar: !sidebar }));
    }
    render() {


        return (
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="/#">GZ<span>Portfolio</span></a></div>
                    <ul className={this.state.sidebar ? 'menu active' : 'menu'}>
                        <li><a href="#home" className="menu-btn" onClick={this.showSidebar}>Home</a></li>
                        <li><a href="#about" className="menu-btn" onClick={this.showSidebar}>About</a></li>
                        <li><a href="#portfolio" className="menu-btn" onClick={this.showSidebar}>Portfolio</a></li>
                        <li><a href="#skills" className="menu-btn" onClick={this.showSidebar}>Skills</a></li>
                        <li><a href="#contact" className="menu-btn" onClick={this.showSidebar}>Contact</a></li>
                    </ul>
                    <div className={this.state.sidebar ? 'menu-btn i active' : 'menu-btn'} onClick={this.showSidebar}>
                        <i className={`fas fa-bars`}></i>
                    </div>


                </div>
            </nav>
        )
    }
}
export default Navbar;