import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../images/patrick.jpeg';

function News() {
  return (
    <div className="news">
      <div className="row">
        <div className="container-fluid">
          <div className="col-3 col-sm-12">
            <div className="card py-3">
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <img src={bg} className="" alt="..."/>
              <div className="px-3">
                <small>Author: Patrick Odey</small><br/>
                <small><Link to="#">Read more...</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
