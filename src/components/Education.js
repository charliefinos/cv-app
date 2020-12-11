import React, { useState } from 'react'
import { Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'

const Education = (props) => {

    const [state, setState] = useState({
        school: 'CEP n.7',
        title: 'Natural Science',
        initialYear: '2007',
        finalYear: '2012',
        formView: false
    })

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

        <>
            {state.formView ? (
                <Row>
                    <Col md={4}>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="form-group">
                                <Form.Label>School</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.school}
                                    onChange={(e) => setState({ ...state, school: e.target.value })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.title}
                                    onChange={(e) => setState({ ...state, title: e.target.value })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label>Initial Year</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.initialYear}
                                    onChange={(e) => setState({
                                        ...state, initialYear: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label>Final Year</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.finalYear}
                                    onChange={(e) => setState({
                                        ...state, finalYear: e.target.value
                                    })}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Button
                                    type="submit"
                                    variant="primary"
                                >Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            ) : (<Row>
                <Col className='mx-4 py-3' xs={4} md={6}>
                    <Card border="primary">
                        <Card.Header><h3>Education</h3></Card.Header>
                        <ListGroup className="text-left">
                            <ListGroup.Item>
                                <p>School: {state.school}</p>
                                <p>Title: {state.title}</p>
                                <p>Initial Year: {state.initialYear}</p>
                                <p>Final Year: {state.finalYear}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    variant="primary"
                                    type="btn btn-primary"
                                    onClick={toggleFormView}
                                >Edit</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>)}
        </>

    )
}
export default Education
