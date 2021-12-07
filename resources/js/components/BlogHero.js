import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import bg1 from '../../images/about.jpg';
import bg2 from '../../images/bg-blog.jpg';
import bg3 from '../../images/bg-blog2.jpg';

function BlogHero() {
  return (
    <div className="herowrapper">
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item img-fluid active">
          <img className="custom-img" src={bg1}  alt={bg1}/>
          <div className="container">
            <div className="carousel-caption text-start">
              <h2>Paul Prudhomme</h2>
              <p className="fst-italic">"You don't need a silver fork to eat good food."</p>
              <p><a className="btn btn-md bg-orange text-white" href="https://github.com/Patrickodey360coder/DogsHaven" target="_blank" rel="noreferrer">Github</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="custom-img img-fluid" src={bg2} alt={bg2}/>
          <div className="container">
            <div className="carousel-caption">
              <h2>James Beard</h2>
              <p className="fst-italic">"Food is our common ground, a universal experience."</p>
              <p><a className="btn btn-md bg-orange text-white" href="https://github.com/Patrickodey360coder/DogsHaven" target="_blank" rel="noreferrer">Github</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="custom-img img-fluid" src={bg3} alt={bg3}/>
          <div className="container">
            <div className="carousel-caption text-end">
              <h2>Julia Child.</h2>
              <p className="fst-italic">"People who love to eat are always the best people."</p>
              <p><a className="btn btn-md bg-orange text-white" href="https://github.com/Patrickodey360coder/DogsHaven" target="_blank" rel="noreferrer">Github</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    </div>
  )
}

export default BlogHero
