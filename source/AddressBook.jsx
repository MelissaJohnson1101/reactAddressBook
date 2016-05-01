var React = require ('react');
var AddressForm = require("./AddressForm.jsx")
var Person = require ("./person.jsx")

function PersonRecord(firstname, lastname, email, number){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.number = number;
};
    
var AddressBook = React.createClass({
    getInitialState: function() {
        return {
            people:[],
            businesses: []
        }
    },
    
addPerson: function (firstName, lastName, email, number){
        var newPerson = this.state.people;
        newPerson.push(new PersonRecord(firstName, lastName, email, number));
        this.setState({
        people: newPerson, 
        });
    },
    
    render: function(){
        var peopleHTML = [];
            for (var i = 0; i < this.state.people.length; i++){ peopleHTML.push(<Person
            firstname = {this.state.people[i].firstname}
            lastname = {this.state.people[i].lastname}
            email = {this.state.people[i].email}
            number = {this.state.people[i].number}
            key = {i}
            />);      
        }
            
        return (
            <div>
               <AddressForm addPerson = {this.addPerson} />
               <br />
                {peopleHTML}
            </div>);
    },
        
});

module.exports = AddressBook