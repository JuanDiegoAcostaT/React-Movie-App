import React from 'react';

import { Card } from '../components/Card/Card'
import Form from '../components/Form/Form'
// import { NotFound } from '../components/NotFound/index';

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=7bcee2ad';

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data : [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount(){
        // const res = await fetch('../../assets/data.json');
        const res = await fetch(`${API}&s=robot`);
        const resJSON = await res.json();
        this.setState({data : resJSON.Search})
        // console.log(resJSON)
    }

   async handleSubmit (e) {
        e.preventDefault();
        if (!this.state.searchTerm) {
            return this.setState({ error: "Please write a valid text" });
          }
          const response = await fetch(`${API}&s=${this.state.searchTerm}`);
          const data = await response.json();

          if(!data.Search){
            return this.setState({ error: "We can not found that title" });
          }

          this.setState({data: data.Search, error: ''})
        }

    
    render() {
        return (
            <>
            <Form
            onSubmit={(e) => this.handleSubmit(e)}
            error={this.state.error}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            value={this.state.searchTerm}
            />
             <div className="row">
                {this.state.data.map(movie => {
                    return <Card movie={movie} key={movie.imdbID} />
                 })}
            </div>
            </>
        )
    }

}

export default List