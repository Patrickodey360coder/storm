import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div id="not_found">
      <div className="text-center">
        <p>Akshiptika Blog</p>
        <h1>404!</h1>
        <h4>PAGE NOT FOUND</h4>
        <Link to="/">back to home page</Link>
        <hr />
        
      </div>
    </div>
  )
}

export default NotFound
