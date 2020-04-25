import React from 'react';
import PropTypes from 'prop-types'


class Form extends React.Component {
    render() {
        return (
            <div className="col-md-4 offset-md-4 p-4">
                <form onSubmit={this.props.onSubmit}>
                    <input type="text"
                    className="form-control" 
                    placeholder="Search"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    autoFocus
                    />
                </form>
            <p className="text-white">{this.props.error ? this.props.error: ''}</p>
        </div>
        )
    }
}


Form.propTypes = {
    onSubmit : PropTypes.function,
    onChange : PropTypes.string,
    value : PropTypes.string,
    error : PropTypes.string
}

export default Form