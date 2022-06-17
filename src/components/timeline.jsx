import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Timeline</span>
                <h2 className="colorlib-heading animate-box">The Highlight Reel</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>PLASKOLITE: <i>Web & Digital Design Specialist</i><br/><span>October 2021 – April 2022, Columbus, OH</span></h2>
                        <p>Updated the look and feel of the Plaskolite website and reached out to fellow coworkers & customers about how the website could be improved and acted upon suggestions. Designed event banners and sent out email campaigns for certain events and featured products. Used Sitefinity, a content management system, to build and manage the website modules (balanced hard-coded components and live information updates on products), while MailChimp was used for handling email marketing campaigns (upcoming events/conferences or product highlights.)</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>HUNTINGTON: <i>IT Tech Analyst</i><br/><span>January 2021 – September 2021, Columbus, OH</span></h2>
                        <p>Streamlined the design of front-end components for Huntington’s website by fixing bugs and developing newer components for their banking applications. Taught myself basic TypeScript and studied the Angular NgRx development environment months prior to and during the course of this position in order to work on the coding components for the website. Communication between my mentor and me was key during my time at this position.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>LHT LEARNING: <i>eLearning Developer</i><br/><span>July 2020 – October 2020, Westerville, OH</span></h2>
                        <p>Juggled multiple projects at a time – working with multiple eLearning modules meant handling prioritization and time management. Focused more on the design of modules than code development which allowed for exploring creativity rather than simply just typing/testing/analyzing code. While this position wasn't as coding-heavy, I sharpened my skills in design so that I could capture a viewer's attention with every learning module that was built.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>CASE WESTERN RESERVE UNIVERSITY: <i>Multiple Opportunities</i><br/><span>2016-2020, Cleveland, OH</span></h2>
                        <p>During my time in college, I had a couple of memorable experiences - working with a startup in the United Kingdom, Force of Nature, to move their website from Wix to Squarespace (Click <a href="https://www.forceofnature.xyz" target="_blank">HERE</a> to see more), editing photoshoots and designing graphics through a remote Graphic Design/Marketing internship, and constructing a a video editor in Python in order to prepare video clips for object-detection data testing with a start-up in my hometown of Lexington, Kentucky.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
