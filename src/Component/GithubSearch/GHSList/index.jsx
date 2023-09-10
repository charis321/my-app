import React, { Component } from 'react'
import GHSCard from '../GHSCard'

export default class GHSList extends Component {
  render() {
    const {users} = this.props
    return (
      <ul className='ghs-list'>
        {
          users.map((userData)=>{
            return <GHSCard user={userData} key={userData.id}></GHSCard>
          })   
        }  
      </ul>
         
    )
  }
}
