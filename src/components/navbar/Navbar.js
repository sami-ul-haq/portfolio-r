import React, {useState} from 'react';
import "./Navbar.css";
import Logo from "../../assets/logo.svg"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#gpt3">What Is GPT3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>

)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="navbar-links-container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="navbar-menu">
                {
                    toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> :  <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
                }

                {
                    toggleMenu && (
                        <div className="navbar-menu-container scale-up-center">
                            <div className="navbar-menu-container-links">
                            <Menu />
                            <div className="navbar-menu-container-links-sign">
                                <p>Sign In</p>
                                <button type="button">Sign Up</button>
                            </div>
                            </div>
                        </div>
                    )
                }
                </div>
        </div>
    )
}

export default Navbar;
