import React from 'react';
import '../../../icofont/icofont.min.css';

function About() {
  return (
    <div className="py-5 text-white" id="about">
      <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="mb-1">About Us</div>
          <h2 className="mb-3">Akshiptika</h2>
          <div>
            <p>As a company we believe in providing the best quality of service to our clients.</p>
            <p>And we are able to achieve that within our core values.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-6 my-3 mt-md-0">
              <div className="value">
                <h5><i class="icon icofont-cube me-1"></i>Simplicity</h5>
                <div>We believe that the simplest solution to a problem is always best.</div>
              </div>
            </div>
            <div className="col-6 my-3 mt-md-0">
            <div className="value">
                <h5> <i class="icon icofont-badge"></i> Excellence</h5>
                <div>We achieve excellence through discipline and the collaboration.</div>
              </div>
            </div>
            <div className="col-6 my-3 mt-md-0">
            <div className="value">
                <h5><i class="icon icofont-shield"></i> Trust</h5>
                <div>We build a trust in our relationship with you and products that you can rely on.</div>
              </div>
            </div>
            <div className="col-6 my-3 mt-md-0">
            <div className="value">
                <h5><i class="icon icofont-space-shuttle"></i> Performance</h5>
                <div>Truely performant solutions are designed by geniuses and artisans.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
