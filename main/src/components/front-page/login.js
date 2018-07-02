import React from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    if(email.length > 0 && password.length > 0) {
      this.props.socket.emit('login', email, password)
    }
    event.target.email.value = "";
    event.target.password.value = "";
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader>Modal title</ModalHeader>
          
          <Form onSubmit={this.handleSubmit} >
            <ModalBody>
                <Label for="email">Username:</Label>
                <Input type="text" name="email" placeholder="Email" />
                <Label for="password">Password:</Label>
                <Input type="text" name="password" placeholder="Password" />
            </ModalBody>
            <ModalFooter>
              <Button type="submit">Login</Button>
            </ModalFooter>
          </Form>

        </Modal>
      </div>
    );
  }
}

export default Login;