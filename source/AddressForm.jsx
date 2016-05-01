var React = require('react');
var React = require('./AddressBook.jsx');

var AddressForm = React.createClass({
    getInitialState: function () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            number: ""
        }
    },
    changeFirstName: function (evt) {
        this.setState({
            firstName:evt.target.value
        })
    },
    changeLastName: function (evt) {
        this.setState({
            lastName:evt.target.value
        })
    },
    changeEmail: function (evt) {
        this.setState({
            email:evt.target.value
        })
    },
    changeNumber: function (evt) {
        this.setState({
            number:evt.target.value
        })
    },
    
   handleSubmit: function (evt) {
        this.props.addPerson(this.state.firstName, this.state.lastName, this.state.email, this.state.number);
    },

    render: function (){
        return(
            <div>
            <label>First Name </label>
             <input 
               type="text" 
               value={this.state.firstname}
               onChange = {this.changeFirstName} />
            <br />
            <label>Last Name</label>
             <input 
                type="text" 
                value={this.state.lastname}
                onChange = {this.changeLastName} />
            <br />
            <label>Email </label>
                 <input 
               type="text" 
               value={this.state.email}
               onChange = {this.changeEmail} />
            <br />
            <label>Phone </label>
             <input 
               type="tel" 
               value={this.state.phone}
               onChange = {this.changePhone} />
               <br />
               <button onClick = {this.submit}>Save</button>
        </div>
        )
    }  
});

module.exports = AddressForm;