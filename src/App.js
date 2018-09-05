import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

      this.state = {
        color: "",
        bgColor: "#3949ab"
      };

      this.colorValue = this.colorValue.bind(this);
      this.setNewColor = this.setNewColor.bind(this);
      this.handleHover = this.handleHover.bind(this);
    }

    colorValue(e) {
      this.setState({ 
        color: e.target.value 
      });
    }

    setNewColor(e) {
      this.setState({
        bgColor: this.state.color
      });
      this._input.focus();
      this._input.value = "";
      e.preventDefault();
    }

    handleHover() {
      let letters = document.querySelectorAll('.letter');
      let letter = [...letters];
      letter.forEach( letter => {
        letter.addEventListener('mouseover', (e) => {
          letter.classList.add('hovered');
        });
        
        letter.addEventListener('animationend', (e) => {
          letter.classList.remove('hovered');
        });
      }
      );
     // this.setState({
     //   isHovered: !this.state.isHovered
      //});
    }
    
  
    

  render() {
    let squareStyle = {
      color : this.state.bgColor
    };

    //let letterClass = this.state.isHovered ? "letter hovered" : "letter";
    let letters = document.querySelectorAll('.letter');
   
    
    
    return (
      <div id="container">
    <div className="colorArea">
    
    <div  className="colorSquare">
      <div className="name">
        <span className="logo">
          <span id="a" style={squareStyle} className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>M</span>
          <span id="a" style={squareStyle} className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>O</span>
          <span id="a" style={squareStyle} className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>.</span>
        </span>
          
        <span className="logo">
          <span id="a" style={squareStyle} className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>N</span>
          <span id="a" style={squareStyle} className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>A</span>
          <span id="a" style={squareStyle} className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>S</span>
          <span id="a" style={squareStyle} className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>I</span>
          <span id="a" style={squareStyle} className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>R</span>
        </span>
      </div>
    </div>

    <form onSubmit={this.setNewColor}>
      <input onChange={this.colorValue}
        ref={(e) => this._input=e}
        placeholder="Enter a color value"></input>
      <button type="submit">go</button>
    </form>
  </div>
  </div>
);
  }
}

export default App;
