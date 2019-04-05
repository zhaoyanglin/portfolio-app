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
                                    <p className="info">Software Engineer Certification: Computer Science <span>•</span> <em className="date">2019</em></p>
                                    <p>
                                        The 20 week intensive/immersive courses schedule helped me realized that I am extremely adaptable to any environment that I am put into. I was able to learn how to build a fully functional web-app/ web-site with ease. My understanding of computer science is on par with individuals who has a four year degree.
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Saint Paul College - A Community And Technical College</h3>
                                    <p className="info">Associates of Art: General Studies<span>•</span> <em className="date">2018</em></p>
                                    <p>
                                        Life is like a roller coaster, one moment you are up next you are down. It took me a while to finish my AA degree but I was finally able to do so in the spring of 2018. Personal victory!
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
      ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>House Of Wong</h3>
                                    <p className="info">Waiter/Cashier <span>•</span> <em className="date">10/2017 - 12/2018</em></p>
                                    <p>
                                        Performed opening, closing and shift change duties accurately to keep restaurant working smoothly and ready to meet all customer needs.
                                        Used correct cleaning, sanitizing and food handling procedures to maintain optimal protections for customers.
                                        Applied communication and problem-solving skills to resolve customer complaints and promote brand loyalty.
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Little Szechuan</h3>
                                    <p className="info">Head Waiter <span>•</span> <em className="date">06/2015 - 04/2017</em></p>
                                    <p>
                                        Maintained clean and presentable tables with tableware, glassware, silverware and linens.
                                        Trained incoming staff regarding restaurant's practices, culture and procedures.
                                        Addressed diner complaints with kitchen staff and served replacement menu items promptly.
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
      ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>
                                
                            </p>
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand javaScript" /><em>JavaScript</em></li>

                                    <li><span className="bar-expand react" /><em>React</em></li>

                                    <li><span className="bar-expand jquery" /><em>jQuery</em></li>

                                    <li><span className="bar-expand postgreSQL" /><em>PostgreSQL</em></li>

                                    <li><span className="bar-expand redux" /><em>Redux, Redux-Saga</em></li>

                                    <li><span className="bar-expand aJAX" /><em>AJAX</em></li>

                                    <li><span className="bar-expand testAxios" /><em>Axios</em></li>

                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
            </React.Fragment>
        );
    }
}