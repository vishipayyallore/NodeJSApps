//Object as function block and Prototypes
function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

Employee.prototype = {
    getFirstName: function(){
        console.log('First Name: ' + this.firstName);
    },
    
    getFullName: function(){
        console.log( 'User::getFullName -> ' + this.firstName + ' ' + this.lastName);
    }
};

//Object as function block
function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.getFirstName = function(){
        console.log('First Name: ' + firstName);
    };
    
    this.getFullName = function(){
        console.log( 'User::getFullName -> ' + firstName + ' ' + lastName);
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
    console.log( this.firstName + ' ' + this.lastName);
}

//Direct assignment
var user2 = {
    firstName: "Shiva",
    lastName: "Sai",
    
    getFirstName: function(){
        console.log('First Name: ' + this.firstName);
    },
    
    getFullName: function(){
        console.log( 'getFullName -> ' + this.firstName + ' ' + this.lastName);
    }
};