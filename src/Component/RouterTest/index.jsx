import React, { Component } from 'react'
import {NavLink, Route} from 'react-router-dom'
import About from "../../pages/About"
import Home from "../../pages/Home"

export default class RounterTest extends Component {
  render() {
    return (
      <div>
        <div className='row'>
            <div className='offset-2 col-8'>
                <h1>React Router Test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-2 offset-2'>
                <div className='list-group'>
                    <NavLink className="router-link list-group-item" to="/a/about">About</NavLink>
                    <NavLink className="router-link list-group-item" to="/a/home">Home</NavLink>
                </div>
                
            </div>
            <div className='col-6'>
                <div className='card'>
                    <div className='card-body'>
                        <Route path="/a/about" component={About}/>
                        <Route path="/a/home" component={Home}/>
                    </div>
                </div>
                
            </div>
        </div>
        
      </div>
    )
  }
}
