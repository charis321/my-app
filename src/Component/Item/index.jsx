import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    isHover: false
  }

  handleMouse = (flag)=>{
    return ()=>{
      this.setState({isHover: flag})
    }      
  }
  handleCheck = (id)=>{
    return (e)=>{
      this.props.updateTodo(id, e.target.checked)
    }
  }
  handleDelete = (id)=>{
    return ()=>{
      if(window.confirm("確定要刪除嗎?"))
      this.props.deleteTodo(id)
    }
  }


  render() {
    const {id, name, done} = this.props;
    return (
      <li className='todo_item'
          style={{backgroundColor: this.state.isHover? "#ddd":"#eee"}} 
          onMouseEnter={this.handleMouse(true)} 
          onMouseLeave={this.handleMouse(false)}>
        <label>
            <input type='checkbox' checked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
        </label> 
        <button className='btn-danger' 
                style={{display: this.state.isHover?'flex':'none'}} 
                onClick = {this.handleDelete(id)}>
                刪除
        </button>
      </li>
    )
  }
}
