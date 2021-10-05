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

one.addEventListener('click', swap)

function swap() {
    if (sections[0])  fadeToggle(fProjexx, mProjexx, 0)
    else fadeToggle(mProjexx, fProjexx, 0)
}

function fadeToggle(a, b, c) {
    $(a).fadeOut(500, function () {
        one.removeEventListener('click', swap)
        $(b).fadeIn(500, function () {
            one.addEventListener('click', swap)
        })
    })
    sections[c] = !sections[c]
}



function init() {
    body.style.display = 'none'
    $(body).fadeIn(3000)
}


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