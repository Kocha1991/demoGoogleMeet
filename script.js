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

//появляються скриті кнопки в блоці мій аватар
const interactiveButton = document.querySelector(".min_btn");
const interactiveContainer = document.querySelector(".mi_border");

interactiveContainer.addEventListener("mouseenter", function() {
    // highlight the mouseenter target
    interactiveButton.style.display = "block";
  
  }, false);

  
interactiveContainer.addEventListener("mouseleave", function() {
    // highlight the mouseenter target
    interactiveButton.style.display = "none";
  
  }, false);

// клик по аватару, зміна фото на рандомну картинку

const apiUrl = "https://api.thecatapi.com/v1/images/search";
const img = document.getElementById("people1");
const img2 = document.getElementById("people2");
     
img.addEventListener("click", function() {
    fetch(apiUrl)
        .then((response) => {
            return response.json();
        })
        // [{"breeds":[],"categories":[],"id":"8p0","url":"https://cdn2.thecatapi.com/images/8p0.jpg","width":1280,"height":765}]
        .then((data) => {
            console.log(data)
            img.src = data[0].url;
        });
}, false);
     
img2.addEventListener("click", function() {
    fetch(apiUrl)
        .then((response) => {
            return response.json();
        })
        // [{"breeds":[],"categories":[],"id":"8p0","url":"https://cdn2.thecatapi.com/images/8p0.jpg","width":1280,"height":765}]
        .then((data) => {
            console.log(data)
            img2.src = data[0].url;
        });
}, false);

  
  //клик по кнопкам
const btn1Off = document.querySelector('#btn1');

btn1Off.addEventListener('click', function(){
     if (btn1Off.style.background !== 'red') {
        btn1Off.style.background = 'red';
    } else {
        btn1Off.style.background = '#3c4043';
    } 
},false);

const btn2Off = document.querySelector('#btn2');

btn2Off.addEventListener('click', function(){
     if (btn2Off.style.background !== 'red') {
        btn2Off.style.background = 'red';
    } else {
        btn2Off.style.background = '#3c4043';
    } 
},false);

const btnEndOff = document.querySelector('.btn_call_end');

btnEndOff.addEventListener('click', function(){
     if (btnEndOff.style.background !== 'red') {
        btnEndOff.style.background = 'red';
    } else {
        btnEndOff.style.background = '#3c4043';
    } 
},false);

  //випадающе меню
const submenuBtn = document.querySelector(".submenuBtn");
const navSubmenu = document.querySelector(".submenu");

submenuBtn.addEventListener("click", function() {
    // if (navSubmenu.style.display === "block") {
    //     navSubmenu.style.display = "none";
    // } else {
    //     navSubmenu.style.display = "block";
    // }
    navSubmenu.style.display === "block" ?  navSubmenu.style.display = "none" :  navSubmenu.style.display = "block";
}, false);

//дод інфо при натисненні на кнорку в Submenu

// const openSubmenu1 = document.querySelector(".clickSubmenu");
// const clickBtnSubmenu = document.querySelector("#subBtn1");
// const menuButtons = document.querySelectorAll("div.submenu > button");

// menuButtons.forEach(item => {
//     item.addEventListener('click', (event) => {
//          console.log(event.target);
//          // find sub menu div and display it
//          return false;
//     });
//   });

// menuButtons.addEventListener("mouseenter", function(event) {
//     console.log(event.target)
//     //openSubmenu1.style.display = "block";
// }, false);
// menuButtons.addEventListener("mouseleave", function(event) {
//     //openSubmenu1.style.display = "none";
// }, false);

//(неправильний варіант)
const openSubmenu1 = document.querySelector(".clickSubmenu1");
const clickBtnSubmenu1 = document.querySelector("#subBtn1");

clickBtnSubmenu1.addEventListener("mouseenter", function() {
    openSubmenu1.style.display = "block";
}, false);
clickBtnSubmenu1.addEventListener("mouseleave", function() {
    openSubmenu1.style.display = "none";
}, false);

const openSubmenu2 = document.querySelector(".clickSubmenu2");
const clickBtnSubmenu2 = document.querySelector("#subBtn2");

clickBtnSubmenu2.addEventListener("mouseenter", function() {
    openSubmenu2.style.display = "block";
}, false);
clickBtnSubmenu2.addEventListener("mouseleave", function() {
    openSubmenu2.style.display = "none";
}, false);

const openSubmenu3 = document.querySelector(".clickSubmenu3");
const clickBtnSubmenu3 = document.querySelector("#subBtn3");

clickBtnSubmenu3.addEventListener("mouseenter", function() {
    openSubmenu3.style.display = "block";
}, false);
clickBtnSubmenu3.addEventListener("mouseleave", function() {
    openSubmenu3.style.display = "none";
}, false);

const openSubmenu4 = document.querySelector(".clickSubmenu4");
const clickBtnSubmenu4 = document.querySelector("#subBtn4");

clickBtnSubmenu4.addEventListener("mouseenter", function() {
    openSubmenu4.style.display = "block";
}, false);
clickBtnSubmenu4.addEventListener("mouseleave", function() {
    openSubmenu4.style.display = "none";
}, false);

const openSubmenu5 = document.querySelector(".clickSubmenu5");
const clickBtnSubmenu5 = document.querySelector("#subBtn5");

clickBtnSubmenu5.addEventListener("mouseenter", function() {
    openSubmenu5.style.display = "block";
}, false);
clickBtnSubmenu5.addEventListener("mouseleave", function() {
    openSubmenu5.style.display = "none";
}, false);

const openSubmenu6 = document.querySelector(".clickSubmenu6");
const clickBtnSubmenu6 = document.querySelector("#subBtn6");

clickBtnSubmenu6.addEventListener("mouseenter", function() {
    openSubmenu6.style.display = "block";
}, false);
clickBtnSubmenu6.addEventListener("mouseleave", function() {
    openSubmenu6.style.display = "none";
}, false);

const openSubmenu7 = document.querySelector(".clickSubmenu7");
const clickBtnSubmenu7 = document.querySelector("#subBtn7");

clickBtnSubmenu7.addEventListener("mouseenter", function() {
    openSubmenu7.style.display = "block";
}, false);
clickBtnSubmenu7.addEventListener("mouseleave", function() {
    openSubmenu7.style.display = "none";
}, false);

const openSubmenu8 = document.querySelector(".clickSubmenu8");
const clickBtnSubmenu8 = document.querySelector("#subBtn8");

clickBtnSubmenu8.addEventListener("mouseenter", function() {
    openSubmenu8.style.display = "block";
}, false);
clickBtnSubmenu8.addEventListener("mouseleave", function() {
    openSubmenu8.style.display = "none";
}, false);

const openSubmenu9 = document.querySelector(".clickSubmenu9");
const clickBtnSubmenu9 = document.querySelector("#subBtn9");

clickBtnSubmenu9.addEventListener("mouseenter", function() {
    openSubmenu9.style.display = "block";
}, false);
clickBtnSubmenu9.addEventListener("mouseleave", function() {
    openSubmenu9.style.display = "none";
}, false);