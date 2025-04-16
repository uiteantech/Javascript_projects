// class User{
//     constructor(username,email,password){
//         this.email=email
//         this.password=password
//         this.username=username
//     }

//     callme(){
//         return `${this.password}`
//     }
// }

//   const tea=new User("Usman","Usman@gmail","12345")
//   console.log(tea.callme())

  // Behind the Scene

//   function User(username,email,password){
//     this.username=username
//     this.email=email
//     this.password=password
//   }

//   User.prototype.callMe=function(){
//      return `${this.password}`
//   }

//   const Tea=new User("Usman","Usman@google","123")
//   console.log(Tea.callMe())

// Next inharitence 

class parent{
    constructor(username){
        this.username=username

    }

    callme(){
        return(`${this.username}`)
    }
    static nocallme(){
        return "123"
    }
}

class Teacher extends parent{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
}

const inhari= new Teacher("Usman","Usman@gmail.com","123")
console.log(inhari.callme())
console.log(inhari.nocallme())