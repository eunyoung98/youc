import React from 'react';
import './Hash-trend.css';
import {BrowserRouter as Router} from 'react-router-dom';

const Hash_trend = () => {

    return (
        <Router>
            <table class="type09">
                <thead>
                    <tr>
                        <th scope="cols">No.</th>
                        <th scope="cols">해시태그 트랜드 순위</th>
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

  export default Hash_trend;
  