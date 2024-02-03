let boxes=document.querySelectorAll(".box1");



let reset=document.querySelector(".reset-btn");
let newgamebtn=document.querySelector(".new-game");

let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#win");
// p=document.querySelectorAll("p");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
function resetGame(){
    turnO=true;
    enable();
    msgContainer.classList.add("hide");


};


boxes.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        console.log("button was clicked");
        box1.style.Color="blue";
        if(turnO){
            box1.innerText="O";
            turnO=false;
        }else{
            box1.innerText="X";
            turnO=true;
        }
        box1.disabled=true;
        checkwinner();
        
        
    });

});
const disable=()=>{
    for(let box1 of boxes){
        box1.disabled=true;
    }

};
const enable=()=>{
    for(let box1 of boxes){
        box1.disabled=false;
        box1.innerText="";
    }

};
const showwinner=(winner)=>{
    msg.innerText=`congragulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();

};
const checkwinner=()=>{
    for(let pattern of winpatterns){
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
            }
           
            
        }
    }
};
newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);






