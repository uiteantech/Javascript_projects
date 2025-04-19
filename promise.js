// one
const first_promise=new Promise(function(resolve,reject){

    // used for d connections

    setTimeout(function(){ console.log("Am solved"),resolve() },1000)
   
})

first_promise.then(function(){
    console.log("Am second Part");
})


// two

new Promise(function(resolve,reject){

    // used for d connections

    setTimeout(function(){ console.log("Am solved"),resolve() },1000)
   
})

.then(function(){
    console.log("Am second Part");
})

// three
new Promise(function(resolve,reject){
    setTimeout(function(){console.log("AM first without variable"),resolve()},2000)
})
.then(function(){
    console.log("am Second")
})

new Promise(function(resolve,reject){
    setTimeout(function(){console.log("AM first without variable am 3 okay  consumming data"),resolve({username:"Usman",password:"123"})},2000)
})
.then(function(user){
    console.log("am Second am 3 okay am consumming data",user)
})

four

new Promise(function(resolve,reject){
    setTimeout(function(){
        const variable=false
        if(!variable){
         resolve({username:"Usman",password:"123"})
        }
        else{
            reject('Error')
            
        }
    },1000)
})
.then((user)=>{
    console.log(user)
    return user.username

}).then((username)=>{
    console.log(username)
}).catch(function(error){
   console.log(error)
})

five

const first_promisee=new Promise(function(resolve,reject){

    // used for d connections

    setTimeout(function(){
                const variable=false
                if(!variable){
                 resolve({username:"Usman",password:"123"})
                }
                else{
                    reject('Error')
                    
                }
            },1000)

   
})

async function consumepromes(){

    try {
        const respons=await first_promise  // that is object so we not comsume as __()
         console.log(respons)
    } catch (error) {
        console.log("something went wrong")
    }
    
}
// in previous case we try print and got error bz there was no value okay but in current case we have value okay 

consumepromes()


Six

async function getdatafromlink() {
try {
    const replay= await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await replay.json()
    console.log(data)
} catch (error) {
    console.log("Error")
}
    
}
getdatafromlink()

Seven

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
 console.log(data)
}).catch((error)=>{
    console.log(error)
})