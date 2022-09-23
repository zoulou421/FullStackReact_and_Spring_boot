import React, {Component} from 'react'
import {Link } from 'react-router-dom';

import EmployeeService from '../services/EmployeeService'

class CreateEmployeeComponent extends Component{
	constructor(props){
		super(props)

		this.state={
			id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId: ''
		}

		 this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
		 this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
		 this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);

		this.saveEmployee = this.saveEmployee.bind(this);
		//this.handleAdd = this.handleAdd.bind(this);
	}


//step3
componentDidMount(){
	if(this.state.id==-1){
		return
		//step4
	}else{
		EmployeeService.getEmployeeById(this.state.id).then((res)=>{
          let employee=  res.data;
          this.setState({
          	firstName: employee.firstName,
          	lastName: employee.lastName,
          	emailId: employee.emailId
          });
     	});
	 }
     	
  }
   


   /* saveEmployee =(e)=>{
    	 e.preventDefault();
    	 let employee = {firstName:this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
    	 console.log('employee => ' + JSON.stringify(employee));
		   
		    EmployeeService.createEmployee(employee).then(res=>{
             this.props.history.push("/employees");
    	    });
	      
    	 
       }*/

    saveEmployee =(e)=>{
    	 e.preventDefault();
    	 let employee = {firstName:this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
    	 console.log('employee => ' + JSON.stringify(employee));
		   
		    if(this.state.id==-1){
                 EmployeeService.createEmployee(employee).then(res=>{
                  this.props.history.push("/employees");
    	         });
		    }else{
               EmployeeService.updateEmployee(employee, this.state.id).then(res=>{
                this.props.history.push('/employees');
    	       });
		    }
	      
    	 
       }







    cancel(){
    	this.props.history.push('/employees');
    }

	changeFirstNameHandler= (event)=>{
       this.setState({firstName: event.target.value});
	}

	changeLastNameHandler= (event)=>{
       this.setState({lastName: event.target.value});
	}

	changeEmailIdHandler= (event)=>{
       this.setState({emailId: event.target.value});
	}




	/*handleAdd(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch("http://localhost:8080/api/v1/employees/?firstName="+this.state.firstName+"&lastName="+this.state.lastName+"&emailId="+this.state.emailId)
        
        .then( result => result.json())
        .then(result => {
            this.setState({
                firstName : '',
                lastName : '',
                emailId : ''
            });
            
            console.log("firstName " + this.state.firstName);
        });

    }*/







	render(){

		return(
         
            <div>
                <div className="container">
                   <div className="row">
                       <div className="card col-md-6 offset-md-3 offset-md-3">
                         <h3 className="text-center">Add Employee</h3>
                          <div className="card-body">
                          	<form  onSubmit={this.saveEmployee}>
                          		<div className="form-group">
                          			<label>First Name:</label>
                          			<input placeholder="First Name" name="firstName" 
                          			className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                          		</div>

                          		<div className="form-group">
                          			<label>Last Name:</label>
                          			<input placeholder="Last Name" name="lastName" 
                          			className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                          		</div>

                          		<div className="form-group">
                          			<label>Email Id:</label>
                          			<input placeholder="Email Id" name="emailId" 
                          			className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                          		</div>
                                
                                 
                          		 {/* <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>

                          		<Link className="btn btn-danger" to="/employees" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</Link>
                          	    */}

                          	      <div className="form-group">
                                     <input className="btn btn-success" type="submit" name="envoyer" id="envoyer" value="Envoyer"/>
                                     <Link className="btn btn-danger" to="/employees" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</Link>
                          	      </div>

                          	  </form>
                             </div>
                       </div>
                   </div>
                </div>
            </div>
		)
	}
}

export default CreateEmployeeComponent