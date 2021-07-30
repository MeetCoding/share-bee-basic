import React from 'react';
import Logo from './../../assets/logo.svg';
import './Loading.css';

let Loading = () =>
<div className='loading'>
    <img 
        className='loading-logo' 
        src={Logo} 
        alt='Logo'
    />
</div>

export default Loading;
