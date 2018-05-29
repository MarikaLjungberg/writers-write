import React from 'react';
import {Grid, ListGroup, ListGroupItem} from 'react-bootstrap';

class SearchResults extends React.Component {
  render() {
    return (
      <Grid>
      <h2>Search Results</h2>
      <ListGroup>
        <ListGroupItem href="#" active>Link 1</ListGroupItem>
        <ListGroupItem href="#">Link 2</ListGroupItem>
        <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
      </ListGroup>
    </Grid>
    );
  }
}

export default SearchResults;