import React from 'react'
import about from '../images/about.jpg'

function About() {
  return (
    <div className="container my-5 my-sm-3 py-4" id="goal">
      <div className="row my-5">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-3">
          <h1 className="my-3">What we are here for</h1>
          <p className="text-muted">Akshiptika Infotech is an ensured organization giving start to finish IT administrations including web composition and improvement, web based business shopping basket, SEO and computerized promoting, ADA web architecture, site security arrangement, IT consultancy, custom investigation, versatile application, CRM, ERP and custom programming advancement since 19 years. We convey our administrations to new companies, SMEs, corporates, government and offices.</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src={about} alt={about} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default About
