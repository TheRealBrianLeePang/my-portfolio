import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc" >
                          <h1 style = {{color: "white"}}>a resumé that <br/> <b>STANDS OUT.</b></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/15ONimUV8Petv9SWSScEfWKn5QVNW1G6a/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
