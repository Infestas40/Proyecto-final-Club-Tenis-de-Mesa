
let counter = 0;

function countingClicks(){
    document.getElementById("counting").innerHTML = ++counter;
    if (counter > 10){
        document.getElementById("warning").innerHTML = message;
    }
}


