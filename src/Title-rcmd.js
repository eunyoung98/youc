import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import './Title-rcmd.css';
import Upload from './upload';
import Upload2 from './upload2';

const titleRcmd = () => {
    return (
        <Router>
            <div>
                <Link to = '/upload'  style={{ textDecoration: 'none' }} >
                <button className = "subtitle_btn">자막 이용 추천</button></Link>
                <Link to = '/upload2'  style={{ textDecoration: 'none' }} >
                <button className = "voice_btn">음성 이용 추천</button></Link>
            </div>

            <Route path = "/upload" component = {Upload} />
            <Route path = "/upload2" component = {Upload2} />
        </Router>
    );
}

export default titleRcmd;