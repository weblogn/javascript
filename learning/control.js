//const score=100;

// if(score==100) console.log("running")
//const val=null??undefined;
// console.log(val); 
// for (let index = 0; index < 10; index++) {
//     if(index==5){
//         continue;
//     }
    //console.log(index);
    
//}

// const map=new Map();
// map.set(0,"a")
// map.set(1,"b")
// map.set(2,"c")
// console.log(map.values())
// for (const i of map.keys()) {
//     console.log(i);
    
// }
// for (let index = 0; index < map.len; index++) {
//     const element = array[index];
    
// }

// for (const i of map()) {
//     console.log(i);
    
//}
// console.lof(map.size());
 const a=[1,2,5,8,9,9,9,6,5,5,2,4]
//  arr.forEach( (i)=>{
//     console.log(i)
//  } )

 const role=[
    {name:"raju",
     position:"developer",
     salary:60000
    },
    {name:"chetan",
     position:"tester",
     salary:50000},
     {name:"chaman",
     position:"manager",
     salary:80000},
     {name:"Cham",
     position:"developer",
     salary:6000}
]

 const arr=[1,2,3,4,5,6]
// const  developer=role.filter(  (post) =>{
//     return post.position==="developer"
// })
// developer.forEach( (obj)=>{ 
//     console.log(obj.name)

// })
const newarr=arr.map( (item)=>{
     return  item *2;
}).filter( (item)=>{ return  item <9})
// console.log( newarr)
// const  arr=[
//     [1,2,3],[2,3,4],[3,4,5]
// ]

// arr.forEach( (obj,index)=>{
//     console.log(obj);
// }  )


const bill=role.reduce( (acc,item)=>{ return acc+item.salary},0)
console.log(bill)
