import React, { useState, setState } from 'react'
import { Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'

const Experience = (props) => {

    const [state, setState] = useState({
        companyName: 'El Maestro',
        positionTitle: 'Customer Service',
        mainTask: 'Front Desk',
        from: '',
        to: '',
        formView: false,
    });



    const submitHandler = (e) => {
        e.preventDefault()
        setState({
            ...state,
            formView: !state.formView
        })
    }

    const toggleFormView = (e) => {
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
                        <h2>Practial Experience</h2>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="form-group">
                                <Form.Label >Company Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.companyName}
                                    onChange={(e) => setState({
                                        ...state,
                                        companyName: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label >Position Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.positionTitle}
                                    onChange={(e) => setState({
                                        ...state,
                                        positionTitle: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label >Main Tasks</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.mainTask}
                                    onChange={(e) => setState({
                                        ...state,
                                        mainTask: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label >From:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.from}
                                    onChange={(e) => setState({
                                        ...state,
                                        from: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label >To</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.to}
                                    onChange={(e) => setState({
                                        ...state,
                                        to: e.target.value
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
                                <Card.Header><h3>Practical experience</h3> </Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <p>Company Name: {state.companyName}</p>
                                        <p>Position Title: {state.positionTitle}</p>
                                        <p>Main Tasks: {state.mainTask}</p>
                                        <p>From: {state.from}</p>
                                        <p>To: {state.to}</p>
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

export default Experience
