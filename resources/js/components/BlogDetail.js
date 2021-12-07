import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link  } from 'react-router-dom'

function BlogDetail() {
  let { id } = useParams()

  const [ blog, setBlog ] = useState([])

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


