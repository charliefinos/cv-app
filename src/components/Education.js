import React, { Component } from 'react'
import { Form, Button, Row, Col, Container, Card, ListGroup } from 'react-bootstrap'

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            school: 'CEP n.7',
            title: 'Natural Science',
            initialYear: '2007',
            finalYear: '2012',
            formView: false
        }
        this.handleSchool = this.handleSchool.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.handleInitialYear = this.handleInitialYear.bind(this)
        this.handleFinalYear = this.handleFinalYear.bind(this)
        this.toggleFormView = this.toggleFormView.bind(this)
    }

    handleSchool(e) {
        this.setState({
            school: e.target.value
        })
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleInitialYear(e) {
        this.setState({
            initialYear: e.target.value
        })
    }

    handleFinalYear(e) {
        this.setState({
            finalYear: e.target.value
        })
    }

    toggleFormView(e) {
        this.setState({
            formView: !this.state.formView
        })
    }

    render() {
        if (this.state.formView === false) {
            return (
                <Row>
                    <Col md={6}>
                        <Card border="primary">
                            <Card.Header><h3>Education</h3></Card.Header>
                            <ListGroup className="text-left">
                                <ListGroup.Item>
                                    <p>School: {this.state.school}</p>
                                    <p>Title: {this.state.title}</p>
                                    <p>Initial Year: {this.state.initialYear}</p>
                                    <p>Final Year: {this.state.finalYear}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button
                                        variant="primary"
                                        type="btn btn-primary"
                                        onClick={this.toggleFormView}
                                    >Edit</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row>
                    <Col md={4}>
                        <Form>
                            <Form.Group className="form-group">
                                <Form.Label>School</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.school}
                                    onChange={this.handleSchool}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.handleTitle}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label>Initial Year</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.initialYear}
                                    onChange={this.handleInitialYear}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="form-group">
                                <Form.Label>Final Year</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.finalYear}
                                    onChange={this.handleFinalYear}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={this.toggleFormView}
                                >Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            )
        }
    }
}

export default Education
