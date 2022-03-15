import React, { useState } from 'react'
import "./projects.css";

export default function Projects() {

  const [projects, setProjects] = useState([
    {
      title: "Anunciavi - Online Marketplace",
      description: "Online marketplace that helps users to sell, buy, or discover anything across Spain, developed using React.js,Redux,Firebase functions,firebase auth and GoogleMaps.",
      imageUrl: "images/img-7.png",
      websiteUrl: "https://anunciavi.com",
      githubUrl: "",
    },
    {
      title: "E-commerce Store",
      description: "Ecommerce Store application build with Node.js, GraphQL, React.js, Redux, Prisma (ORM), PostgresSQL, and React-admin",
      imageUrl: "images/img-6.jpg",
      websiteUrl: "https://e-store.vercel.app",
      githubUrl: "https://github.com/phondani0/ecommerce_store",
    },
    {
      title: "Acme Web Design",
      description: "AcmeWebDesign landing page made using Html, Css, Javascript, Bootstrap, Jquery, Animate.css",
      imageUrl: "images/img-1.jpg",
      websiteUrl: "https://phondani0.github.io/AcmeWebDesign/",
      githubUrl: "https://github.com/phondani0/AcmeWebDesign",
    },
    {
      title: "Github Finder",
      description: "Find Github users and their latest repositories using github Api. Build uing Html, Css, Javascript, Bootstrap, Ajax",
      imageUrl: "images/img-2.jpg",
      websiteUrl: "https://phondani0.github.io/github-finder/",
      githubUrl: "https://github.com/phondani0/github-finder",
    },
    {
      title: "HowToTech (Blogging Platform)",
      description: "Blog MVC app made with Node.js, Express.js, MongoDB and Handlebars.js, Html, Css, Javascript, Bootstrap, Heroku",
      imageUrl: "images/img-3.jpg",
      websiteUrl: "https://howtotech-ap.herokuapp.com/",
      githubUrl: "https://github.com/phondani0/howtotech",
    },
    {
      title: "Corona Dashboard",
      description: "Dashboard for latest covid-19 stats. Build using React.js, Material UI and Fetch Api",
      imageUrl: "images/img-4.jpg",
      websiteUrl: "https://covidapp.vercel.app/",
      githubUrl: "https://github.com/phondani0/corona_dashboard",
    },
    // {
    //   title: "TripBazaar (Hotel booking platform)",
    //   description: "MEAN Stack (MongoDb, Express.js, Angular, Node.js) and AWS",
    //   imageUrl: "images/img-5.jpg",
    //   websiteUrl: "https://tripbazaar.co",
    //   githubUrl: "",
    // },
  ]);

  return (
    <div>
      <section className="style-work" data-section="projects">
        <div className="style-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Work</span>
              <h2 className="style-heading animate-box">Recent Projects</h2>
            </div>
          </div>
          <div className="row">

            {
              projects.map((project, i) => (
                <div key={i} className="col-md-4 animate-box mb-4" data-animate-effect="fadeInRight">
                  <div className="project-img-container">
                    <img src={project.imageUrl} alt="productImg" />
                    <div className="project-img-overlay">
                      <a href={project.websiteUrl} rel="noopener noreferrer" target="_blank"><i className="icon-link" /></a>
                    </div>
                  </div>

                  <div className="project-details">
                    <div className="con">
                      <h3>{project.title}</h3>
                      <span>{project.description}</span>
                      <br />
                      <p className="icon">
                        <span><a href={project.websiteUrl} rel="noopener noreferrer" target="_blank"><i className="icon-link" />View</a></span>
                        &nbsp; &nbsp;
                        <span><a href={project.githubUrl} rel="noopener noreferrer" target="_blank"><i className="icon-github" /> Github</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
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
