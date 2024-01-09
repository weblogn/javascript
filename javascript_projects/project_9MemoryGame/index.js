var box=document.querySelectorAll(".box")
var newgame=document.querySelector("#bb")
var highest=document.querySelector("#highscore")


var isFlipped=false;
var firstBox;
var secondBox;
var count=0;
var index;
var num=0;
var highscore=0;


function shuffle(){

    box.forEach((e)=>{ 
        index=Math.floor(Math.random()*25)
        e.style.order=index;

    });
}
shuffle();


// console.log(this)
newgame.addEventListener('click',restart)

function restart(){
    count=0;
        box.forEach((e)=>{
            e.classList.remove("flip")
            reset()
        })
        setTimeout(()=>{
                // shuffle()
        },1000)

        box.forEach((e)=> e.addEventListener("click",flip));

}

box.forEach((e)=> e.addEventListener("click",flip));


function flip(){
    
    this.classList.add("flip")
    count++;
    highscr()
    if(!isFlipped){
        isFlipped=true;
        firstBox=this
    }
    else{
        secondBox=this;
        isFlipped=false;
        check()
    }
    
}


function highscr(){

    newgame.innerHTML=count;
    if(count>highscore){
        highscore=count
        highest.innerHTML=highscore
    }
    else{
        highest.innerHTML=highscore
    }
}

function check(){
    if(firstBox.dataset.image === secondBox.dataset.image){
        num++;
        if(num==12){
            console.log("WINNER")
        }
        success()
        
    }
    else{
        fail()
    }
}

function success(){
    firstBox.removeEventListener('click',flip)
    secondBox.removeEventListener('click',flip)
    
    reset()
}

function fail(){
    setTimeout(()=>{
        firstBox.classList.remove("flip")
        secondBox.classList.remove("flip")
        reset()
    },700)
    

    

}
function reset(){
     isFlipped=false
    firstBox=null;
    secondBox=null;

};

// var index;

// function shuffle(){

//     box.forEach((e)=>{ 
//         index=Math.floor(Math.random()*25)
//         console.log(index)

//     });

// }
// shuffle()


