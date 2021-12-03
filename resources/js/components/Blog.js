import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import News from './news/News'
import Categories from './categories/Categories'
import Hero from './Hero'
import ComingSoon from './ComingSoon';

function Blog() {
  const api_key = 'ac7d9996770a49ef9bacc2e5a740515c';
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {

  }, [])


  return (
    // <div className="blog">
    //   <Hero />
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-10 news">
    //         <News />
    //       </div>
    //       <div className="col-2 categories">
    //         <Categories />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <ComingSoon />
    </>
  )
}

export default Blog

if (document.getElementById('blog')) {
  ReactDOM.render(<Blog />, document.getElementById('blog'));
}