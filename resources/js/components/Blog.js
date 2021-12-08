import React, {useEffect, useState} from 'react';
import News from './news/News';
import Categories from './categories/Categories';
import BlogHero from './BlogHero';
import BlogNav from './BlogNav';

function Blog() {
  const api_key = 'ac7d9996770a49ef9bacc2e5a740515c';
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=${api_key}`;

  const [ error, setError ] = useState(null);
  const [ isloaded, setIsLoaded ] = useState(false);
  const [ news, setNews ] = useState([]);
  
  useEffect( () => {
    fetch(url)
    .then( response => response.json())
    .then( (data) => {
      setIsLoaded(true)
      setNews(data.articles)
    });
    (err) => {
      setLoading(err)
      setError(err)
    }
  }, []);

  return (
    <>
      <BlogNav />
      <BlogHero />
      
      <div className="container">
        <div className="row">
          {news.map((data, id) => (
            <div key={id} className="col-12 col-sm-6 col-md-6 col-lg-4">
              <News data={data} id={id}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog

