import React, { useState, useEffect } from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Inputs were submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Test:
                    <input type="text" name="test" value={this.state.value} onChange={this.handleChange} />
                </label>


                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;