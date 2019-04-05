import React, { Component } from 'react';
export default class Testimonials extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="testimonials">
                    <div className="text-container">
                        <div className="row">
                            <div className="two columns header-col">
                                <h1><span>Favorite Quotes</span></h1>
                            </div>
                            <div className="ten columns flex-container">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li>
                                            <blockquote>
                                                <p>People should pursue what they are passionate about. That will make them happier then pretty much anything else.
                                                </p>
                                                <cite>Elon Musk</cite>
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        <li>
                                            <blockquote>
                                                <p>People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy the work.
                                                </p>
                                                <cite>Elon Musk</cite>
                                            </blockquote>
                                        </li> {/* slide ends */}
                                    </ul>
                                </div> {/* div.flexslider ends */}
                            </div> {/* div.flex-container ends */}
                        </div> {/* row ends */}
                    </div>  {/* text-container ends */}
                </section>
            </React.Fragment>
        );
    }
}