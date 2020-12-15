import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import './Trend.css'
import Hash_trend from './Hash-trend';


const Trend = () => {
    return (
        <Router>
            <div>
                <Link to = '/hash-trend'  style={{ textDecoration: 'none' }} >
                <button className = "hashtag_btn">해시태그 트랜드 분석</button></Link>
                <Link to = '/comments'  style={{ textDecoration: 'none' }} >
                <button className = "reply_btn">영상 댓글 분석</button></Link>
            </div>

            <Route path = "/Hash-trend" component = {Hash_trend} />
        </Router>
    );
}

export default Trend;