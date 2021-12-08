import React from 'react';
import bg1 from '../../images/slider1.jpg';
import bg2 from '../../images/slider2.jpg';
import bg3 from '../../images/slider3.jpg';

function Slider() {
  return (
    <div>
      <div className="herowrapper">
        <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item img-fluid active drk" >
            <img className="custom-img" src={bg1}  alt={bg1}/>
            <div className="container">
              <div className="carousel-caption">
                <h2> Performance</h2>
                <p className="fst-italic">Truely performant solutions are designed by geniuses and artisans.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item drk">
            <img className="custom-img img-fluid" src={bg2} alt={bg2}/>
            <div className="container">
              <div className="carousel-caption">
                <h2>Simplicity</h2>
                <p className="fst-italic">We believe that the simplest solution to a problem is always best.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item drk">
            <img className="custom-img img-fluid" src={bg3} alt={bg3}/>
            <div className="container">
              <div className="carousel-caption">
                <h2>Excellence</h2>
                <p className="fst-italic">We achieve excellence through discipline and the collaboration.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
