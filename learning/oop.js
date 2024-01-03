//  let user={name:"raju",
//  email:"raju@gmail.com",
//  age:21

// }
// console.log(user)

function user(username,islogin,age){
    this.username=username;
    this.islogin=islogin;
    this.age=age;
    return this;
}

const userOne= user("raju",true,21)
let userTwo=  new user("jay",true,25)

console.log(userTwo)
