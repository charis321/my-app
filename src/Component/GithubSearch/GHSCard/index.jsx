import React, { Component } from 'react'

export default class GHSCard extends Component {
  render() {
    const {user} = this.props
    return (
      <li className='ghs-card'>
        <img src={user.img} style={{width:'100%'}} alt={user.name}/>
        <p>id: {user.id}</p>
        <p>name: {user.name}</p>
      </li>
    )
  }
}
