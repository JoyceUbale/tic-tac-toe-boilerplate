// iteration 1- Declare all the variables

const boxElements = document.querySelectorAll(".box")
let winningCombination = 
[
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]
]
const Message = document.getElementById("message")
const playAgain = document.getElementById("buttton")
const Result = document.getElementById("result")

var click = 0;
let xAttempts = []
let oAttempts = []
let wonTheGame = 0;


// iteration2 = onclick function
boxElements.forEach((el,i,arr)=>{
    el.onclick =()=>{
        handleClick (event)
    };
    
    })
     function handleClick(e){
        console.log(e)
        let i=e.target.id;
        let p = document.createElement("p")
        p.setAttribute("id","text");
        boxElements[i-1].append(p);

        // if my click is even or odd
        if(click % 2==0){
            // for the even num
            p.innerHTML ="X"
            p.style.color = "yellow"
            xAttempts.push(parseInt(i-1));
            result(winningCombination,xAttempts,"X")
        }
        else{
            // odd numbers 
            p.innerHTML = "O"
            p.style.color = "red"
            oAttempts.push(parseInt(i-1));
            result(winningCombination,oAttempts,"O")
        }
        click++
        // condition for tie
        if(click == 9 && wonTheGame == 0){
            Result.style.visibility = "visible";
            Message.innerHTML = "its a Tie"
        }
    
     }

    //  iteration3 = result function
    function result(winningCombination,attempts,player){
        let count =0;
        let checker =[];

        for(let i=0;i<winningCombination.length;i++){
            if(Array.isArray(winningCombination[i])){
                result(winningCombination[i],attempts,player)  
                // recursive function line 60
            }
            else{
            if(attempts.includes(winningCombination[i])){
                checker.push(true)
                count++
             }
             else{
                checker.push(false)
             }
            }
        }
        if(checker.every(el => el===true)&& count>2){
            Result.style.visibility = "visible";
            Message.innerHTML = "The Winner is"+player +"!";
      
            wonTheGame = 1
        }
    }

    // iteration4= restart page
const restart= document.getElementById("button")
restart.onclick=()=>{
    window.location.reload();
}