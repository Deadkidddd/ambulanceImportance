//definitions to define when to apply cetain attributes
let width = window.innerWidth;
let device = "";
findDeviceType();

function findDeviceType(){
if (width >= 333px){device = "desktop"; console.log("desktop");}
else if(width <333px){device = "mobile"; console.log("mobile");}
else{console.log("error!"); window.location.href = "error.html";}
}

//functions for easy element changes
function changeTop(element, topOffset){
    const topElement = topOffset;
    element.style.top = `${topElement}%`;
    console.log(`Top changed to ${topElement}%`);
}
function changeLeft(element, leftOffset){
    const leftElement = leftOffset;
    element.style.left = `${leftElement}%`;
    console.log(`Left changed to ${leftElement}%`);
}

//even or odd function
let number = 0;
let numberType = "";

function evenOrOdd(){
    if(number %2 === 0){
        numberType = "even";
    }
    else{
        numberType = "odd";
    }
};

//dropdown for navagation
let dropDownBase = document.getElementById("dropdownBase");
let dropdowns = document.getElementsByClassName("dropdown");

//mobile special navigation
function mobileNavShowing(){
    navBase.onclick = () => {
        number += 1;
        evenOrOdd();
        if (numberType === "odd") {
            dropDownBase.style.width = "5%;";
            dropDownBase.style.height = "5%";
            dropDownBase.style.opacity = "80%";
            console.log(numberType);
        }
        else if (numberType === "even") {
            dropDownBase.style.width = "9%";
        }
        else{console.log("error!"); window.location.href = "error.html";}
    }
}

function showNavDropDownsMobile(){
    let leftOffset = 0;
    catAmbulanceAnimation();
    //dropDownBase.style.width = "70%";
    //dropDownBase.style.height = "5%";
for (let dropdown of dropdowns) {
    dropdown.style.top = "13%";
    dropdown.style.animation = "fadeIn 2s 1";
    dropdown.style.display = "inline-block";
    changeLeft(dropdown, leftOffset);
    leftOffset += 20;
}
}
function hideNavDropDownsMobile(){
    for(let dropdown of dropdowns) {
        dropdown.style.display = "none";
        leftOffset = 0;
    }
    dropDownBase.style.height = "20px";};

function clicksWhenNavShows(){
    dropdowns.onclick = () => {
        number += 1;
    }
}

function mobileDisplay(){
    dropDownBase.onclick = () => {
    number += 1;
    evenOrOdd();
    console.log(numberType);
if (numberType === "even") {
    hideNavDropDownsMobile();
}
else if (numberType === "odd") {
    showNavDropDownsMobile();
    clicksWhenNavShows();
}
else{
    console.log("error!");
    window.location.href = "error.html";
};}
}

//regular displays
function showNavDropDowns(){
    let topOffset = 0;
for (let dropdown of dropdowns) {
    dropdown.style.animation = "fadeIn 2s 1";
    dropdown.style.display = "block";
    dropDownBase.style.height = "200px";
    changeTop(dropdown, topOffset);
    topOffset += 7;
}}

function hideNavDropDowns(){
    for(let dropdown of dropdowns) {
        dropdown.style.display = "none";
        dropDownBase.style.height = "20px";
        topOffset = 0;
    }}

function regularDisplay(){
dropDownBase.onclick = () => {
number += 1;
evenOrOdd();
if (numberType === "odd") {
    showNavDropDowns();
    console.log("odd");
}
else if (numberType === "even") {
    hideNavDropDowns();
    console.log("even");
}
else{
    console.log("error!");
    window.location.href = "error.html";
;}}
}

//Execute
if (device === "mobile"){
    mobileNavShowing();
    mobileDisplay();
}

else if (device === "desktop"){
    mobileNavShowing();
    regularDisplay();
}

else{
    console.log("error!");
}

//pageSwitches
let timer = 0;
let widthView = window.innerWidth;

//let home = document.getElementById("dropdownHome");
let importance = document.getElementById("dropdownImportance");
let solutions = document.getElementById("dropdownSolutions");
let barriers = document.getElementById("dropdownBarriers");
let home = document.getElementById("home");

//home.onclick = () => {window.location.href = "index.html";}
importance.onclick = () => {window.location.href = "importance.html";}
solutions.onclick = () => {window.location.href = "solutions.html";};
barriers.onclick = () => {window.location.href = "barriers.html"; console.log("barriers");}
home.onclick = () => {window.location.href = "index.html"; console.log("home");}

//catInAmbulance Animation Relating to Screen Load
let catInAmbulance = document.getElementById("catInAmbulance");
let catAmbulancePosition = 0;
let catInAmbulanceShadow = document.getElementById("catInAmbulanceShadow");
let catInAmbulanceShadowPosition = 0;

async function catAmbulanceAnimation(){
    let sirens = new Audio(`ambulance-siren-363656.mp3`);
    sirens.play();
    while((widthView) > catAmbulancePosition){
    catAmbulancePosition += 1;
    catInAmbulanceShadowPosition += 1;
    catInAmbulance.style.left = `${catAmbulancePosition}px`;
    catInAmbulanceShadow.style.left = `${catInAmbulanceShadowPosition}px`;
    timer += 1;
    await new Promise(r => setTimeout(r, 2));
    }
    console.log("animation complete");
    console.log("timer is " +timer);
    let timerNew = timer;
    sirens.pause();
    }
    console.log(widthView);



/*function changePage(){
    let sirens = new Audio(`ambulance-siren-363656.mp3`);
    console.log(sirens);
    catAmbulanceAnimation();
    sirens.play();
}
*/



