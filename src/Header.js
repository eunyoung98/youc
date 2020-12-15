import React from 'react';
import './Header.css';

const Header = () => {
    return (
    <div className = "header">
        <div className ="wrapper1">
            <div className = "team-logo">
                <div className = "team-name">유추</div>
                <div className = "logo"></div>
            </div>
        <div className = "top-bar">
            <h1 className = 'main-title'>Youchou<br />당신의 영상 제목을<br />추천해드립니다!</h1>
        </div>
        </div>
    </div>
    );
  }
  
  export default Header;