import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../../../images/bg-blog.jpg';
import bg2 from '../../../images/bg-blog.jpg';
import bg3 from '../../../images/bg-blog2.jpg';

function News() {
  return (
    <>
      <div className="container news">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 blog-post-card my-2">
            <div className="blog-post-image">
              <img src={bg1} alt={bg1} className="img-fluid" />
            </div>
            <div className="blog-post-title"><Link to="#">Announcing the Open Source Challenge 2021</Link></div>
            <div className="blog-post-author"><Link to="#">Patrick Odey</Link></div>
            <div className="blog-post-timestamp">Aug 3, 2021</div>
            <div className="blog-post-description">Open Source Software (OSS) is software whose source code or documentation, or designs are made available for use, modification, or enhancement by anyone in the world. Did you notice that it says "anyone in the world" and not "only software engineers"...</div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 blog-post-card my-2">
            <div className="blog-post-image">
              <img src={bg2} alt={bg2} className="img-fluid" />
            </div>
            <div className="blog-post-title"><Link to="#">Announcing the Open Source Challenge 2021</Link></div>
            <div className="blog-post-author"><Link to="#">Patrick Odey</Link></div>
            <div className="blog-post-timestamp">Aug 3, 2021</div>
            <div className="blog-post-description">Open Source Software (OSS) is software whose source code or documentation, or designs are made available for use, modification, or enhancement by anyone in the world. Did you notice that it says "anyone in the world" and not "only software engineers"...</div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 blog-post-card my-2">
            <div className="blog-post-image">
              <img src={bg3} alt={bg3} className="img-fluid" />
            </div>
            <div className="blog-post-title"><Link to="#">Announcing the Open Source Challenge 2021</Link></div>
            <div className="blog-post-author"><Link to="#">Patrick Odey</Link></div>
            <div className="blog-post-timestamp">Aug 3, 2021</div>
            <div className="blog-post-description">Open Source Software (OSS) is software whose source code or documentation, or designs are made available for use, modification, or enhancement by anyone in the world. Did you notice that it says "anyone in the world" and not "only software engineers"...</div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 blog-post-card my-2">
            <div className="blog-post-image">
              <img src={bg1} alt={bg1} className="img-fluid" />
            </div>
            <div className="blog-post-title"><Link to="#">Announcing the Open Source Challenge 2021</Link></div>
            <div className="blog-post-author"><Link to="#">Patrick Odey</Link></div>
            <div className="blog-post-timestamp">Aug 3, 2021</div>
            <div className="blog-post-description">Open Source Software (OSS) is software whose source code or documentation, or designs are made available for use, modification, or enhancement by anyone in the world. Did you notice that it says "anyone in the world" and not "only software engineers"...</div>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default News
