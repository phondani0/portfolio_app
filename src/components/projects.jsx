import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <div className="project" style={{ backgroundImage: 'url(images/img-1.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">Acme Web Design</a></h3>
                      <span>AcmeWebDesign landing page made using Html, Css, Javascript, Bootstrap, Jquery, Animate.css</span>
                      <p className="icon">
                        <span><a href="https://phondani0.github.io/AcmeWebDesign/" rel="noopener noreferrer" target="_blank"><i className="icon-link" /> View</a></span>
                        <span><a href="https://github.com/phondani0/AcmeWebDesign" rel="noopener noreferrer" target="_blank"><i className="icon-github" /> Github</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <div className="project" style={{ backgroundImage: 'url(images/img-2.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">Github Finder</a></h3>
                      <span>Find Github users and their latest repositories using github Api. Build uing Html, Css, Javascript, Bootstrap, Ajax</span>
                      <p className="icon">
                        <span><a href="https://phondani0.github.io/github-finder/" rel="noopener noreferrer" target="_blank"><i className="icon-link" /> View</a></span>
                        <span><a href="https://github.com/phondani0/github-finder" rel="noopener noreferrer" target="_blank"><i className="icon-github" /> Github</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                <div className="project" style={{ backgroundImage: 'url(images/img-3.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">HowToTech (Blogging Platform)</a></h3>
                      <span>Blog MVC app made with Node.js, Express.js, MongoDB and Handlebars.js, Html, Css, Javascript, Bootstrap, Heroku</span>
                      <p className="icon">
                        <span><a href="https://howtotech-ap.herokuapp.com/" rel="noopener noreferrer" target="_blank"><i className="icon-link" /> View</a></span>
                        <span><a href="https://github.com/phondani0/howtotech" rel="noopener noreferrer" target="_blank"><i className="icon-github" /> Github</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                <div className="project" style={{ backgroundImage: 'url(images/img-4.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">Corona Dashboard</a></h3>
                      <span>Dashboard for latest covid-19 stats. Build using React.js, Material UI and Fetch Api</span>
                      <p className="icon">
                        <span>
                          <a href="https://phondani0.github.io/corona_dashboard/" rel="noopener noreferrer" target="_blank"><i className="icon-link" /> View</a></span>
                        <span>
                          <a href="https://github.com/phondani0/corona_dashboard" rel="noopener noreferrer" target="_blank"><i className="icon-github" /> Github</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <div className="project" style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">TripBazaar (Hotel booking platform)</a></h3>
                      <span>MEAN Stack (MongoDb, Express.js, Angular, Node.js) and AWS</span>
                      <p className="icon">
                        <span><a href="https://tripbazaar.co" rel="noopener noreferrer" target="_blank">
                          <i className="icon-link" /> View</a></span>
                        {/* <span><a href="#"><i className="icon-github" /> Github</a></span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <div className="project" style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">E-commerce Store</a></h3>
                      <span>Ecommerce Store application build with Node.js, GraphQL, React.js, Redux, Prisma (ORM), PostgresSQL, and React-admin</span>
                      <br />
                      <h4>IN PROGRESS...</h4>
                      <p className="icon">
                        <span><a href="#"><i className="icon-link" /> View</a></span>
                        <span><a href="https://github.com/phondani0/ecommerce_store" rel="noopener noreferrer" target="_blank"><i className="icon-github" /> Github</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12 animate-box">
                <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    )
  }
}
