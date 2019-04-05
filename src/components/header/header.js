import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">Zhaoyang Lin.</h1>
                            <h3>I'm a Minnesota Twin cities based <span>Software Engineer</span>, <span>Programer</span> and <span>Software Developer</span> love to create amazing and
              effective Web-app/ phone-app for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
                                , and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                            <hr />
                            <ul className="social">

                                <li><a href="https://www.linkedin.com/in/zhaoyang-lin"><i className="fa fa-linkedin" /></a></li>

                                <li><a href="https://github.com/zhaoyanglin"><i className="fa fa-github" /></a></li>
                                
                                <li><a href="mailto:zhaoyanglin@msn.com"><i className="fa fa-envelope" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}