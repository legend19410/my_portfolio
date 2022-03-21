import React from 'react'
import './styles/Header.css';

function Header() {
  return (
    <header>
            <a href="#" className="logo"> 
                    <span>Milton</span> Francis
            </a>

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#service">service</a>
                <a href="#experience">My Journey</a>
                <a href="#portfolio">portfolio</a>
                <a href="#contact">contact</a>
            </nav>

            <div className="follow">
                <a href="https://www.facebook.com/profile.php?id=100005219239487" className="fab fa-facebook-f"></a>
                <a href="https://www.instagram.com/miltonfrancis8/" className="fab fa-instagram"></a>
                <a href="https://github.com/legend19410/" className="fab fa-github"></a>
                <a href="https://jm.linkedin.com/in/milton-francis-66b2471a7" className="fab fa-linkedin"></a>
            </div>
</header>
  )
}

export default Header