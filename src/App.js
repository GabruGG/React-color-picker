import React from "react";
import './App.css';

export class App extends React.Component{
  constructor(){
    super();
    this.state={
      color :"grey"
  }
}
upDateColor= (colorget)=>{
  this.setState({
    color:colorget
  });
};
  render(){
  return(
<>
<h1 style={{color:this.state.color}}>Hello Dear! </h1>
<div className="color-container">

  <div style={{backgroundColor:'red'}} className="changer" onClick={ ()=>{
  this.upDateColor("red")}}></div>

  <div style={{backgroundColor:'blue'}} className="changer" onClick={ ()=>{
  this.upDateColor("blue")}}></div>

  <div style={{backgroundColor:'orange'}} className="changer" onClick={ ()=>{
  this.upDateColor("orange")}}></div>

  <div style={{backgroundColor:'green'}} className="changer" onClick={ ()=>{
  this.upDateColor("green")}}></div>

  <div style={{backgroundColor:'pink'}} className="changer" onClick={ ()=>{
  this.upDateColor("pink")}}></div>

  <div style={{backgroundColor:'yellow'}} className="changer"onClick={ ()=>{
  this.upDateColor("yellow")}}></div>
  
  </div>
</>



  )
}
}
export default App;