var React = require('react');
 
var Person = React.createClass({ 
render: function(){
        return (
            <div>
               {this.props.firstname}
               {this.props.lastname}
               {this.props.email}
               {this.props.phone}
            </div>
    )
}});

module.exports = Person;
   

