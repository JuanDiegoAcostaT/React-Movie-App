import React from 'react';
import PropTypes from 'prop-types'

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

Card.propTypes = {
    movie : PropTypes.shape({
        Poster : PropTypes.string,
        Title : PropTypes.string,
        Year : PropTypes.string,
        Type : PropTypes.string
    })

};