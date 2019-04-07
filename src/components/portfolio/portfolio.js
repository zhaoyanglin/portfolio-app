import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Works.</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {/* item1 */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt src="images/portfolio/newModals/NBO.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>NBO</h5>
                                                    <p>Web-app</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                {/* item2 */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt src="images/portfolio/newModals/recent.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Redux-Saga-Garden</h5>
                                                    <p>Web Development</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                {/* item3 */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt src="images/portfolio/newModals/feedback.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Feedback app</h5>
                                                    <p>Web Development</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}

                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup
	      --------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/newModals/NBO.png" alt />
                            <div className="description-box">
                                <h4>New Baller Order</h4>
                                <p>This is a web app at the moment, in the future it will be a phone app. The main purpose of this app is to help basketball players to not be stranded or waste time while tyring to play a game of pick up basketball.(currently being hosted on Heroku, so it takes 30sec to load up)</p>
                                <span className="categories"><i className="fa fa-tag" />modile app</span>
                            </div>
                            <div className="link-box">
                                <a href="https://new-baller-order.herokuapp.com/#/googleMapPage">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}

                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/newModals/garden.png" alt />
                            <div className="description-box">
                                <h4>Redux-Saga-Garden</h4>
                                <p>This is a simple web-app, that demonstrates my experience with Redux-saga, and material-ui.(currently being hosted on Heroku, so it takes 30sec to load up)</p>
                                <span className="categories"><i className="fa fa-tag" />Web Development</span>
                            </div>
                            <div className="link-box">
                                <a href="https://redux-saga-garden.herokuapp.com/">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}

                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/newModals/feedback.png" alt />
                            <div className="description-box">
                                <h4>Feedback app</h4>
                                <p>A simple web-app that is build in React. This example demonstrate my capability with React, Axios, and Redux. While using the app, after submitting the form, to see the feedback go to: "https://redux-feedback-app.herokuapp.com/#/admin".(currently being hosted on Heroku, so it takes 30sec to load up) </p>
                                <span className="categories"><i className="fa fa-tag" />Web Development</span>
                            </div>
                            <div className="link-box">
                                <a href="https://redux-feedback-app.herokuapp.com/#/">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}

                    </div> {/* row End */}
                </section>
            </React.Fragment>
        );
    }
}