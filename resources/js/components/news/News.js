import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../images/patrick.jpeg';

function News(props) {
  console.log(props);
  const {author, content, description, publishedAt, source, title, url, urlToImage} = props.data

  return (
    <>
      <div className="news mt-5">
        <p className="blog-meta">By {author}</p>
        <img src={urlToImage} className="img-fluid" alt="..."/>
        <div className="blog-info">
          <h2 className="blog-text">{title}</h2>
          <Link className="btn btn-small btn-primary" to="#">Read more...</Link>
        </div>
      </div>
    </>
  )
}

export default News
