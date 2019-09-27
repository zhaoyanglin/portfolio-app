import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/me.jpg" alt="Zee's Profile Picture" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>Hello, my name is Zhaoyang but I go by Zee. I am a full stack software engineer who loves solving problems, learning new things, and making sure everything I've done is precise and well-executed. During my free time I love watching movies and playing basketball and video games. I also enjoys the outdoors, hiking, sightseeing, and traveling. I am friendly, open-minded, love talking to people, and listening is one of my strong suits. 
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Zhaoyang Lin</span><br />
                                        <span>
                                            Little Canada, MN 55117 US
                  </span><br />
                                        <span>(651)-703-7361</span><br />
                                        <span><a href="mailto:zhaoyanglin@msn.com">zhaoyanglin@msn.com</a></span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="https://drive.google.com/open?id=1Z_Z0IWfhTZPIea6v_4Hnxxav6LVCDuuv" className="button"><i className="fa fa-download" />Download Resume</a>
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
