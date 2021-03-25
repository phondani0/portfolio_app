import * as React from "react"
import Sidebar from '../components/sidebar'
import Introduction from '../components/introduction'
import About from '../components/about'
import Timeline from '../components/timeline'
import Projects from '../components/projects';
import { Helmet } from "react-helmet"

// styles
const pageStyles = {
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',"
}

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="Ankit Phondani, Ankit, Phondani, phondani0, ankitphondani, AnkitPhondani, ankit phondani from dehradun, Top Node.js developer in dehradun, best node.js developer in dehradun, phondaniankit, Full Stack Developer dehradun" />
        <meta name="description" content="Hey there , I am Ankit Phondani. Full Stack Developer, Tech Enthusiast. phondani0. I'm currently working as a Full Stack Developer at Upwork." />
        <meta name="author" content="Ankit Phondani" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/flexslider.css" />
        <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/modernizr-2.6.2.min.js"></script>

        <title>Ankit Phondani | Portfolio</title>


        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery.easing.1.3.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.waypoints.min.js"></script>
        <script src="/js/jquery.flexslider-min.js"></script>
        <script src="/js/jquery.countTo.js"></script>
        <script src="/js/main.js"></script>

      </Helmet>
      <main style={pageStyles}>
        <div id="style-page">
          <div id="container-wrap">
            <Sidebar />
            <div id="style-main">
              <Introduction />
              <About />
              <Timeline />
              <Projects />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage
