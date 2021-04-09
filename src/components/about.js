/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Typed from 'react-typed';

class About extends React.Component {

    render() {
        return (
            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src="/images/Gal_Zisin_Photo.jpg" alt="" />
                        </div>
                        <div className="column right">
                            <div className="text">I'm Gal Zisin and I'm <span>
                                <Typed
                                    strings={[
                                        'a Developer', 'an Engineer']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                />
                            </span></div>
                            <p>I have a bachelor degree in electrical engineering. Over the last few years i did endorsment to full stack developer.
                            I specialize in innovative technologies in the field of web development both client and server sides.
                                </p>
                            <a download="CV_GAL ZISIN_EN.pdf" href="/static/CV_GAL ZISIN_EN.pdf">Download CV</a>
                        </div>
                        <iframe style={{ display: 'none' }} src="/static/CV_GAL_ZISIN_EN.pdf">
                        </iframe>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;