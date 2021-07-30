import React, { Component } from 'react';
import './Header.css';
import text from './HeaderParagraph'
import logo from './../../../assets/logo.svg'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img 
                    className='header-image'
                    src={logo}
                    alt='Logo'
                ></img>
                <div className='header-content'>
                    <h1 className='header-heading'>ShareBee</h1>
                    <p className='header-paragraph'>{text}</p>
                </div>
            </div>
        )
    }
}

export default Header;
