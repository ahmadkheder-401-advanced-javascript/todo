/* eslint-disable no-unused-vars */
import React, { useEffect, useState ,useContext} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Navbar, Container, Pagination, Button } from 'react-bootstrap';
import { SiteContext } from '../../context/settings/context';
import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const settingContext = useContext(SiteContext);
  const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((savedItem) => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  const _toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((savedItem) => {
          setList(
            list.map((listItem) =>
              listItem._id === item._id ? savedItem : listItem,
            ),
          );
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then((data) => data.json())
      .then((data) => _sortTasks(data.results))
      .catch(console.error);
  };
  const _sortTasks = (data) => {
    let sorted = data.sort((a, b) => b.difficulty - a.difficulty);
    setList(sorted);
  };
  useEffect(_getTodoItems, []);

  const indexOfLastTask = currentPage * settingContext.items;
  const indexOfFirstTask = indexOfLastTask - settingContext.items;
  const currentItems = list.slice(indexOfFirstTask, indexOfLastTask);
  let items = [];
  for (let i = 1; i <= Math.ceil(list.length / settingContext.items); i++) {
    items.push(
      <Pagination.Item
        key={i}
        onClick={(e) => setCurrentPage(e.target.textContent)}
      >
        <Button>{i}</Button>
      </Pagination.Item>,
    );
  }

  return (
    <>
      <Container>
        <Navbar className="counterNav" bg="dark" variant="dark">
          <h2>
            There are {list.filter((item) => !item.complete).length} Items To
            Complete
          </h2>
          <Button onClick={_sortTasks}>Sort by difficulty</Button>
        </Navbar>

        <section className="todo">
          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>

          <div className="TodoList">
            <TodoList list={currentItems} handleComplete={_toggleComplete} />
          </div>
        </section>
      </Container>

      <Pagination>
        <Pagination.Prev />
        {items}
        <Pagination.Next />
      </Pagination>
    </>
  );
};

export default ToDo;
