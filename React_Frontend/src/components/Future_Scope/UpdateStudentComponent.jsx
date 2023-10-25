// import React, { Component } from 'react';
// import StudentService from '../services/StudentService';

// class UpdateStudentComponent extends Component {
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             id: this.props.match.params.id,
//             firstname:"",
//             lastname:'',
//             mail:'',
//             mobile:'',
//             roll:'',
//         };
//         this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
//         this.changelastNameHandler=this.changelastNameHandler.bind(this);
//         this.changeEmailidHandler=this.changeEmailidHandler.bind(this);
//         this.changeMobilenoeHandler=this.changeMobilenoeHandler.bind(this);
//         this.changeRollnoHandler=this.changeRollnoHandler.bind(this);
//         this.updateStudent=this.updateStudent.bind(this);
//         this.cancel=this.cancel.bind(this);
//         this.clearFields=this.clearFields.bind(this);
//     }
//     componentDidMount()
//     {
//         StudentService.getStudentsById(this.state.id).then ( (res) => {
//             let student=res.data;
//             this.setState({firstname:student.firstname,
//                 lastname:student.lastname,
//                 mail:student.mail,
//                 mobile:student.mobile,
//                 roll:student.roll,
//             })
//         });
//     }
    
//     updateStudent= (e) => {
//         e.preventDefault();
//         let student ={
//             firstname:this.state.firstname,
//             lastname:this.state.lastname,
//             mail:this.state.mail,
//             mobile:this.state.mobile,
//             roll:this.state.roll
//         };

//         console.log('student =>'+JSON.stringify(student));
//         // StudentService.updateStudents(student).then(res => {
//         //     this.props.history.push('/students');
//         // });
//         StudentService.updateStudent(student,this.state.id).then( (res) => {
//             this.props.history.push('/students');
//         })
//         .catch((error) => {
//             console.error("Error updating student:",error);
//         });
        
//     }
    
//     areAllFieldsFilled() {
//         const { firstname, lastname, mail, mobile, roll } = this.state;
//         return firstname && lastname && mail && mobile && roll;
//     }
//     cancel()
//     {
//         this.props.history.push('/students');
//     }
//     clearFields() {
//         this.setState({
//             firstname: "",
//             lastname: "",
//             mail: "",
//             mobile: "",
//             roll: "",
//         });
//     }
//     changeFirstNameHandler=(event )=>{
//         this.setState({firstname:event.target.value});
//     }
//     changelastNameHandler=(event )=>{
//         this.setState({lastname:event.target.value});
//     }
//     changeEmailidHandler=(event )=>{
//         this.setState({mail:event.target.value});
//     }
//     changeMobilenoeHandler=(event )=>{
//         this.setState({mobile:event.target.value});
//     }
//     changeRollnoHandler=(event )=>{
//         this.setState({roll:event.target.value});
//     }
    
//     render() {
//         return (
//             <div>
                
//                 <div className='create-student-container' >
//                     <div className='container'>
//                         <div className='card col-md-6 offset-md-3 offset-md-3'>
//                             <h3 className='text-center full-width'> Update Student</h3>
//                             <div className='card-body'>
//                             <form>
//                                 <div className='form-group'>
//                                 <label> First Name </label>
//                                 <input placeholder='First Name' name='firstname' className='form-control'
//                                 value={this.state.firstname} onChange={this.changeFirstNameHandler} required/>
//                                 </div>
//                                 <div className='form-group'>
//                                 <label> Last Name </label>
//                                 <input placeholder='Last Name' name='lastname' className='form-control'
//                                 value={this.state.lastname} onChange={this.changelastNameHandler} required/>
//                                 </div>
//                                 <div className='form-group'>
//                                     <label> Email id </label>
//                                     <input placeholder='Email id ' name ='mail' className='form-control'
//                                     value ={ this.state.mail} onChange={this.changeEmailidHandler} required/>
//                                 </div>
//                                 <div className='form-group'>
//                                     <label> Mobile Number </label>
//                                     <input placeholder='Mobile Number ' name ='mobile' className='form-control'
//                                     value ={ this.state.mobile} onChange={this.changeMobilenoeHandler} required/>
//                                 </div>
//                                 <div className='form-group'>
//                                     <label> University Roll no. </label>
//                                     <input placeholder='University Roll no.' name ='roll' className='form-control'
//                                     value ={ this.state.roll} onChange={this.changeRollnoHandler} required/>
//                                 </div>
                                
//                                 <button className='btn btn-danger' onClick={this.cancel} style={{marginLeft :"30px",marginTop:"10px"}}>Cancel</button>

//                                 <button className='btn btn-primary btn-hover-green ' onClick={this.updateStudent} disabled={!this.areAllFieldsFilled()} style={{ marginTop: '10px',marginLeft:"100px", alignItems: 'center' }} >Submit </button>

//                                 <button className='btn btn-warning' onClick={this.clearFields} style={{marginLeft :"120px",marginTop:"10px"}}>Clear</button>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         );
//     }
// }
// export default UpdateStudentComponent;