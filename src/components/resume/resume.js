import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="resume">
                    <h2 id='resumeHeader'>Resume overview</h2>
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Prime Digital Academy</h3>
                                    <p className="info">Full-Stack Software Engineer Certification<span>•</span> <em className="date">2019</em></p>
                                    <ul>
                                        <li>Used JavaScript, JQuery, React, to build web programs</li>
                                        <li>Detailed knowledge of Front-End development and Web Programming</li>
                                        <li>Applying agile methodology when tackling group projects</li>
                                        <li>Teamwork and solid communication with peers</li>
                                        <li>Communication with clients</li>
                                    </ul>
                                        
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Saint Paul College - A Community And Technical College</h3>
                                    <p className="info">Associate Degree of Art<span>•</span> <em className="date">2018</em></p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
      ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Software – Work </span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>LinkUp</h3>
                                    <p className="info">Web Programming Intern<span>•</span> <em className="date">01/2020 - current</em></p>
                        <ul>
                            <li>Used PHP, Regex, and other internal tools to scrape data from company websites</li>
                            <li>Coding and writing PHP scripts</li>
                            <li>Detailed knowledge of PHP, Regular Expression</li>
                            <li>Troubleshooting and fixing existing scripts</li>
                            <li>Maintaining good communication with peers through slack channel</li>
                            <li>Continuously learning and growing as a programmer </li>
                            <li>Flexible work style, successfully working remotely and independently</li>
                            <li>Adept with conducting remote meetings</li>
                            <li>Analytical thinker and problem solver</li>
                            <li>Write easy to read and organized code</li>
                        </ul>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
      ----------------------------------------------- */}
                </section>
            </React.Fragment>
        );
    }
}