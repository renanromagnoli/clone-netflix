import React from 'react'
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? "black" : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário Netflix" />
                </a>
            </div>
        </header>
    )
}