import React from 'react';

const AlbumCards = ({ albums, addToCart }) => {
    return (
        <ul className="row justify-content-around">
            {albums.map((album) => (
                <li key={album.id} className="card col-4 mb-5 text-center">
                    < div className="card-body" >
                        <img src={album.cover} className="img" />
                        <h6 className="card-title fw-bold mt-1 mb-1">{album.title}</h6>
                        <p className="card-text m-0 small fw-light">{album.artist}</p>
                        <p className="card-text m-0 txt-small">{album.rating}/5</p>
                        <p className="card-text mt-0 txt-small fw-bold">{album.price.toFixed(2)} €</p>
                        <button className="btn fw-bold text-white" onClick={() => addToCart(album)}>
                            Add to cart
                        </button>
                    </div >
                </li >
            ))}
        </ul >
    );
}

export default AlbumCards;
