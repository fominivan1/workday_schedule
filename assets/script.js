//variables
var currentDay = document.getElementById('currentDay')
var textArea = document.querySelectorAll('#text-area')
var timeBlock = document.querySelectorAll('.timeblock')

var ta9 = document.getElementById('text-area9')
var ta10 = document.getElementById('text-area10')
var ta11 = document.getElementById('text-area11')
var ta12 = document.getElementById('text-area12')
var ta1 = document.getElementById('text-area1')
var ta2 = document.getElementById('text-area2')
var ta3 = document.getElementById('text-area3')
var ta4 = document.getElementById('text-area4')
var ta5 = document.getElementById('text-area5')

var btn9 = document.getElementById('btn9')
var btn10 = document.getElementById('btn10')
var btn11 = document.getElementById('btn11')
var btn12 = document.getElementById('btn12')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn9 = document.getElementById('btn5')

var clrBtn = document.getElementById('clrBtn')



var getDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
var currentHour = moment().format('HH')

currentDay.textContent = getDate

function cb9() {
    if( 9 < currentHour ){
        ta9.classList.add('past')
    } else if (
        9 > currentHour 
    ) {
        ta9.classList.add('future')
    } else {
        ta9.classList.add('current')
    }
}

function cb10() {
    if( 10 < currentHour ){
        ta10.classList.add('past')
    } else if (
        10 > currentHour 
    ) {
        ta10.classList.add('future')
    } else {
        ta10.classList.add('current')
    }
}

function cb11() {
    if( 11 < currentHour ){
        ta11.classList.add('past')
    } else if (
        11 > currentHour 
    ) {
        ta11.classList.add('future')
    } else {
        ta11.classList.add('current')
    }
}

function cb12() {
    if( 12 < currentHour ){
        ta12.classList.add('past')
    } else if (
        12 > currentHour 
    ) {
        ta12.classList.add('future')
    } else {
        ta12.classList.add('current')
    }
}

function cb1() {
    if( 13 < currentHour ){
        ta1.classList.add('past')
    } else if (
        13 > currentHour 
    ) {
        ta1.classList.add('future')
    } else {
        ta1.classList.add('current')
    }
}

function cb2() {
    if( 14 < currentHour ){
        ta2.classList.add('past')
    } else if (
        14 > currentHour 
    ) {
        ta2.classList.add('future')
    } else {
        ta2.classList.add('current')
    }
}

function cb3() {
    if( 15 < currentHour ){
        ta3.classList.add('past')
    } else if (
        15 > currentHour 
    ) {
        ta3.classList.add('future')
    } else {
        ta3.classList.add('current')
    }
}

function cb4() {
    if( 16 < currentHour ){
        ta4.classList.add('past')
    } else if (
        16 > currentHour 
    ) {
        ta4.classList.add('future')
    } else {
        ta4.classList.add('current')
    }
}

function cb5() {
    if( 17 < currentHour ){
        ta5.classList.add('past')
    } else if (
        17 > currentHour 
    ) {
        ta5.classList.add('future')
    } else {
        ta5.classList.add('current')
    }
}

btn9.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('9', ta9.value)
})

btn10.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('10', ta10.value)
})

btn11.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('11', ta11.value)
})

btn12.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('12', ta12.value)
})

btn1.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('1', ta1.value)
})

btn2.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('2', ta2.value)
})

btn3.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('3', ta3.value)
})

btn4.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('4', ta4.value)
})

btn5.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.setItem('5', ta5.value)
})



function renderInfo(){
    var item9 = localStorage.getItem('9')
    ta9.value = item9

    var item10 = localStorage.getItem('10')
    ta10.value = item10
    
    var item11 = localStorage.getItem('11')
    ta11.value = item11
    
    var item12 = localStorage.getItem('12')
    ta12.value = item12

    var item1 = localStorage.getItem('1')
    ta1.value = item1

    var item2 = localStorage.getItem('2')
    ta2.value = item2

    var item3 = localStorage.getItem('3')
    ta3.value = item3

    var item4 = localStorage.getItem('4')
    ta4.value = item4

    var item5 = localStorage.getItem('5')
    ta5.value = item5
}

clrBtn.addEventListener('click', function(){
    localStorage.clear()
    location.reload()
})

cb9()
cb10()
cb11()
cb12()
cb1()
cb2()
cb3()
cb4()
cb5()

renderInfo()