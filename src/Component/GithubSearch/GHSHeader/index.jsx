
import React, { Component } from 'react'

export default class GHSHeader extends Component {

  state = {
    keyword: '',
  }
  updateKeyword = (e)=>{
    const {keyword} = this.state
    const new_keword = e.target.value
    if(new_keword===keyword) return
    this.setState({keyword:new_keword})
  }
  search = ()=>{
    const {keyword} = this.state
    if(keyword!=='') this.props.startSearch(keyword)
  }

  render() {
    return (
      <div className='ghs-header'>
        <h2>Search GitHub User</h2>
        <input type='text' placeholder='enter the name you search' onChange={this.updateKeyword}></input>
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}
