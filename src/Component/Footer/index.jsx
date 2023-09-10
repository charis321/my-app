import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleSelectAll = (e)=>{
    this.props.toggleAllTodo(e.target.checked)
  }
  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props;
    const doneCount = todos.reduce((sum, curr)=> sum + (curr.done? 1 : 0), 0)
 
    return (
      <div className='todo_footer'>
        <label>
            <input type='checkbox' onChange={this.handleSelectAll}/>
            <span style={{marginLeft: '10px'}}>已完成 {doneCount} / 全部 {todos.length} </span>
        </label>
        <button className='btn-danger' onClick={this.handleClearAllDone}>清除全部已完成任務</button>
      </div>
    )
  }
}
