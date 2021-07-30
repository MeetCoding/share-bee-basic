import React from 'react';
import Header from './components/header/Header';
import Credits from './components/credits/Credits';
import Posts from './components/posts/Posts';

let Feed = (props) => 
<div>
    <Header />
    <Credits />
    <Posts data={props.data}/>
</div>
    


export default Feed;