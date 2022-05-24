import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai"
import React, { useState } from "react";
import logo from './../../Assets/logo.png';


export default function NavBar() {

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    return (
        <>
        <nav className="navBar">
            <Link className="navLogo navBarLi" to='landingPage' smooth={true}>
                <img className='logo' src={logo}></img>
            </Link>
            <div className="navBarText">
                <ul>
                    <Link className='navBarLi' to='landingPage' smooth={true}>
                        Home
                    </Link>
                    <Link className="navBarLi" to='about' smooth={true}>
                        About
                    </Link>
                    <Link className="navBarLi" to='projects' smooth={true}>
                        Projects
                    </Link>
                    <Link className="navBarLi" to='contact' smooth={true}>
                        Contact
                    </Link>
                    <a className="navBarLi resume" target='_blank'
                        href="https://docs.google.com/document/d/1lHpxuNjKTjk4vCrzOzEkDnr2Bkw7ZxKu6qyUIMYaMEE/edit?usp=sharing" rel="noreferrer">
                        Resume
                    </a>
                </ul>
            </div>
            <div 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='navHamburger' onClick={() =>
                    setClick(!click)}>
                {!hover && !click ? <AiOutlineMenu /> :
                    <AiOutlineMenuUnfold />}
            </div>
        </nav>
        {click ? <ul className="hamburgerText">
            <Link className="navBarLi" onClick={() =>
                setClick(!click)} to='landingPage' smooth={true}>
                Home
            </Link>
            <Link className="navBarLi" onClick={() =>
                setClick(!click)} to='about' smooth={true}>
                About
            </Link>
            <Link className='navBarLi' onClick={() =>
                setClick(!click)} to='projects' smooth={true}>
                Projects
            </Link>
            <Link className='navBarLi' onClick={() => setClick(!click)} to='contact' smooth={true}>
                Contact
            </Link>
            <a className='navBarLi resume' target='_blank'
                href="https://docs.google.com/document/d/1lHpxuNjKTjk4vCrzOzEkDnr2Bkw7ZxKu6qyUIMYaMEE/edit?usp=sharing">
                Resume
            </a>
        </ul> : null
    }
    </>
    )
}
