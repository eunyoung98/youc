import './App.css';
import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import titleRcmd from './Title-rcmd';
import Hashtag from './Hashtag';
import Trend from './Trend';

function App() {
  return (
    <div className = "home-page">
      <Header />
      <Home />

      <Router>
          <Link to = './Title-rcmd'  style={{ textDecoration: 'none' }} >
            <button className = "btn6_1">영상 제목<br />추천 서비스</button></Link>
            <Link to = './Hashtag'  style={{ textDecoration: 'none' }} >
          <button className = "btn6_2">해시태그<br />추천 서비스</button></Link> 
          <Link to = './Trend'  style={{ textDecoration: 'none' }} >
          <button className = "btn6_3">영상트랜드<br />분석 서비스</button></Link> 

          <Route exact path = "/Title-rcmd" component = {titleRcmd}/>
          <Route  path = "/Hashtag" component = {Hashtag}/>
          <Route  path = "/Trend" component = {Trend}/>
      </Router>
    </div>
  ); 
}

export default App;
