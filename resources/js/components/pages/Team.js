import React from 'react'
import munis from '../../../images/munis.jpg'
import olang from '../../../images/olang.jpg'
import patrick from '../../../images/patrick.jpeg'
import andor from '../../../images/andor.jpg'
import ankush from '../../../images/ankush.jpeg'

function Team() {
  return (
    <div className="container my-5 py-5" id="team">
      <h1 className="text-center mb-5">Meet the team</h1>
      <div className="row text-center mx-auto">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
          <img src={munis} alt={munis} className="img-fluid team-img mb-2" />
          <h5>Munish Rana</h5>
          <p className="text-muted fst-italic">Chief Executive Officer</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
          <img src={olang} alt={olang} className="img-fluid team-img mb-2" />
          <h5>Olang A.O. Daniel</h5>
          <p className="text-muted fst-italic">Full Stack Engineer</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
          <img src={patrick} alt={patrick} className="img-fluid team-img mb-2" />
          <h5>Patrick Odey</h5>
          <p className="text-muted fst-italic">Frontend Engineer</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
          <img src={ankush} alt={ankush} className="img-fluid team-img mb-2" />
          <h5>Ankush Bhatia</h5>
          <p className="text-muted fst-italic">Social Media Expert</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
          <img src={andor} alt={andor} className="img-fluid team-img mb-2" />
          <h5>Andor E. Ofre</h5>
          <p className="text-muted fst-italic">Backend Engineer</p>
        </div>
      </div>
    </div>
  )
}

export default Team
