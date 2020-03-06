import React from 'react';
import '../assets/css/componets/Tarjeta.scss';
import Liked from '../components/liked';

const Tarjeta = ({ title, subtitle, date, img, children ,liked}) => (
    <section className='container-tarjeta'>
        <div className='container-tarjeta-info'>
            <div className="cotainer-logo" >
                <img src={img} className="logo" alt={title} />
            </div>
            <div className="info-card">
                <div className="info-card-top">
                    <h2>{title}</h2>
                </div>
                <div className="info-card-bot">
                    <span>{subtitle}</span>
                    <span>({date})</span>
                </div>
            
            </div>
            <div >
                <Liked liked={liked} />

            </div>
        </div>
        {children}
    </section>
);

export default Tarjeta;