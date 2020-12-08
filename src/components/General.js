import React, { Component } from 'react'

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

    toggleFormView(e) {
        this.setState({
            formView: !this.state.formView
        })
    }

    render() {
        {
            if (this.state.formView === true) {
                return (
                    <div className="col-6 mx-auto mt-5">
                        <form >

                            <div className="form-group">
                                <label >Name</label>
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleName}>
                                </input>
                            </div>

                            <div className="form-group">
                                <label >Email</label>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleEmail}>
                                </input>
                            </div>

                            <div className="form-group">
                                <label >Phone</label>
                                <input
                                    type="text"
                                    value={this.state.phone}
                                    onChange={this.handlePhone}>
                                </input>
                            </div>

                            <div className="form-group">
                                <button
                                    onClick={this.toggleFormView}
                                    type="submit"
                                    className="btn btn-primary"
                                >Save
                                </button>
                            </div>
                        </form>
                    </div>
                )
            } else {
                return (
                    <div className="container-fluid">
                        <h2>{this.state.name}</h2>
                        <h2>{this.state.email}</h2>
                        <h2>{this.state.phone}</h2>
                        <a href={this.state.github}>{this.state.github}</a>
                        <button className='btn btn-primary' onClick={this.toggleFormView}>Edit</button>
                    </div>
                )
            }
        }
    }
}

export default General
