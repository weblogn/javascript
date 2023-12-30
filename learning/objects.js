const mysym= Symbol("mysymbol")
console.log(mysym);
const obj={
    name:"raju",
    [mysym]:"my_symbol",
    number:4153733164,
    "address":"nagpur"
}

console.log(obj.address);
console.log(obj["name"]);

console.log(obj[mysym]);
obj.name="raja"
console.log(obj);
obj.intro=function() {
    console.log(`my name is ${this.name}`)
    
}
// Object.freeze(obj);
obj.name="raju"
console.log(obj);
console.log(obj.intro())