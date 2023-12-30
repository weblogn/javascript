 let mydate =new Date()
//  console.log(mydate.getFullYear(),mydate.getMonth());
//  console.log(mydate.toString())
//  console.log(mydate.toISOString())
//  console.log(mydate.toJSON())
//  console.log(mydate.toDateString())
//  console.log(mydate.toLocaleDateString())
//  console.log(mydate.toTimeString())
console.log(mydate.toLocaleString('default',{
    hour12:false,weekday:'long'
}));