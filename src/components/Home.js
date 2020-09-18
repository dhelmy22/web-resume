import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import PropTypes from "prop-types";

const Home = (props) => {

// const handleSubmit =(e)=>{
//    e.preventDefault();
//    fetch("https://formspree.io/mpzyddpj",{
//        method: 'POST',
//        body: 'application/json'
//    })

// }

  return (
    <>
      <h1>Welcome and have a wonderful day!</h1>
      <h3>Dan Helmkamp</h3>
      <h4>(260) 357-9649</h4>

<Form action="https://formspree.io/mpzyddpj" method="POST">
      <FormGroup>
        <Label for="exampleText" ></Label>
        <Input type="textarea" name="text" id="exampleText" placeholder='Insert message here'/>
      </FormGroup>
      <Button type='submit' >Email Me</Button>
      </Form>

    </>
  );
};

export default Home;

