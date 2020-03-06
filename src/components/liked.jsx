import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {FaHeart ,FaRegHeart } from "react-icons/fa";
import '../assets/css/componets/liked.scss';

class Liked extends React.Component {
    state = {
        liked: this.props.liked
    };
    handleClick = () => {
        this.setState(state => ({ liked: !state.liked }));
    };
    render() {
        const likedState = this.state.liked;
        return (

            <IconButton className="icon" onClick={this.handleClick}>
                {likedState ? <FaHeart /> : <FaRegHeart />}
            </IconButton>
        );
    }
}
export default Liked;
