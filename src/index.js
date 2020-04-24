import React from 'react';
import ReactDOM from 'react-dom'
import 'bootswatch/dist/Pulse/bootstrap.min.css'

import List from './containers/List'

const App = () => {
    return (
        <>
        <nav className="navbar navbark-dark bg-dark border-bottom border-white">
            <a href="/" className="navbar-brand">Movie App</a>
        </nav>
        <main className="bg-dark" >
            <div className="container">
             <List/>
            </div>
        </main>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));