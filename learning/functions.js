function new_function(){
    // console.log("Hare Krishna");
    return 5;
};  
const re=new_function()
console.log(re)
new_function()
console.log(new_function);
function calculateprice(...num){
    console.log(num[0])
}
calculateprice(200,500,6,400)
const user={
    name:"Krishna",
    age:20,
    city:"Bangalore"
}
function info(userobject){
    console.log(`${userobject.name} is ${userobject.age} year old`)
}
info(user)