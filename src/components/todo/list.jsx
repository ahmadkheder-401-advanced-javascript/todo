/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ListGroup from 'react-bootstrap/ListGroup';

function TodoList(props) {
  return (

    <ListGroup>
      {
        props.list.map(item => (
          <ListGroup.Item className='mb-3' variant=''
            key={item._id}
          >
            <Container>
              <Row >
                <Col xs={1}>
                  <Button size='sm' onClick={() => props.handleComplete(item._id)} pill variant={item.complete ? 'danger' : 'success'}> {item.complete ? <span> Complete</span> : <span>Pending</span>} </Button>
                </Col>

                <Col xs={{ span: 1, offset: 10 }}>
                  <Button size='sm' onClick={() => props.handleDelete(item._id)} ><span> X </span></Button>
                </Col>
              </Row>
              <hr />
              <Row className='pb-1 pt-1'>
                <Col >
                  <span >
                    {item.text}
                  </span>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={{ span: 4, offset: 10 }} >
                  <span >
                    Difficulty: {item.difficulty}
                  </span>
                </Col>
              </Row>

            </Container>



          </ListGroup.Item>
        ))
      }
    </ListGroup >
  );
}

export default TodoList;
