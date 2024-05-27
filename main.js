function lightTheme(){
    localStorage.setItem('theme', '1');
    let backBody = document.body;
    backBody.style.backgroundImage = 'none';
    let divs = document.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++){
        if (i >= 0 && i <= 30){
            continue;
        }
        else{
            divs[i].style.color = 'black';
        }
    }
    let zag2 = document.getElementsByTagName('h2');
    for (let i = 0; i < zag2.length; i++){
        zag2[i].style.color = 'black';
    }
    let buttons = document.getElementsByTagName('button');
    for (let i = 4; i < buttons.length - 1; i++){
        buttons[i].style.color = 'black';
        buttons[i].style.border = '1px solid black';
    }
    let contLog1 = document.getElementsByClassName('cont-log1');
    contLog1[0].style.borderBottom = '1px solid black';
    contLog1[0].style.borderRight = '1px solid black';
    let contLog2 = document.getElementsByClassName('cont-log2');
    contLog2[0].style.borderBottom = '1px solid black';
    contLog2[0].style.borderRight = '1px solid black';
    let contLog3 = document.getElementsByClassName('cont-log3');
    contLog3[0].style.borderBottom = '1px solid black';
    contLog3[0].style.borderRight = '1px solid black';
    let contLog4 = document.getElementsByClassName('cont-log4');
    contLog4[0].style.borderBottom = '1px solid black';
    let contLog5 = document.getElementsByClassName('cont-log5');
    contLog5[0].style.borderRight = '1px solid black';
    let contLog6 = document.getElementsByClassName('cont-log6');
    contLog6[0].style.borderRight = '1px solid black';
    let contLog7 = document.getElementsByClassName('cont-log7');
    contLog7[0].style.borderRight = '1px solid black';
    let lines = document.getElementsByClassName('line');
    for (let i = 0; i < lines.length; i++){
        lines[i].style.border = '1px solid black';
    }
    let partLogos = document.getElementsByClassName('p-log');
    for (let i = 0; i < partLogos.length; i++){
        partLogos[i].style.filter = 'invert(100%)';
    }
}

let lightButton = document.getElementById('theme1');
let lightTrue = lightButton.addEventListener('click', () => lightTheme());

function darkTheme(){
    localStorage.setItem('theme', '0');
    let backBody = document.body;
    backBody.style.backgroundImage = 'url(images/bgc.png)';
    let divs = document.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++){
        if (i >= 0 && i <= 30){
            continue;
        }
        else{
            divs[i].style.color = '#ffffff';
        }
    }
    let zag2 = document.getElementsByTagName('h2');
    for (let i = 0; i < zag2.length; i++){
        zag2[i].style.color = '#ffffff';
    }
    let buttons = document.getElementsByTagName('button');
    for (let i = 4; i < buttons.length - 1; i++){
        buttons[i].style.color = '#ffffff';
        buttons[i].style.border = '1px solid #FFFFFF';
    }
    let contLog1 = document.getElementsByClassName('cont-log1');
    contLog1[0].style.borderBottom = '1px solid rgba(255, 255, 255, 30%)';
    contLog1[0].style.borderRight = '1px solid rgba(255, 255, 255, 30%)';
    let contLog2 = document.getElementsByClassName('cont-log2');
    contLog2[0].style.borderBottom = '1px solid rgba(255, 255, 255, 30%)';
    contLog2[0].style.borderRight = '1px solid rgba(255, 255, 255, 30%)';
    let contLog3 = document.getElementsByClassName('cont-log3');
    contLog3[0].style.borderBottom = '1px solid rgba(255, 255, 255, 30%)';
    contLog3[0].style.borderRight = '1px solid rgba(255, 255, 255, 30%)';
    let contLog4 = document.getElementsByClassName('cont-log4');
    contLog4[0].style.borderBottom = '1px solid rgba(255, 255, 255, 30%)';
    let contLog5 = document.getElementsByClassName('cont-log5');
    contLog5[0].style.borderRight = '1px solid rgba(255, 255, 255, 30%)';
    let contLog6 = document.getElementsByClassName('cont-log6');
    contLog6[0].style.borderRight = '1px solid rgba(255, 255, 255, 30%)';
    let contLog7 = document.getElementsByClassName('cont-log7');
    contLog7[0].style.borderRight = '1px solid rgba(255, 255, 255, 30%)';
    let lines = document.getElementsByClassName('line');
    for (let i = 0; i < lines.length; i++){
        lines[i].style.border = '1px solid #FFFFFF';
    }
    let partLogos = document.getElementsByClassName('p-log');
    for (let i = 0; i < partLogos.length; i++){
        partLogos[i].style.filter = 'none';
    }
}

let darkButton = document.getElementById('theme2');
let darkTrue = darkButton.addEventListener('click', () => darkTheme());

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("theme") === "1") {
        lightTheme();
    }
    else if (localStorage.getItem("theme") === "0") {
        darkTheme();
    }
});

let gr1t1 = document.getElementsByClassName('gr1-t1');
let gr1t2 = document.getElementsByClassName('gr1-t2');
let gr2t1 = document.getElementsByClassName('gr2-t1');
let gr2t2 = document.getElementsByClassName('gr2-t2');
for (let i = 0; i < gr1t1.length; i++){
    gr1t1[i].style.opacity = '0%';
}

for (let i = 0; i < gr1t2.length; i++){
    gr1t2[i].style.opacity = '0%';
}

for (let i = 0; i < gr2t1.length; i++){
    gr2t1[i].style.opacity = '0%';
}

for (let i = 0; i < gr2t2.length; i++){
    gr2t2[i].style.opacity = '0%';
}

function animationScroll1(){
    let gr1 = document.getElementsByClassName('gr1-t1');
    let gr11 = document.getElementsByClassName('gr1-t2');
    for (let i = 0; i < gr1.length; i++){
        gr1[i].style.opacity = '100%';
        gr1[i].style.transition = 'opacity 5s';
    }
    for (let i = 0; i < gr11.length; i++){
        gr11[i].style.opacity = '100%';
        gr11[i].style.transition = 'opacity 5s';
    }
}

function animationScroll2(){
    let gr2 = document.getElementsByClassName('gr2-t1');
    let gr22 = document.getElementsByClassName('gr2-t2');
    for (let i = 0; i < gr2.length; i++){
        gr2[i].style.opacity = '100%';
        gr2[i].style.transition = 'opacity 5s';
    }
    for (let i = 0; i < gr22.length; i++){
        gr22[i].style.opacity = '100%';
        gr22[i].style.transition = 'opacity 5s';
    }
}

addEventListener('keyup', () => animationScroll1());
addEventListener('keyup', () => animationScroll2());
