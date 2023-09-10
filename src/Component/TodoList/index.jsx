import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Item from '../Item'
import List from '../List'
import Footer from '../Footer'
import './index.css'

export default class TodoList extends Component {
  state = {
    todos: [
      {id: '0', name: '第一個', done: true},
      {id: '1', name: '第二個', done: false},
      {id: '2', name: '第三個', done: false},
    ],
  }
  static propTypes = {
    
    updateTodo: PropTypes.array,
  }

  addTodo = (todoObj)=>{
    const {todos} = this.state;
    const new_todo = [todoObj, ...todos];
    this.setState({todos: new_todo});
    
  }
  updateTodo = (id, done)=>{
    const {todos} = this.state;
    const new_todos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({todos: new_todos})
  }
  deleteTodo = (id)=>{
    const {todos} = this.state;
    const new_todos = todos.filter((todoObj)=>todoObj.id !== id)
    this.setState({todos: new_todos})
  }

  toggleAllTodo = (flag)=>{
    const {todos} = this.state;
    const new_todos = todos.map((todoObj)=>{
      todoObj.done = flag;
      return todoObj
    })
    this.setState({todos: new_todos})
  }
  clearAllDone = ()=>{
    const {todos} = this.state
    const new_todos = todos.filter((todoObj)=>{return !todoObj.done})
    this.setState({todos:new_todos})
  }

  render() {
    return (
      <div className='todo_container'>
        <Header addTodo={this.addTodo}></Header>
        <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
        <Footer todos={this.state.todos} toggleAllTodo={this.toggleAllTodo} clearAllDone={this.clearAllDone}></Footer>
      </div>
    )
  }
}
