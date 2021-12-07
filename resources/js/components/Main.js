import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog'
import Maintenance from './pages/Maintenance';
import NotFound from './pages/NotFound'

function Main() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/maintenance" element={<Maintenance/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </Router>

    </>
  )
}

export default Main

if (document.getElementById('app')) {
  ReactDOM.render(<Main />, document.getElementById('app'));
}