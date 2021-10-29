import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0     
        }

        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }
    
    handleClickPlus() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleClickMinus() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>CLASS {this.state.counter}</h1>
                <button onClick={this.handleClickPlus}>Plus</button>
                <button onClick={this.handleClickMinus}>Minus</button>
            </div>
        )
    }
}
