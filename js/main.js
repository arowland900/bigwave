// cached elements
let h1 = document.querySelector('h1')
let img = document.querySelector('img')

let fProjexx = document.querySelector('#fullProjexx')
let mProjexx = document.querySelector('#miniProjexx')
let fSteez = document.querySelector('#fullSteez')
let mSteez = document.querySelector('#miniSteez')
let fPaul = document.querySelector('#fullPaul')
let mPaul = document.querySelector('#miniPaul')

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')

let sections = [true, true, true]

fProjexx.addEventListener('click', swap)
fSteez.addEventListener('click', swap1)
fPaul.addEventListener('click', swap2)

function swap() {
    if (sections[0])  fadeToggle(fProjexx, mProjexx, 0)
    else fadeToggle(mProjexx, fProjexx, 0)
}
function swap1() {
    if (sections[1])  fadeToggle(fSteez, mSteez, 1)
    else fadeToggle(mSteez, fSteez, 1)
}
function swap2() {
    if (sections[2])  fadeToggle(fPaul, mPaul, 2)
    else fadeToggle(mPaul, fPaul, 2)
}

function fadeToggle(a, b, c) {
    let s;
    if(c == 0) s = swap
    else if(c == 1) s = swap1
    else if(c == 2) s = swap2
    $(a).fadeOut(500, function () {
        a.removeEventListener('click', s)
        $(b).fadeIn(500, function () {
            b.addEventListener('click', s)
        })
    })
    sections[c] = !sections[c]
}



// function init() {
//     body.style.display = 'none'
//     $(body).fadeIn(3000)
// }

// // call functions here
// init()


// functions
// function loadHome(){
//     img.setAttribute('style', 'display: block');
//     about.setAttribute('style', 'display: none');
//     contact.setAttribute('style', 'display: none');
//     music.setAttribute('style', 'display: none');
//     store.setAttribute('style', 'display: none');
// }


// on page load
// loadHome()