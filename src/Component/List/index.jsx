import React, { Component } from 'react'

import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos, updateTodo, deleteTodo} = this.props;
    return (  
      <ul className='todo_list'>
        {
          todos.map((todo)=>{
            return <Item {...todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo}></Item>
          })
        }
      </ul>
    )
  }
}
