import React from 'react';
import "./Header.css";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="header section-padding" id="home">
            <div className="header-content">
                <h1 className="gradient-text">Sami ul Haq</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae animi deleniti, quasi perferendis totam expedita? Ea reiciendis amet expedita quod.</p>
                <div className="header-content-input">
                    <input type="text" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="header-content-people">
                    <img src={people} alt="people" />
                    <p>Many People Are Using Our Services</p>
                </div>
                
            </div>
            <div className="header-image">
                <img src={ai} alt="ai" />
                </div>
        </div>
    )
}

export default Header;
