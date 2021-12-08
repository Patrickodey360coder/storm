import React from 'react';
import copywriting from '../../../images/copywriting.svg';
import design from '../../../images/design.svg';
import seo from '../../../images/seo.svg';
import software from '../../../images/software.svg';
import website from '../../../images/website.svg';
import support from '../../../images/support.svg';


function Services() {
  return (
    <div id="services">
      <div className="container">
        <div className="row my-3 mx-2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="service-header my-2">
              We build experiences to elevate your Business.
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="service-text my-2">
            Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; UI & UX design; authoring, and search engine optimization.
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
            {/* <img src={website} alt={website} className="img-fluid img" /> */}
            <i class="fas fa-laptop-code fa-3x"></i>
            <h5 className="mt-2">Web Development</h5>
            <p className="text-muted ">Websites, Web applications, custom scripts, SoCs and embedded systems.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
            {/* <img src={design} alt={design} className="img-fluid img" /> */}
            <i class="fas fa-palette fa-3x"></i>
            <h5 className="mt-2">Logo Design</h5>
            <p className="text-muted ">Creating visually stunning mark for brands, individuals and companies.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
            {/* <img src={seo} alt={seo} className="img-fluid img" /> */}
            <i class="fab fa-searchengin fa-3x"></i>
            <h5 className="mt-2">SEO</h5>
            <p className="text-muted ">Optimizing websites tecnical configuration for better search engines ranking.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
            {/* <img src={copywriting} alt={copywriting} className="img-fluid img" /> */}
            <i class="far fa-copyright fa-3x"></i>
            <h5 className="mt-2">Copywriting</h5>
            <p className="text-muted ">Producing engaging, clear text for advertising channels and websites.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
            {/* <img src={software} alt={software} className="img-fluid img" /> */}
            <i class="fas fa-laptop-code fa-3x"></i>
            <h5 className="mt-2">Software Development</h5>
            <p className="text-muted ">We help create world class softwares that solve targeted problems.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
            {/* <img src={support} alt={support} className="img-fluid img" /> */}
            <i class="fas fa-headset fa-3x"></i>
            <h5 className="mt-2">Tech Support</h5>
            <p className="text-muted ">We provide world class text support for clients home and abroad.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
