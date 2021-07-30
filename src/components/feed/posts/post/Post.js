import React, { Component } from 'react';
import './Post.css'

export class Post extends Component {
    render() {
        return (
            <div className='post'>
                <img 
                    className='post-photo'
                    src={this.props.photo}
                    alt='Profile Pic'
                ></img>
                <div className='post-content'>
                    <h1 className='post-name'>{this.props.name}</h1>
                    <p className='post-text'>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Post;
