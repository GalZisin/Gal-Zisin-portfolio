import React from 'react';
import About from './about'
import Typed from 'react-typed';

class Home extends React.Component {


    render() {
        const homeStyle = {
            backgroundImage: 'url(./images/pexels-evie-shaffer-4004374.jpg)'
        };
        return (
            <>
                <section className="home" id="home" style={homeStyle}>
                    <div className="max-width">
                        <div className="row">
                            <div className="home-content">
                                <div className="text-1">Hello, my name is</div>
                                <div className="text-2">Gal Zisin</div>
                                <div className="text-3">And I'm <span>
                                    <Typed
                                        strings={[
                                            'a Developer', 'an Engineer']}
                                        typeSpeed={40}
                                        backSpeed={50}
                                        loop
                                    />
                                </span>
                                </div>
                                <a href="#contact">Contact me</a>
                            </div>
                        </div>
                    </div>
                </section>
                <About />
            </>
        )
    }
}
export default Home

