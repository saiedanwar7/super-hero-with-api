import React, { useEffect, useState } from 'react';
import Actors from '../Actors/Actors';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    const [actors, setActors] = useState([]);
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        fetch('./acters.json')
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])

    const handleAddedActors = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className="mainSection">
            <div className="ms-2 mb-5 meals row row-cols-1 row-cols-md-3 g-4">
                {
                    actors.map(actor => <Actors key={actor.key} handleAddedActors={handleAddedActors} actor={actor}></Actors>)
                }

            </div>
            <div>
              <Cart key={cart.key} cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Main;