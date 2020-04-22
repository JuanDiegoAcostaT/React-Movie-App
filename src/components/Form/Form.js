import React from 'react';

export const Form = ({ searchTerm }) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('enviando...')
    }

    return(
        <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={handleSubmit}>
                <input type="text"
                className="form-control" 
                placeholder="Search"
                name=""
                 id=""
                 onChange={ e => this.setState({searchTerm: e.target.value}) }
                 autoFocus
                 />
            </form>
        </div>
    )
}