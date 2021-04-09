// import Contact from './contact'
const Footer = () => {
    return (
        <footer>
            <div className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div class="column left">
                            <div class="icons">
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">Name</div>
                                        <div class="sub-title">Gal Zisin</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="info">
                                        <div class="head">Address</div>
                                        <div class="sub-title">Israel</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-envelope"></i>
                                    <div class="info1">
                                        <div class="head1">Email</div>
                                        <div class="sub-title1">galzisin86@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <div class="text">Message me</div>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/gal.zisin/"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/in/gal-zisin-907b65b0/"><i class="fab fa-linkedin"></i></a>
                                <a href="https://github.com/GalZisin"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span>Created By <a href="#about">GalZ</a> | <span className="far fa-copyright"></span> 2021 All rights reserved.</span>
        </footer>

    )
}
export default Footer;