
function callMe(username){
   this.usernames=username
}



function outer(username,email,location){

callMe.call(this,username) 
this.email=email
this.location=location

}

const invoke= new outer("Usman","Usman@gmail.com","Lahore")
console.log(invoke)

