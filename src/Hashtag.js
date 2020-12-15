import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './Hashtag.css'

const Hashtag = () => {
    return (
        <Router>
            <table class="type09">
                <thead>
                    <tr>
                        <th scope="cols">No.</th>
                        <th scope="cols">추천 Hashtag</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>#You</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>#Youc</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>#Youch</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>#Youcho</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>#Youchou</td>
                    </tr>
                </tbody>
            </table>
        </Router>
    );
}

export default Hashtag;