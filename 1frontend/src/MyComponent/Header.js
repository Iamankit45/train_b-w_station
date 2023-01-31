import React from 'react'
import "./header.css"
// import {  } from "";

export default function Header() {
  return (
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <p className="navbar-brand"><a href="/">E-commerce</a></p>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li id="home"><a href="/">HOME</a></li>
                <li id="about"><a href="/poststore">POSTS</a></li>
                <li id="signin"><a href="/signin">SIGN IN</a></li>
                <li id="signup"><a href="/signup">SIGN UP</a></li>
                <li id="add_post"><a href="/add_posts">ADD POST</a></li>
            </ul>
        </div>
    </nav>
  )
}

