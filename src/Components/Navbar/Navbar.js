import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <nav className="navBar">
            <Link className="navLogo navBarLi" to='landingPage' smooth={true}>Logo</Link>
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
        </nav>
    )
}
