import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
    <Router>
    <div>
        <Link to = './Title-rcmd'  style={{ textDecoration: 'none' }} >
            <button className = "btn6_1">영상 제목<br />추천 서비스</button></Link>
        <Link to = './Hashtag'  style={{ textDecoration: 'none' }} >
            <button className = "btn6_2">해시태그<br />추천 서비스</button></Link>
        <Link to = './Trend'  style={{ textDecoration: 'none' }} >
            <button className = "btn6_3">영상트렌드<br />분석 서비스</button></Link> 
    </div>
    </Router>
    )
}

export default Home;