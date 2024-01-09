 const fruits=["apple","orange","banana"]

 const fruitdetails={
    name:"apple",
    shape:"round",
    color:"red"
 }

 Object.prototype.sell=()=>{
    console.log(`buy fruits`) 
}
fruitdetails.sell()
fruits.sell()