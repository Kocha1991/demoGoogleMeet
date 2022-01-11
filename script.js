//робота з годинником
function currentTime() {
    let date = new Date(); //створюю екземпляр класу дата
    let hour = date.getHours();
    let min = date.getMinutes();

    hour = updateTime(hour);
    min = updateTime(min);

    document.getElementById("clock").innerText = hour + ':' + min; // додати час в div
    const t = setTimeout(function() {
        currentTime();
    }, 1000); //timer
}

function updateTime(k) {
    if (k < 10) {
        return  '0' + k;
    }
    else {
        return k;
    }
}

currentTime();

