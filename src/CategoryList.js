import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'   

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Category List</h3>
        <ListGroup >
  <ListGroupItem  href="/Python/" tag="a">
    Python
  </ListGroupItem>
  <ListGroupItem  href="/C++/" tag="a">
    C++
  </ListGroupItem>
  <ListGroupItem  href="/Java/" tag="a">
    Java
  </ListGroupItem>
  <ListGroupItem  href="/Assembly/" tag="a">
    Assebmly
  </ListGroupItem>
  <ListGroupItem  href="/C#/" tag="a">
    C#
  </ListGroupItem>
</ListGroup>
      </div>
    )
  }
}
