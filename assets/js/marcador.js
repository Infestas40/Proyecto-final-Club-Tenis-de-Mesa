
let counter = 0;


function countingClicks(){
    document.getElementById("counting").innerHTML = ++counter;
    if (counter > 10){
    }
}

function restarClicks(){
    document.getElementById("counting").innerHTML = --counter;
    if (counter > 10){
        
    }
}

function countingClicksmarcadorplayer2(){
    document.getElementById("counting2").innerHTML = ++counter;
    if (counter > 10){
        
    }
}

function restarClicksmarcadorplayer2(){
    document.getElementById("counting2").innerHTML = --counter;
    if (counter > 10){
        
    }
}

function resetClicks() {
    i = 0;
    document.getElementById("counting").innerHTML = i;
    document.getElementById("counting2").innerHTML = i;
}
    






