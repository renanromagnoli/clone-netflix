import React from 'react'
import './Header.css'

export default () => {
    return (
        <header>
            <div className="header--logo">
                <a href="/">
                    <img src="../assets/logo_netflix.png" alt="Netflix" />
                </a>
            </div>
        </header>
    )
}