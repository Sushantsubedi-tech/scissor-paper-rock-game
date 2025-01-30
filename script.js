let imageinhuman = document.querySelector(".imagehum")
let appearsinhuman = document.querySelector(".appearshum")
let  imageincomputer = document.querySelector(".imagecop")
let appearsincomputer =document.querySelector(".appearscom")
let userchoiceinput = document.querySelector(".input")

let play = document.querySelector(".playtog")
 

play.addEventListener("click",function(){
    let userchoice = userchoiceinput.value
    if(userchoice =="scissor" ){
        imageinhuman.style.backgroundImage = "url(https://i.pinimg.com/736x/5f/cf/73/5fcf7340cc0505a16d9cc31d4f2b1a52.jpg)"
    
    }
    
    else if(userchoice =="rock" ){
        imageinhuman.style.backgroundImage = "url(https://i.pinimg.com/736x/0b/72/74/0b72742e0317a717a2e9c1265ec07c37.jpg)"
        
    }
    else if(userchoice =="paper"){
        imageinhuman.style.backgroundImage = "url(https://i.pinimg.com/736x/e1/94/55/e194552f3cd20f02f4f5df63b6872ae2.jpg)"
        
    }
    else {
        alert("wrong input")
    }

  //work on comp
 
   
    let choices = ["scissor", "rock", "paper"];
let compchoice = choices[Math.floor(Math.random()*3)]
if(compchoice=="scissor"){
    imageincomputer.style.backgroundImage = "url(https://i.pinimg.com/736x/5f/cf/73/5fcf7340cc0505a16d9cc31d4f2b1a52.jpg)"
 appearsincomputer.innerHTML ="scissor"
}
else if (compchoice=="rock"){
    imageincomputer.style.backgroundImage = "url(https://i.pinimg.com/736x/0b/72/74/0b72742e0317a717a2e9c1265ec07c37.jpg)"

    appearsincomputer.innerHTML ="rock"
}
else if (compchoice=="paper"){
     imageincomputer.style.backgroundImage = "url(https://i.pinimg.com/736x/e1/94/55/e194552f3cd20f02f4f5df63b6872ae2.jpg)"
 appearsincomputer.innerHTML ="paper"
    }

  


//for win lose 
 if(userchoice =="scissor"  && compchoice=="paper"){
    setTimeout(function(){alert("YOU WIN")},2000)
}
else if(userchoice =="scissor"  && compchoice=="rock"){
    setTimeout(function(){alert("You Lose")},2000)
}
else if(userchoice =="rock"  && compchoice=="scissor"){
    setTimeout(function(){alert("YOU WIN")},2000)
}
else if(userchoice =="rock"  && compchoice=="paper"){
    setTimeout(function(){alert("YOU LOSE")},2000)
}
else if(userchoice =="paper"  && compchoice=="scissor"){
    setTimeout(function(){alert("YOU Lose")},2000)
}
else if(userchoice =="paper"  && compchoice=="rock"){
    setTimeout(function(){alert("YOU WIN")},2000)
}
else if (userchoice == compchoice){
    setTimeout(function(){alert("DRAW")},2000)
}

});