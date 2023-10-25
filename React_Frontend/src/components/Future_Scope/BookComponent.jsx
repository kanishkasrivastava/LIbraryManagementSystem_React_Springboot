import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class BookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            standard: "",
            subject: '',
            authorname: '',
            issuedate: '',
            returndate: '',
            bookissued: '',
        };
        this.cancel=this.cancel.bind(this);
        this.clearFields=this.clearFields.bind(this);
    }

    componentDidMount() {
        // const id = this.props.match.params.id;

        if (this.state.id === '_add') {
            return; 
        } else {
            StudentService.getStudentsById(this.state.id).then((res) => {
                let student = res.data;
                this.setState({
                    standard: student.standard,
                    subject: student.subject,
                    authorname: student.authorname,
                    issuedate: student.issuedate,
                    returndate: student.returndate,
                    bookissued: student.bookissued,
                });
            });
        }
    }

    saveStudent = (e) => {
        e.preventDefault();
        let student = {
            standard: this.state.standard,
            subject: this.state.subject,
            authorname: this.state.authorname,
            issuedate: this.state.issuedate,
            returndate: this.state.returndate,
            bookissued: this.state.bookissued
        };

        console.log('student =>' + JSON.stringify(student));
        StudentService.createStudents(student).then(res => {
            this.props.history.push("/students");
        })
        .catch((error) => {
            console.error("Error adding books",error);
        });
    }

    areAllFieldsFilled() {
        const { standard, subject, authorname, issuedate, returndate, bookissued } = this.state;
        return standard && subject && authorname && issuedate && returndate && bookissued;
    }

    cancel = () => {
        this.props.history.push('/students');
    }

    clearFields = () => {
        this.setState({
            standard: "",
            subject: '',
            authorname: '',
            issuedate: '',
            returndate: '',
            bookissued: '',
        });
    }

    changestandardHandler = (event) => {
        this.setState({ standard: event.target.value });
    }

    changesubjectHandler = (event) => {
        this.setState({ subject: event.target.value });
    }

    changeauthornameHandler = (event) => {
        this.setState({ authorname: event.target.value });
    }

    changeissuedateHandler = (event) => {
        this.setState({ issuedate: event.target.value });
    }

    changereTurndateHandler = (event) => {
        this.setState({ returndate: event.target.value });
    }

    changebookissuedHandler = (event) => {
        this.setState({ bookissued: event.target.value });
    }

    render() {
        return (
            <div>
                <div className='create-book-container'>
                    <div className='container'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center full-width'> Add Book</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> Standard </label>
                                        <input
                                            placeholder='Standard'
                                            name='standard'
                                            className='form-control'
                                            value={this.state.standard}
                                            onChange={this.changestandardHandler}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label> Subject </label>
                                        <input
                                            placeholder='Subject'
                                            name='subject'
                                            className='form-control'
                                            value={this.state.subject}
                                            onChange={this.changesubjectHandler}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label> Author Name </label>
                                        <input
                                            placeholder='Author Name'
                                            name='authorname'
                                            className='form-control'
                                            value={this.state.authorname}
                                            onChange={this.changeauthornameHandler}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label> Issue Date </label>
                                        <input
                                            placeholder='Issue Date'
                                            name='issuedate'
                                            className='form-control'
                                            value={this.state.issuedate}
                                            onChange={this.changeissuedateHandler}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label> Return Date </label>
                                        <input
                                            placeholder='Return Date'
                                            name='returndate'
                                            className='form-control'
                                            value={this.state.returndate}
                                            onChange={this.changereTurndateHandler}
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label> Book Issued </label>
                                        <input
                                            placeholder='Book Issued'
                                            name='bookissued'
                                            className='form-control'
                                            value={this.state.bookissued}
                                            onChange={this.changebookissuedHandler}
                                            required
                                        />
                                    </div>

                                    <button className='btn btn-danger' onClick={this.cancel} style={{ marginLeft: "30px", marginTop: "10px" }}>Cancel</button>

                                    <button className='btn btn-primary btn-hover-green' onClick={this.saveStudent} disabled={!this.areAllFieldsFilled()} style={{ marginTop: '10px', marginLeft: "100px", alignItems: 'center' }}>Submit</button>

                                    <button className='btn btn-warning' onClick={this.clearFields} style={{ marginLeft: "120px", marginTop: "10px" }}>Clear</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookComponent;
