import React, {useEffect, useState} from 'react'
import logo from './netflix.png'
import avatar from './avatar.png'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className={`nav ${show && "nav-show"}`}>
            <div className="nav-menu">
              <img
                className="logo"
                src={logo}
                alt="Netflix Logo"
                />
                <text className="menu-item active">Home</text>
                <text className="menu-item">TV Shows</text>
                <text className="menu-item">Movies</text>
                <text className="menu-item">{'New & Popular'}</text>
                <text className="menu-item">My List</text>
            </div>
            
            <img
                className="avatar"
                src={avatar}
                alt="avatar"
            />
        </div>
    )
}

export default Nav
