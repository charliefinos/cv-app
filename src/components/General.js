import React, { Component } from 'react'
import { Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'
class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "John Doe",
            phone: "222-555-111",
            email: "john@doe.com",
            github: "https://github.com/johndoe",
            linkedin: "https://www.linkedin.com/in/johndoe",
            formView: false,
        };

        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleGit = this.handleGit.bind(this)
        this.handleLinkedin = this.handleLinkedin.bind(this)
        this.toggleFormView = this.toggleFormView.bind(this)
    }

    handleName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    handleGit(e) {
        this.setState({
            github: e.target.value
        })
    }

    handleLinkedin(e) {
        this.setState({
            linkedin: e.target.value
        })
    }

    toggleFormView(e) {
        this.setState({
            formView: !this.state.formView
        })
    }

    render() {
        {
            if (this.state.formView === true) {
                return (
                    <Row>
                        <Col md={4}>
                            <h2>Personal Information</h2>
                            <Form >

                                <Form.Group className="form-group">
                                    <Form.Label >Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.handleName}>
                                    </Form.Control>
                                    <Form.Text>Enter Name</Form.Text>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label >Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.handleEmail}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label >Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.phone}
                                        onChange={this.handlePhone}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label >Github</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.github}
                                        onChange={this.handleGit}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label >Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.linkedin}
                                        onChange={this.handleLinkedin}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Button
                                        onClick={this.toggleFormView}
                                        type="submit"
                                        variant="primary"
                                    >Save
                                </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                )
            } else {
                return (
                    <Row>
                        <Col md={6}>
                            <Card border="primary">
                                <Card.Header><h3>Personal Information</h3> </Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <p>Name: {this.state.name}</p>
                                        <p>Email: {this.state.email}</p>
                                        <p>Phone: {this.state.phone}</p>
                                        <p>Github: <a href={this.state.github}>{this.state.github}</a></p>
                                        <p>Linkedin: <a href={this.state.linkedin}>{this.state.linkedin}</a></p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <button className='btn btn-primary' onClick={this.toggleFormView}>Edit</button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row >
                )
            }
        }
    }
}

export default General
