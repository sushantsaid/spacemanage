import React,{Component} from 'react';
import axios from 'axios';
class ApplicationForm extends Component{

    state={
        name : '',
        phone : '',
        company_name : '',
        designation : '',
        room : '',
        purpose : '',
        date : new Date(),
        time_in : '',
        time_out : ''
    };

    handleChange = ({target}) =>{
        const {name,value} = target;
        this.setState({[name] : value});
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        const payload={
            name : this.state.name,
            phone : this.state.phone,
            company_name : this.state.company_name,
            designation : this.state.designation,
            room : this.state.room,
            purpose : this.state.purpose,
            date : this.state.date,
            time_in : this.state.time_in,
            time_out : this.state.time_out
        }

        console.log("Payload : "+JSON.stringify(payload));

        axios.post('/space/save',payload)
        .then(response=>{
            console.log(response.data.message);
            })
            .catch(error=>{
                console.log("POST application",error.message);
                alert("Couldn't send your application : "+error.message);})
/*
        axios({
            url : '/space/save',
            method : 'POST',
            body : {title:'hello',body:'world'}
        })
        .then(response=>{
        console.log(response.data.message);
        })
        .catch(error=>{
            console.log("POST application",error.message);
            alert("Couldn't send your application : "+error.message);})
*/
        };

    render(){

        return(
            <center>
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name : <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    Contact No : <input type="phone" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange}/><br/>
                    Company Name : <input type="text" name="company_name" placeholder="company_name" value={this.state.company_name} onChange={this.handleChange}/><br/>
                    Designation : <input type="text" name="designation" placeholder="designation" value={this.state.designation} onChange={this.handleChange}/><br/>
                    Room : 
                    <select onChange={this.handleChange}>
                        <option>Event space</option>
                        <option>Podcast</option>
                    </select><br/>
                    Purpose : <textarea type="textarea" name="purpose" placeholder="Purpose of applying..." value={this.state.purpose} onChange={this.handleChange}/><br/>
                    Date : <input type="date" selected={this.state.date} onChange={this.handleChange}/><br/>
                    Time In : <input type="time" name="time_in" value={this.state.time_in} onChange={this.handleChange}/><br/>
                    Time Out : <input type="time" name="time_out" value={this.state.time_out} onChange={this.handleChange}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            </center>
        );
    }
}

export default ApplicationForm;