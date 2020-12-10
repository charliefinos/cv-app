import React, { Component } from 'react'
import { Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: 'El Maestro',
            positionTitle: 'Customer Service',
            mainTask: 'Front Desk',
            from: '',
            to: ''
        };

        this.handleCompanyName = this.handleCompanyName.bind(this)
        this.handlePosition = this.handlePosition.bind(this)
        this.handleTask = this.handleTask.bind(this)
        this.handleFrom = this.handleFrom.bind(this)
        this.handleTo = this.handleTo.bind(this)
        this.toggleFormView = this.toggleFormView.bind(this)
    }

    handleCompanyName(e) {
        this.setState({
            companyName: e.target.value,
        })
    }

    handlePosition(e) {
        this.setState({
            positionTitle: e.target.value
        })
    }

    handleTask(e) {
        this.setState({
            mainTask: e.target.value
        })
    }

    handleFrom(e) {
        this.setState({
            from: e.target.value
        })
    }

    handleTo(e) {
        this.setState({
            to: e.target.value
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
                            <h2>Practial Experience</h2>
                            <Form >

                                <Form.Group className="form-group">
                                    <Form.Label >Company Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.companyName}
                                        onChange={this.handleCompanyName}>
                                    </Form.Control>
                                    <Form.Text>Enter Name</Form.Text>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label >Position Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.positionTitle}
                                        onChange={this.handlePosition}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label >Main Tasks</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.mainTask}
                                        onChange={this.handleTask}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label >From:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.from}
                                        onChange={this.handleFrom}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label >To</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={this.state.to}
                                        onChange={this.handleTo}>
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
                                <Card.Header><h3>Practical experience</h3> </Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <p>Company Name: {this.state.companyName}</p>
                                        <p>Position Title: {this.state.positionTitle}</p>
                                        <p>Main Tasks: {this.state.mainTask}</p>
                                        <p>From: {this.state.from}</p>
                                        <p>To: {this.state.to}</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <button className='btn btn-primary' onClick={this.toggleFormView}>Edit</button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        }
    }
}

export default Experience
