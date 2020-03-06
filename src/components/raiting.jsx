import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import '../assets/css/componets/raiting.scss';


const Rating = ({ rating, subtitle }) => {
    const start = Array(rating).fill(<FaStar />);
    const startvoid = Array(5 - rating).fill(<FaRegStar />);
    return (
        <div className='container-card-rate'>
            <span>{subtitle}</span>
            <div className='container-start'>
            {start.concat(startvoid)}
            </div>
        </div>)

};

export default Rating;
