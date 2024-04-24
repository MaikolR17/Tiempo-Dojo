var cookies = document.querySelector("#acceptCookies");

function remove() {
    cookies.remove()    
}

function cToF(temp) {
    return Math.round((9 / 5) * temp + 32);
}

function fToC(temp) {
    return Math.round((5 / 9) * (temp - 32));
}

function change(element) {
    console.log(element.value);
    for (var i = 1; i < 9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "°C") {
            tempSpan.innerText = fToC(tempVal);
        } else {
            tempSpan.innerText = cToF(tempVal);
        }
    }
}