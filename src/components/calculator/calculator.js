import React, { Component } from 'react';
import { Textfit } from 'react-textfit';
import './calculator.css';

class Calculator extends Component {

    state = {
        displayValue: '0',
        value1: "",
        value2: "",
        operator: "",
        opstatus: false,
        active: false
    }

    clearDisplay() {
        this.setState({
            displayValue: '0',
            value1: "",
            value2: "",
            operator: null,
            opstatus: false,
            active: false
        })
    }

    inputDigit(digit) {
        const { displayValue } = this.state;
        const { active } = this.state;

        if (active === false) {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
            })
        } else if (active === true) {
            this.setState({
                displayValue: String(digit),
                active: false
            })
        }

    }

    inputDec() {
        const { displayValue } = this.state;
        if (displayValue.indexOf(".") === -1) {
            this.setState({
                displayValue: displayValue + "."
            })
        }
    }

    inputPlusMinus() {
        const { displayValue } = this.state;
        this.setState({
            displayValue: displayValue.charAt(0) === "-" ? displayValue.substr(1) : '-' + displayValue
        })
    }

    inputPercent() {
        const { displayValue } = this.state;
        this.setState({
            displayValue: displayValue / 100
        })
    }

    operation(operator) {
        const { displayValue } = this.state;
        const { opstatus } = this.state;
        const { value1 } = this.state;



        if (opstatus === false && value1 === "") {
            this.setState({
                value1: displayValue,
                displayValue: '0',
                operator: operator,
                opstatus: true
            })
        } else if (opstatus === true) {
            this.setState({
                operator: operator
            })
        }

    }

    compute() {
        const { displayValue } = this.state;
        const { value1 } = this.state;
        const { value2 } = this.state;
        const { operator } = this.state;

        if (value1 && operator) {
            if (operator === 'minus') {
                const newValue = parseFloat(value1) - parseFloat(displayValue);
                this.setState({
                    value1: "",
                    value2: newValue,
                    displayValue: newValue,
                    operator: null,
                    opstatus: false,
                    active: true
                })
            }
            if (operator === 'plus') {
                const newValue = parseFloat(value1) + parseFloat(displayValue);
                this.setState({
                    value1: "",
                    value2: newValue,
                    displayValue: newValue,
                    operator: null,
                    opstatus: false,
                    active: true
                })
            }
            if (operator === 'multiply') {
                const newValue = parseFloat(value1) * parseFloat(displayValue);
                this.setState({
                    value1: "",
                    value2: newValue,
                    displayValue: newValue,
                    operator: null,
                    opstatus: false,
                    active: true
                })
            }
            if (operator === 'divide') {
                const newValue = parseFloat(value1) / parseFloat(displayValue);
                this.setState({
                    value1: "",
                    value2: newValue,
                    displayValue: newValue,
                    operator: null,
                    opstatus: false,
                    active: true
                })
            }
            if (operator === 'mod') {
                const newValue = parseFloat(value1) % parseFloat(displayValue);
                this.setState({
                    value1: "",
                    value2: newValue,
                    displayValue: newValue,
                    operator: null,
                    opstatus: false,
                    active: true
                })
            }
        }
    }


    render() {

        const { displayValue } = this.state;
        const { operator } = this.state;
        const { value1 } = this.state;

        return (
            <div className="container calculator">
                <div className="row topDisplay">
                    <div className="col s8 offset-s1 calculator-display2">{value1}</div>
                    <div className="col s2 calculator-display3">{operator}</div>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1 calculator-display">
                        <Textfit
                            mode="single"
                            forceSingleModeWidth={false}>
                            {displayValue}
                        </Textfit>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green" onClick={() => this.clearDisplay()}>C</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green" onClick={() => this.inputPlusMinus()}>&plusmn;</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green" onClick={() => this.inputPercent()}>%</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light blue-grey darken-3" onClick={() => this.operation("divide")}>&divide;</button></div>
                </div>
                <div className="row">
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(7)}>7</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(8)}>8</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(9)}>9</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light blue-grey darken-3" onClick={() => this.operation("multiply")}>X</button></div>
                </div>
                <div className="row">
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(4)}>4</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(5)}>5</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(6)}>6</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light blue-grey darken-3" onClick={() => this.operation("minus")}>-</button></div>
                </div>
                <div className="row">
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(1)}>1</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(2)}>2</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(3)}>3</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light blue-grey darken-3" onClick={() => this.operation("plus")}>+</button></div>
                </div>
                <div className="row">
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDec()}>.</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.inputDigit(0)}>0</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light green darken-3" onClick={() => this.compute()}>=</button></div>
                    <div className="col s3"><button className="btn-floating btn-large waves-effect waves-light blue-grey darken-3" onClick={() => this.operation("mod")}>MOD</button></div>
                </div>
            </div>
        );
    }
}

export default Calculator;