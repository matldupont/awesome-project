import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: "",
      todos: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      inputVal: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      console.log("ADD MY TODO!!", this.state.inputVal);
    }
  }

  render() {
    console.log("RENDER", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Adam needs to build these sites..</h1>
        </header>
        <main>
          <div className="TodoWrapper">
            <div className="TodoInputWrapper">
              <input
                className="TodoInput"
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
                value={this.state.inputVal}
              />
            </div>
            <div className="TodoItemList">
              <div className="TodoListItem">
                <div className="TodoListItemText">thing to do</div>
                <button className="TodoListItemRemoveBtn">remove</button>
              </div>
              <div className="TodoListItem">
                <div className="TodoListItemText">thing to do</div>
                <button className="TodoListItemRemoveBtn">remove</button>
              </div>
              <div className="TodoListItem">
                <div className="TodoListItemText">thing to do</div>
                <button className="TodoListItemRemoveBtn">remove</button>
              </div>
              <div className="TodoListItem">
                <div className="TodoListItemText">thing to do</div>
                <button className="TodoListItemRemoveBtn">remove</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
