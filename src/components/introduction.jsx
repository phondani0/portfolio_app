import React, { Component } from 'react'
import "./introduction.css";

export default class Introduction extends Component {

  state = {
    items: [{
      p1: "Hi!",
      p2: "I am Ankit"
    },
    {
      p1: "Hi!",
      p2: "I am a Software Developer"
    },
    {
      p1: "Hi!",
      p2: "I am a Full Stack Developer"
    }],
    activeItem: 0,
    introText: "",
    index: 0
  }

  componentDidMount() {
    this.renderIntroText();
  }

  renderIntroText = () => {
    let activeItem = this.state.activeItem;
    let len = this.state.items[activeItem].p2.length;
    let i = this.state.index;

    if (i < len) {
      this.setState(state => {
        return {
          introText: i === 0 ? state.items[activeItem].p2[i] : `${state.introText}${state.items[activeItem].p2[i]}`,
          index: state.index + 1
        }
      });
      setTimeout(this.renderIntroText, 200);
    } else {
      this.setState(state => {
        return {
          activeItem: state.activeItem + 1,
          index: 0
        }
      });
      if (activeItem === 2) {
        this.setState({
          activeItem: 0
        })
      }
      setTimeout(this.renderIntroText, 3000);
    }
  }

  render() {
    return (
      <section id="hero_section">
        <div className="overlay-bg">
          <div className="overlay">
            <div className="container-fluid" style={{ height: "100%" }}>
              <div className="row intro-box">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="">
                    <div className="">

                      <div style={{ height: "210px" }}>
                        <h1 style={{ marginBottom: "10px", textAlign: "center" }}>Hi!</h1>
                        <h1 style={{ marginBottom: 0, textAlign: "center" }}>{this.state.introText}</h1>
                      </div>

                      <p className="cv_btn">
                        <a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1vZ3HfECZl2-3i74DGDMma-LVIGCuQfOF/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV
                        <i className="icon-download4" /></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      // <div>
      //   <section id="colorlib-hero" className="js-fullheight" data-section="home">
      //     <div className="flexslider js-fullheight">
      //       <ul className="slides">
      //         <li style={{ backgroundImage: 'url(images/img_bg2.jpg)' }}>
      //           <div className="overlay" />
      //           <div className="container-fluid">
      //             <div className="row">
      //               <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
      //                 <div className="slider-text-inner js-fullheight">
      //                   <div className="desc">
      //                     <h1>Hi! <br />I'm Ankit</h1>
      //                     <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1vZ3HfECZl2-3i74DGDMma-LVIGCuQfOF/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </li>
      //         <li style={{ backgroundImage: 'url(images/img_bg2.jpg)' }}>
      //           <div className="overlay" />
      //           <div className="container-fluid">
      //             <div className="row">
      //               <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
      //                 <div className="slider-text-inner">
      //                   <div className="desc">
      //                     <h1>I love building<br /> THINGS !!</h1>
      //                     <p><a className="btn btn-primary btn-learn" href="https://github.com/phondani0" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </li>
      //         <li style={{ backgroundImage: 'url(images/img_bg2.jpg)' }}>
      //           <div className="overlay" />
      //           <div className="container-fluid">
      //             <div className="row">
      //               <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
      //                 <div className="slider-text-inner">
      //                   <div className="desc">
      //                     <h1>I am Full Stack <br /> Developer... </h1>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </li>
      //       </ul>
      //     </div>
      //   </section>
      // </div>
    )
  }
}
