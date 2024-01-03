//  const promiseone= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("Asynctask")
//     resolve()
//     },1000)
//     return 100 
//  })
// //  console.log(promiseone)
// // here then is connected to promise using resolve method
// promiseone.then(()=>{
//     console.log("value")
// })

// new Promise((resolve,reject)=>{
    
//     {console.log("promise two created")
//     resolve(10)
// }
    
// }).then(()=>{
//     fun()
// })

// function fun(){
//     console.log("function called from resolve of promise two")
// }

// const promisethree= new Promise((resolve,reject)=>{
//     console.log("promisethree")
//     resolve({name:"raju",
//             age:21})

// })
// promisethree.then((user)=>{
//     console.log(user)
// })

// const promisefour=new Promise((resolve,reject)=>{
//     console.log("promisefour")
//     let error=true
//     if(!error){
//         console.log("no errors")
//         resolve({name:"raju",email:"raju@gmail.com"})
//     }
//     else{
//         reject({name:"raju"})
//     }
//  })
// promisefour.then((user)=>{
//     console.log("resolve 1")
//     console.log(user)
//     return user.name
// }).then((name)=>{
//     console.log("Returned value fromprevoius then block: "+ name)
// }).catch((error)=>{
//     console.log("catch block")
//     console.log(error)
// }).finally(()=>{
//     console.log("no matter what finally(me) going to execute")
// })


// const promiseFive=new Promise((resolve,reject)=>{
//     console.log("promise five")
//     let error=true
//     if(!error){
//         console.log("no errors")
//         resolve({name:"raju",email:"raju@gmail.com"})
//     }
//     else{
//         reject('Error occured')
//     }
//  })

// async function consumepromiseFive(){
//     //  console.log(await promiseFive)
//     try {
//         console.log(await promiseFive)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumepromiseFive()

// async function fetching(){
//     const response= await fetch("https://randomuser.me/api/")
//     // console.log(response)
//      const data= await response.json()
//     console.log(data.name);
// }
// fetching()
fetch("https://randomuser.me/api/").then((response)=>{
    // console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data.results[0].name.first)
}).catch((error)=>{
    console.log("unable to connect try again")
    console.log(error)
}) 
