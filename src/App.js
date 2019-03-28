import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Input from "./Input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      step: 1
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.startClickHandler = this.startClickHandler.bind(this);
  }

  inputChangeHandler(inputValue) {
    this.setState({
      inputValue
    });
  }

  startClickHandler() {
    console.log("start clicked");
    console.log(this.state.inputValue);
    if (this.state.inputValue.length > 0) {
      this.setState({
        inputValue: "",
        step: 2
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Rebel Website Design</h1>
          {this.state.step === 1 && (
            <React.Fragment>
              <Button title="Start" onButtonClick={this.startClickHandler} />
              <Input
                value={this.state.inputValue}
                onChange={this.inputChangeHandler}
              />
            </React.Fragment>
          )}

          {this.state.step === 2 && (
            <React.Fragment>
              <Button
                title="Prev"
                onButtonClick={() => this.setState({ step: 1 })}
              />
              <div>Showing Step 2</div>
            </React.Fragment>
          )}
        </header>
      </div>
    );
  }
}

export default App;
