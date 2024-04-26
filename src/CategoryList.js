import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'    

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Category List</h3>
        <ListGroup >
  <ListGroupItem  href="/Python/" tag="a">
  <Button
    block
    color="info"
    outline
    size="lg"
  >
    Python
  </Button>
  </ListGroupItem>
  <ListGroupItem  href="/C++/" tag="a">
  <Button
    block
    color="info"
    outline
    size="lg"
  >
    C++
  </Button>
  </ListGroupItem>
  <ListGroupItem  href="/Java/" tag="a">
  <Button
    block
    color="info"
    outline
    size="lg"
  >
    Java
  </Button>
  </ListGroupItem>
  <ListGroupItem  href="/Assembly/" tag="a">
  <Button
    block
    color="info"
    outline
    size="lg"
  >
    Assembly
  </Button>
  </ListGroupItem>
  <ListGroupItem  href="/C#/" tag="a">
  <Button
    block
    color="info"
    outline
    size="lg"
  >
    C#
  </Button>
  </ListGroupItem>
</ListGroup>
      </div>
    )
  }
}
