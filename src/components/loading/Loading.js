import React from 'react';
import Logo from './../../assets/logo.svg';
import './Loading.css';

let Loading = (props) => {

    const progress = Math.floor(props.status/props.postCount*100);

    return (
        <div className='loading'>
            <img 
                className='loading-logo' 
                src={Logo} 
                alt='Logo'
            />
            <h1 className='loading-heading'>{progress}%</h1>
        </div>
    )
}

export default Loading;
