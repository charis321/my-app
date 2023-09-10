import React, { Component } from 'react'
import GHSHeader from './GHSHeader'
import GHSList from './GHSList'
import './index.css'
import axios from 'axios'


export default class Github_Search extends Component {

  state = {
    users:[
      {id: 0, name: 'sam', img: ''},
      {id: 1, name: 'sim', img: ''},
      {id: 2, name: 'sum', img: ''},
      {id: 3, name: 'som', img: ''},
      {id: 4, name: 'sam', img: ''},
      {id: 5, name: 'sim', img: ''},
      {id: 6, name: 'sum', img: ''},
      {id: 7, name: 'som', img: ''},
      {id: 8, name: 'sam', img: ''},
      {id: 9, name: 'sim', img: ''},
      {id: 10, name: 'sum', img: ''},
      {id: 11, name: 'som', img: ''},
    ]
  }
  startSearch = (keyword)=>{
    console.log(`finding ${keyword}!`)
    const base_url = `https://api.github.com/search/users?q=${keyword}`
    axios.get(base_url).then(
      response=>{
        console.log("請求成功",response.data.items)
        this.updateUsers(response.data.items)
      },
      error=>{
        console.log(error)
      }
    )
  }
  updateUsers=(data)=>{
    const new_users = data.map(user=>{
      return {
        id: user.id,
        name: user.login,
        img: user.avatar_url
      }
    })
    this.setState({users: new_users})
  }

  render() {
    return (
        <div className='ghs-container'>
            <GHSHeader startSearch={this.startSearch}></GHSHeader>
            <GHSList users={this.state.users}></GHSList>
        </div>
    )
  }
}
