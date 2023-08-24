import './App.css';
import React from 'react';
import PropTypes from 'prop-types';



class PlayGround extends React.Component{
  
  state = {
    time : new Date()
  }
  
  startTimeCounter = ()=>{
    console.log("start time")
    clearInterval(this.timeCounter);
    this.timeCounter = setInterval(()=>{
      this.setState(
        {
          time: new Date()
        }
      )
    },1000)
  }
  stopTimeCounter = ()=>{
    console.log(this.timeCounter)
    clearInterval(this.timeCounter);
  }

  componentDidMount(){
    this.startTimeCounter();
  }

  render(){
    //console.log(this);
    const {x , y} = this.props;
    return (
      <div>
        <h1>x: {x}, y: {y}</h1>
        <h2>It's {this.state.time.toTimeString()}</h2>
        <button onClick={this.startTimeCounter}>start time</button>
        <button onClick={this.stopTimeCounter}>stop time</button>
        <div id='playground' onMouseDown={this.getMouseDown}></div>
      </div> 
    )
  }
  
  getMouseDown = (e) => {
      const event = e.nativeEvent; 
      this.setState({
        x: event.offsetX,
        y: event.offsetY
      })
  }
}
PlayGround.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string
}
PlayGround.defaultProps = {
  x: '0',
  y: '0'
}

class Position extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      x : 0,
      y : 0
    }
  }
  render(){
    console.log(this);
    return (  
      <h1>x: {this.state.x} , y: {this.state.y}</h1>
    )
  }
}

function App() {
  return (
    <div className="App">
      <div className='Logo'>LOGO</div>
      
      <PlayGround x='201' y='213'></PlayGround>
    </div>
  );
}

export default App;
