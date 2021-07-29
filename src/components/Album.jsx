
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AlbumCards from "./AlbumCards";
import Cart from "./Cart";


function Album() {
    const [cart, setCart] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001")
            .then(res => res.json())
            .then(result => {
                setAlbums(result)
            })
    }, [])

    function addToCart(album) {
        const albumIsInCart = cart.find((albumInCart) => albumInCart.id === album.id) !== undefined;

        if (albumIsInCart) {
            setCart([
                ...cart.map((albumInCart) =>
                    albumInCart.id === album.id ? { ...albumInCart, qty: albumInCart.qty + 1 } : albumInCart
                )
            ]);
        } else {
            setCart([...cart, { ...album, qty: 1 }]);
        }
    };

    function removeFromCart(album) {
        const albumIsInCart = cart.find((albumInCart) => albumInCart.id === album.id) !== undefined;

        let newCart = cart.map((albumInCart) =>
            albumInCart.id === album.id ? { ...albumInCart, qty: albumInCart.qty - 1 } : albumInCart
        )

        setCart([
            ...newCart.filter((albumInCart) =>
                albumInCart.qty > 0
            )
        ])
    };

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center my-3">
                    <Link to="/">
                        <img src={"./merciyanis.png"} className="logo rounded" />
                    </Link>
                </div>
            </div>

            <div className="row me-1">
                <div className="col-8">
                    <div>
                        <h1 className="my-5 text-center">Albums</h1>
                    </div>

                    <div>
                        <AlbumCards albums={albums} addToCart={addToCart} />
                    </div>
                </div>

                <div className="col-4">
                    <div>
                        <h1 className="my-5 text-center">Cart</h1>
                    </div>

                    <div className="border rounded my-5">
                        <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Album;
