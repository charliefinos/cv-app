import React, { Component } from 'react'

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
                <div className="container">
                    <div>
                        <h3>School: {this.state.school}</h3>
                        <h3>Title: {this.state.title}</h3>
                        <h3>Initial Year: {this.state.initialYear}</h3>
                        <h3>Final Year: {this.state.finalYear}</h3>
                    </div>
                    <div>
                        <button
                            type="btn btn-primary"
                            onClick={this.toggleFormView}
                        >Edit</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <form>
                        <div>
                            <label>School</label>
                            <input
                                type="text"
                                value={this.state.school}
                                onChange={this.handleSchool}>
                            </input>
                        </div>

                        <div>
                            <label>Title</label>
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={this.handleTitle}>
                            </input>
                        </div>

                        <div>
                            <label>School</label>
                            <input
                                type="text"
                                value={this.state.initialYear}
                                onChange={this.handleInitialYear}>
                            </input>
                        </div>

                        <div>
                            <label>School</label>
                            <input
                                type="text"
                                value={this.state.finalYear}
                                onChange={this.handleFinalYear}>
                            </input>
                        </div>

                        <div>
                            <button
                                onClick={this.toggleFormView}
                            >Save</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Education
