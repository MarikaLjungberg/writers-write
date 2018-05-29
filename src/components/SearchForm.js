import React from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

const SearchForm = () => (
  <Form inline>
    <FormGroup controlId="formInlineSearch">
      <FormControl type="search" placeholder="Search by topic!" />
    </FormGroup>{" "}
    <Button type="submit">Go!</Button>
  </Form>
);

export default SearchForm;