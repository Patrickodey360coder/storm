import React, {useEffect, useState} from 'react';
import News from './news/News';
import Categories from './categories/Categories';
import BlogHero from './BlogHero';
import BlogNav from './BlogNav';

function Blog() {
  // const api_key = 'ac7d9996770a49ef9bacc2e5a740515c';

  return (
    <div className="blog">
      <BlogNav />
      <BlogHero />
      <div className="container">
        <div className="row mt-3">
          <div className="col-10 news">
            <News />
          </div>
          <div className="col-2 categories">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
