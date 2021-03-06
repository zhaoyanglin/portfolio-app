import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Works</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                                {/* item1 */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt src="images/portfolio/newModals/drinking.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Twenty1+</h5>
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
                                            <img alt src="images/portfolio/newModals/garden.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Redux Saga Garden</h5>
                                                    <p>Web App</p>
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
                                            <img alt src="images/portfolio/newModals/prettyCalc.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Pretty Calculator with Socket IO</h5>
                                                    <p>Web App</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}

                                {/* item4 */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-04" title>
                                            <img alt src="images/portfolio/newModals/databaseCalcu.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Calculator app with Database</h5>
                                                    <p>Web App</p>
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
                            <img className="scale-with-grid" src="images/portfolio/newModals/drinking2.png" alt />
                            <div className="description-box">
                                <h4>Twenty1+</h4>
                                <p>This is a Fun web game for groups of people to use at a party or gathering events. It is a Full-Stack web application that is build on React.js. It uses many Node modules such as express- session, react-redux, react-sage, etc... Please take a look and feel free to enjoy it with your friends. </p>
                                <span className="categories"><i className="fa fa-tag" />Web Development</span>
                            </div>
                            <div className="link-box">
                                <a href="https://have-fun-drinking.herokuapp.com/">Open App</a>
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
                                <a href="https://redux-saga-garden.herokuapp.com/">Open App</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}

                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/newModals/prettyCalc.png" alt />
                            <div className="description-box">
                                <h4>Calculator app with Real-time updates</h4>
                                <p>This Calculator App is build in React. It has Real-time multi-browser updates by using socket.io (currently being hosted on Heroku, so it takes 30sec to load up) </p>
                                <span className="categories"><i className="fa fa-tag" />Web Development</span>
                            </div>
                            <div className="link-box">
                                <a href="https://pretty-calc-socketio.herokuapp.com/">Open App</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}

                        <div id="modal-04" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/newModals/databaseCalcu.png" alt />
                            <div className="description-box">
                                <h4>Calculator app with database</h4>
                                <p>This Calculator App is build in React. Also it has a database that is build with postgreSQL.(currently being hosted on Heroku, so it takes 30sec to load up) </p>
                                <span className="categories"><i className="fa fa-tag" />Web Development</span>
                            </div>
                            <div className="link-box">
                                <a href="https://calculator-sz.herokuapp.com/">Open App</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-04 End */}

                    </div> {/* row End */}
                </section>
            </React.Fragment>
        );
    }
}