import React, {useEffect, useState} from 'react';
import News from './news/News';
import Categories from './categories/Categories';
import BlogHero from './BlogHero';
import BlogNav from './BlogNav';

function Blog() {
  const api_key = 'ac7d9996770a49ef9bacc2e5a740515c';
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=${api_key}`;

  const [ news, setNews ] = useState([]);
  
  useEffect( () => {
    fetch(url)
    .then( response => response.json())
    .then( data => setNews(data.articles))
  }, []);
  console.log(news)

  return (
    <>
      <BlogNav />
      <BlogHero />
      <div className="container">
        <div className="row">
          {news.map((data) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <News data={data} key={data.url}  />
            </div>
          ))}
          <div className="col-md-4">
            <div className="card">
            <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
            <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
            <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog

