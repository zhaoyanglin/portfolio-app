import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/me.jpg" alt />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>I am a full stack software engineer who loves solving problems, learning new things, and making sure everything I've done is precise and well-executed. During my free time I love watching movies and playing basketball and video games. I also enjoys the outdoors, hiking, sightseeing, and traveling. I am friendly, open-minded, love talking to people, and listening is one of my strong suits. I have a lot of experience with Javascript, React, PostgresSQL, AXIOS, Redux, Redux-Saga, jQuery, HTML, CSS, Node.js, GIT. I also have introductory knowledge with Python, MongoDB, Material-UI, Bootstrap, JSON.
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Zhaoyang Lin</span><br />
                                        <span>132 Demont ave E apt#335<br />
                                            Little Canada, MN 55117 US
                  </span><br />
                                        <span>(651)-703-7361</span><br />
                                        <span><a href="mailto:zhaoyanglin@msn.com">zhaoyanglin@msn.com</a></span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="https://www.slideshare.net/slideshow/embed_code/key/izjs2MeIEcTdND" className="button"><i className="fa fa-download" />Download Resume</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}