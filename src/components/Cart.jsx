import React from 'react';

const Cart = ({ cart, addToCart, removeFromCart }) => {
    function cartQuantities() {
        return cart.reduce((total, album) => total + (album.qty ?? 1), 0);
    }

    function getTotal() {
        return cart.reduce((total, album) => total + album.price * album.qty, 0);
    }

    return (
        <>
            {!cart.length ?
                (
                    <div className="text-center mt-2">
                        <p>
                            Your cart is empty
                        </p>
                    </div>
                )
                :
                (
                    <div className="text-center mt-2">
                        <p>You have {cartQuantities()} album(s) in your cart</p>
                    </div>
                )
            }

            <ul className="row justify-content-around p-0">
                {cart.map((album) => (
                    <li key={album.id} className="card w-75 p-3 mb-2 flex-column flex-md-row align-items-center justify-content-center  justify-content-md-between">
                        <div className="w-auto me-2 d-flex flex-column align-items-center  align-items-md-start ">
                            <img src={album.cover} className="img-cart p-0 me-auto mb-1" />
                            <h6 className="card-text small fw-bold">{album.title}</h6>
                            <p className="card-text artist">{album.artist}</p>
                        </div>
                        <div className="w-auto h-100 d-flex flex-column justify-content-between ">
                            <p className="card-text text-md-end text-center">
                                {(album.price * (album.qty ?? 1)).toFixed(2)} €
                            </p>

                            <div className="d-grid gap-2 d-flex justify-content-md-end align-items-end">
                                <button onClick={() => removeFromCart(album)} className="btn btn-sm fw-bold fas fa-minus-square text-white"></button>
                                <p className="m-0">{album.qty}</p>
                                <button onClick={() => addToCart(album)} className="btn  btn-sm fw-bold fas fa-plus-square text-white"></button>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
            <hr className="border-3 border-top border-dark mx-2" />
            <div className="d-block">
                <h4 className="ms-5">Total :
                    <span className="float-end me-5 fw-bold">{getTotal().toFixed(2)} €</span>
                </h4>
            </div>
        </>
    );
}

export default Cart;
