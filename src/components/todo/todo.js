/* eslint-disable no-unused-vars */
import React, {useState, useEffect }from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import { Nav,Container } from 'react-bootstrap';
export default function ToDo(props){

  const [list, setList] = useState([]);

  const addItem = (item)=>{
    item._id = Math.random();
    item.complete = false;
    setList([...list,item]);

  };
  const toggleComplete = (id)=>{
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = list.map(listItem => listItem._id === item._id ?
        item : listItem);
      setList({list});
    }

  };


  useEffect(()=>{
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];
    setList(list);


  },[]);

  function NavDropdownExample() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
      <Nav id="navBar" variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
              Home
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  return(

    <>
      <header>
        <NavDropdownExample />

      </header>


      <Container>
        <h2 id="itemsheader">
          There are {` ${list.filter(item =>!item.complete).length} `} Items To Complete
        </h2>
      </Container>



      <Container className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </div>

      </Container>
    </>
  );

}
