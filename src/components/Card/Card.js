import React from 'react';

export const Card = ({ movie }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100" />
                <div className="card-body">
                    <h2>{movie.Title} {movie.Year}</h2>
                    <p>{movie.Type}</p>
                </div>
            </div>
        </div>
    )
}