import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../images/patrick.jpeg';

function News(props) {
  console.log(props);
  const {author, content, description, publishedAt, source, title, url, urlToImage} = props.data

  return (
    <>
      <div className="news mt-5">
        <div className="container">
          <img src={urlToImage} className="img-fluid" alt="..."/>
            <p className="card-text">{title}</p>
          <div className="">
            <small>Author: {author}</small><br/>
            <small><Link to="#">Read more...</Link></small>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
