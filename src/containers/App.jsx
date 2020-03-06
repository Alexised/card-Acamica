import React from 'react';
import Tarjeta from '../components/tarjeta';
import Rating from '../components/raiting';


const rate ="Rate this album";
const albumes = [
    {
        name: "Rozes",
        artist: "Under the Grave",
        year: 2016,
        img: "https://i.scdn.co/image/ab67616d0000b273222b05fcdcae5b710b7004fc",
        rating: 2,
        liked: false
    },
    {
        name: "Radioactive",
        artist: "Imagine Dragons",
        year: 2019,
        img: "https://i.scdn.co/image/ab67616d0000b273ef2e4d695cb2d76681855b8f",
        rating: 3,
        liked: false
    },
    {
        name: "Necromántico",
        artist: "Carolina Durante",
        year: 2019,
        img: "https://i.scdn.co/image/ab67616d0000b27308f20fae0aa105278e33880d",
        rating: 5,
        liked: false
    }
];


const App = () => {
    return (
        <div className="App">

            {albumes.map((item) =>
                <Tarjeta title={item.name} subtitle={item.artist} date={item.year} img={item.img} like={item.liked} key={item.artist} >
                    
                    <Rating rating={item.rating} subtitle={rate}/>
                    

                </Tarjeta>

            )}

        </div>
    );
}

export default App;