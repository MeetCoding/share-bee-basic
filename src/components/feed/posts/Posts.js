import React, { Component } from 'react';
import Post from './post/Post';

export class Posts extends Component {
    render() {

        let currentKey = 0;

        const posts = this.props.data.map(post => {
            currentKey++;
            return (
                <Post 
                    key={currentKey}
                    name={post.name}
                    photo={post.photo}
                    text={post.text}
                />
            )
        })

        return (
            <div>
                
            </div>
        )
    }
}

export default Posts;
