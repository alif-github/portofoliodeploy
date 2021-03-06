import React, { Component } from "react";
import HeadShake from "react-reveal/HeadShake";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    // const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#databmkg">
                Data Gempa
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
            
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <HeadShake>
              <h1 className="responsive-headline">{name}</h1>
            </HeadShake>
            <HeadShake>
              <h3>{description}.</h3>
            </HeadShake>
            <hr />
            <HeadShake>
              <ul className="social">
                {/* <a href={project} target="blank" className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a> */}
                <a href={github} target="blank" className="button btn github-btn">
                  <i className="fa fa-github"></i>Let see my Github
                </a>
              </ul>
            </HeadShake>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
