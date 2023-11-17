let userBalance = 0;
window.onload = function(){
    let userName = prompt("Hello! Enter your name pls :)");
    if(userName == "" || userName == null){
    alert("Pls enter your name to continue...");
    location.reload();
    }
    else{
        userBalance = prompt("Now enter the amount of money that you want to deposit :)");
        userBalance = new Number(userBalance);
        if(userBalance <= 0 || userBalance == null || isNaN(userBalance)){
        alert("Pls enter amount of money...");
        location.reload();
        }
        else{
            document.getElementById("userName").innerHTML = userName;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
        }
    }
}
let btn = document.getElementById("startButton");
let reel1 = document.getElementById("reel1");
let reel2 = document.getElementById("reel2");
let reel3 = document.getElementById("reel3");
let posY1= reel1.style.backgroundPositionY;
let posY2 = reel2.style.backgroundPositionY;
let posY3 = reel3.style.backgroundPositionY;
let newPosY1 = 0;
let newPosY2 = 0;
let newPosY3 = 0;
let spinTime = 100;
let reelIcons = 9;
let spin1 = 0;
let spin2 = 0;
let spin3 = 0;
let iconsArray = new Array("banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon");
btn.onclick = () => spinFunction();
function spinFunction(){
    let userBet = document.getElementById("userBet").value;
    if(userBet <= userBalance && userBet != 0){
        work = 1;
        while(work == 1){
            let height = 0;
            if(document.querySelector(".main").offsetWidth < 1000){
                height = Math.round(document.querySelector(".reel").offsetHeight / 27);
                console.log(height);
            }
            document.getElementById("yourWin").innerHTML = "???";
            console.log(userBet);
            btn.disabled = true;
            work = 0;
            userBalance = userBalance - userBet;
            console.log(userBalance);
            spin1 = (height + 2) * reelIcons + Math.round(Math.random() * reelIcons) - height;
            spin2 = (height + 2) * reelIcons + Math.round(Math.random() * reelIcons) - 2 - height;
            spin3 = (height + 2) * reelIcons + Math.round(Math.random() * reelIcons) - 3 - height;
            reel1.style.transition = `background-position-y ${(8 + 1 * spin1) * spinTime}ms`;
            reel1.style.backgroundPositionY = `${posY1 + spin1 * height}vh`;
            reel2.style.transition = `background-position-y ${(8 + 2 * spin2) * spinTime}ms`;
            reel2.style.backgroundPositionY = `${posY2 + spin2 * height}vh`;
            reel3.style.transition = `background-position-y ${(8 + 3 * spin3) * spinTime}ms`;
            reel3.style.backgroundPositionY = `${posY3 + spin3 * height}vh`;
            setTimeout(()=>{
                let spinResult1 = spin1%reelIcons;
                let spinResult2 = spin2%reelIcons;
                let spinResult3 = spin3%reelIcons;
                console.log(spinResult1, spinResult2, spinResult3);
                resultCalc(spinResult1, spinResult2, spinResult3, userBet);
                reel1.style.backgroundPositionY = posY1;
                reel2.style.backgroundPositionY = posY2;
                reel3.style.backgroundPositionY = posY3;
                reel1.style.transition = "none";
                reel2.style.transition = "none";
                reel3.style.transition = "none";
                console.log("10");
                btn.disabled = false;
            }, (8 + 3 * spin3) * spinTime + 3 * 150);
        }
    }
    if(userBet > userBalance && userBalance != 0){
        alert(`You dont have enough money to make this bet. You can make a bet in the range of 1 to ${userBalance}`);
    }
    if(userBet == 0){
        alert("You cant bet 0 coins");
    }
}
function resultCalc(spinResult1, spinResult2, spinResult3, userBet){
    if(spinResult1 == spinResult2 || spinResult2 == spinResult3 || spinResult1 == spinResult3){
        if(spinResult1 == 1 && spinResult2 == 1 && spinResult3 == 1){
            userBet=userBet*100;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 1 && spinResult2 == 1){
            userBet=userBet*50;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 5 && spinResult2 == 5 && spinResult3 == 5){
            userBet=userBet*25;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if((spinResult1 == 5 && spinResult2 == 5)||(spinResult2 == 5 && spinResult3 == 5)||(spinResult1 == 5 && spinResult3 == 5)){
            userBet=userBet*12.5;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 6 && spinResult2 == 6 && spinResult3 == 6){
            userBet=userBet*10;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if((spinResult1 == 6 && spinResult2 == 6)||(spinResult2 == 6 && spinResult3 == 6)||(spinResult1 == 6 && spinResult3 == 6)){
            userBet=userBet*5;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 7 && spinResult2 == 7 && spinResult3 == 7){
            userBet=userBet*6;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if((spinResult1 == 7 && spinResult2 == 7)||(spinResult2 == 7 && spinResult3 == 7)||(spinResult1 == 7 && spinResult3 == 7)){
            userBet=userBet*3;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 0 && spinResult2 == 0 && spinResult3 == 0){
            userBet=userBet*4;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if((spinResult1 == 0 && spinResult2 == 0)||(spinResult2 == 0 && spinResult3 == 0)||(spinResult1 == 0 && spinResult3 == 0)){
            userBet=userBet*2;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 8 && spinResult2 == 8 && spinResult3 == 8){
            userBet=userBet*3;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if((spinResult1 == 8 && spinResult2 == 8)||(spinResult2 == 8 && spinResult3 == 8)||(spinResult1 == 8 && spinResult3 == 8)){
            userBet=userBet*1.5;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 2 && spinResult2 == 2 && spinResult3 == 2){
            userBet=userBet*2;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if((spinResult1 == 2 && spinResult2 == 2)||(spinResult2 == 2 && spinResult3 == 2)||(spinResult1 == 2 && spinResult3 == 2)){
            userBet=userBet*1.25;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 4 && spinResult2 == 4 && spinResult3 == 4){
            userBet=userBet*1;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if((spinResult1 == 4 && spinResult2 == 4)||(spinResult2 == 4 && spinResult3 == 4)||(spinResult1 == 4 && spinResult3 == 4)){
            userBet=userBet*0.75;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if(spinResult1 == 3 && spinResult2 == 3 && spinResult3 == 3){
            userBet=userBet*0.5;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
        if((spinResult1 == 3 && spinResult2 == 3)||(spinResult2 == 3 && spinResult3 == 3)||(spinResult1 == 3 && spinResult3 == 3)){
            userBet=userBet*0.25;
            userBalance+= userBet;
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = userBet;
        }
    }
    else{
        if(userBalance == 0){
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            alert("You don't have any money! If you want to play, make deposit.");
        }
        else{
            document.getElementById("statsOfBalance").innerHTML = userBalance;
            document.getElementById("yourWin").innerHTML = "You Lose";
        }
    }
}