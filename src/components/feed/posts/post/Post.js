import React, { Component } from 'react';
import './Post.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export class Post extends Component {

    constructor() {
        super();
        this.state = {
            isLiked: false
        }
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }

    handleLikeClick() {
        this.setState(prevState => {
            return {
                isLiked: !prevState.isLiked
            }    
        });
    }

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
                {
                    this.state.isLiked? 
                    <FavoriteIcon 
                        className='like-btn filled-like-btn' 
                        onClick={this.handleLikeClick} 
                    /> : 
                    <FavoriteBorderIcon 
                        className='like-btn' 
                        onClick={this.handleLikeClick} 
                    />
                }
            </div>
        )
    }
}

export default Post;
