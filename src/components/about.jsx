import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who is Brian Pang?</h2>
                    <p>Well, to be honest, <i>I'm not sure yet!</i> I have been exploring what my role is in the workforce and while I'm still trying to figure it out, I've been continuing to learn to prepare myself for what's to come. That being said, I think I've done quite a lot!                         
                    <br/><br/>
                     As a web developer I've worked with a couple of coding environments - from the standard HTML/CSS/JavaScript (Microsoft-Certified) and more relaxed web builders (Wix, SquareSpace, Wordpress, Sitefinity), to the more recent Angular/TypeScript/NgRX. I've also explored other fields like eLearning Development (using Articulate Storyline 360) and digital marketing.
                     <br/><br/>
                     Along the way I've had a multitude of experiences - from working in a movie theater for a summer, to spending two months in Wildwood, NJ for a summer mission trip. I've also spent time on other interests, such as graphic design (self-taught Photoshop and Illustrator for 5+ years), listening to music/audiobooks/podcasts, and studying streetwear, fashion, and sneakers.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="strengths">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Strengths</span>
                <h2 className="colorlib-heading">What can I bring to the table?</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and web components in a multitude of coding environments, from the everyday content management system (Wix, Wordpress, Squarespace, Sitefinity) to the more tech-heavy development atmosphere (Angular, React, HTML/CSS/JavaScript/Bootstrap). I've also began studying UI/UX Design, starting with FIGMA.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Design</h3>
                    <p>Ever since I was in High School, I had a fascination with graphic design. I made my own designs, worked freelance, and even took on a design internship remotely while I was in college. I became fluent in Adobe Creative Suite - with a focus in Illustrator and Photoshop.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Learning more</h3>
                    <p>My goal with my next job (and hopefully, my career) is to continue learning and growing - whether it be at my job or on my own time - learning more about the ever-growing technological world.</p>
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
