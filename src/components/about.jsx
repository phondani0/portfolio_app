import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="style-about" data-section="about">
          <div className="style-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="style-heading">Who Am I?</h2>
                      <h4>I am a software developer, who loves making applications and learning new technologies, playing around with frameworks and libraries.
                      </h4>
                      <h4>
                        I like startups and their work culture, especially early-stage startups. I wanted to see how startups transform into the big company and want to be part of it.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="style-about">
          <div className="style-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="style-heading">Here are some of my expertise</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Front End Development </h3>
                    <p>I have experience in building responsive web applications and Progressive Web Applications using JavaScript, Angular, React, HTML, CSS and Bootstrap</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Backend Development</h3>
                    <p>I have experience in building REST Apis and Graphql Apis using Node.js, Express.js, MongoDB, PostgresSQL and Graphql</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Docker...</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>Pencil.io</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use instagram and linkedin...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
