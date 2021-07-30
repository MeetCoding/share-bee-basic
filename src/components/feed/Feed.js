import React from 'react';
import Header from './header/Header';
import Credits from './credits/Credits';
import Posts from './posts/Posts';
import './Feed.css';

let Feed = (props) => 
<div className='feed'>
    <Header />
    <Credits />
    <Posts data={props.data}/>
</div>
    


export default Feed;