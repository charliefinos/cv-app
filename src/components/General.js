import React, { useState } from 'react'
import { Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'

const General = (props) => {

    const [state, setState] = useState({
        name: "John Doe",
        phone: "222-555-111",
        email: "john@doe.com",
        github: "https://github.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        formView: false,
    });

    const toggleFormView = (e) => {
        setState({
            ...state,
            formView: !state.formView
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setState({
            ...state,
            formView: !state.formView
        })
    }

    return (
        <div>
            {state.formView ? (
                <Row>
                    <Col md={4}>
                        <h2>Personal Information</h2>
                        <Form onSubmit={submitHandler} >

                            <Form.Group className="form-group">
                                <Form.Label >Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.name}
                                    onChange={(e) => setState({
                                        ...state, name: e.target.value
                                    })}>
                                </Form.Control>
                                <Form.Text>Enter Name</Form.Text>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label >Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.email}
                                    onChange={(e) => setState({
                                        ...state, email: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label >Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.phone}
                                    onChange={(e) => setState({
                                        ...state, phone: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label >Github</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.github}
                                    onChange={(e) => setState({
                                        ...state, github: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label >Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.linkedin}
                                    onChange={(e) => setState({
                                        ...state, linkedin: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Button
                                    onClick={toggleFormView}
                                    type="submit"
                                    variant="primary"
                                >Save
                        </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            ) : (
                    <Row>
                        <Col md={6}>
                            <Card border="primary">
                                <Card.Header><h3>Personal Information</h3> </Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <p>Name: {state.name}</p>
                                        <p>Email: {state.email}</p>
                                        <p>Phone: {state.phone}</p>
                                        <p>Github: <a href={state.github}>{state.github}</a></p>
                                        <p>Linkedin: <a href={state.linkedin}>{state.linkedin}</a></p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <button className='btn btn-primary' onClick={toggleFormView}>Edit</button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>)}
        </div>

    )
}

export default General
