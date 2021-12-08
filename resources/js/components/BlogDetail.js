import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
// import { Link  } from 'react-router-dom'

function BlogDetail() {
  const api_key = 'ac7d9996770a49ef9bacc2e5a740515c';
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=${api_key}/`;

  let { id } = useParams()

  console.log(`The blog result is ${id}`);

  return (
    <>
      <div className="news mt-5">
        <p className="blog-meta">By {author}</p>
        <img src={urlToImage} className="img-fluid" alt="..."/>
        <div className="blog-info">
          <h2 className="blog-text">{title}</h2>
          <p>{description}</p>
          <Link className="btn btn-small btn-primary" to={`/blog/${author}`}>Go Back</Link>
        </div>
      </div>
    </>
  )
}

export default BlogDetail


