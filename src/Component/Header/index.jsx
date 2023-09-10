import React, { Component } from 'react'

import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  
  handleKeyUp = (e)=>{
    const {keyCode, target} = e
    if( keyCode !== 13 ) return
    const new_todoObj = {id:nanoid(), name:target.value, done: false}
    this.props.addTodo(new_todoObj)
    target.value = ''
  }

  render() {
    return (
        <div className='todo_addItem'>
           <input onKeyUp={this.handleKeyUp} type='text'placeholder='請輸入'></input> 
        </div>
    )
  }
}
