//Object as function block and Prototypes
function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

Employee.prototype = {
    getFirstName: function(){
        var startingMessage = 'Employee::First Name: ';
        console.log( startingMessage.concat(this.firstName) );
    },
    
    getFullName: function(){
        var startingMessage = 'Employee::getFullName -> ';
        console.log( startingMessage.concat(this.firstName, ' ', this.lastName) );
    }
};

//Object as function block
function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.getFirstName = function(){
        var startingMessage = 'User::First Name: ';
        console.log( startingMessage.concat(firstName) );
    };
    
    this.getFullName = function(){
        var startingMessage = 'User::getFullName -> ';
        console.log( startingMessage.concat(firstName, ' ', lastName) );
    };
    
    return{
        getFirstName: this.getFirstName,
        getFullName: this.getFullName
    }
};

//On Fly
var user1 = new Object();

user1.firstName = "Shiva";
user1.lastName = "Sai";

user1.getFullName = function(){
    console.log( "User1::getFullName: ".concat(this.firstName, this.lastName) );
}

//Direct assignment
var user2 = {
    firstName: "Shiva",
    lastName: "Sai",
    
    getFirstName: function(){
        console.log('User2::First Name: '.concat(this.firstName) );
    },
    
    getFullName: function(){
        console.log( "User2::getFullName -> ".concat(this.firstName, this.lastName) );
    }
};