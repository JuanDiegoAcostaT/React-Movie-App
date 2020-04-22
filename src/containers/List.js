import React from 'react';

import { Card } from '../components/Card/Card'
import Form from '../components/Form/Form'

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=7bcee2ad';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount(){
        // const res = await fetch('../../assets/data.json');
        const res = await fetch(`${API}&s=batman`);
        const resJSON = await res.json();
        this.setState({data : resJSON.Search})
        // console.log(resJSON)
    }

    handleSubmit (e) {
        e.preventDefault();
        if(!this.state.searchTerm){
            return this.setState({ error: 'Please Write a valid Text :)' })
        }
    }


    render(){
        return (
            <>
            <Form
            onSubmit={(e) => this.handleSubmit(e)}
            error={this.state.error}/>
             <div className="row">
                {this.state.data.map(movie => {
                    return <Card movie={movie} />
                 })}
            </div>
            </>
        )
    }

}

export default List