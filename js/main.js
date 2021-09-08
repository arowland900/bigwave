// cached elements
var h1 = document.querySelector('h1')
var img = document.querySelector('img')

var music = document.getElementById('music')
var store = document.getElementById('store')
var contact = document.getElementById('contact')
var about = document.getElementById('about')

var musLink = document.getElementById('musLink')
var strLink = document.getElementById('strLink')
var conLink = document.getElementById('conLink')
var abtLink = document.getElementById('abtLink')

// event listeners
h1.addEventListener('click', loadHome)
abtLink.addEventListener('click', loadAbout)
conLink.addEventListener('click', loadContact)
musLink.addEventListener('click', loadMusic)
strLink.addEventListener('click', loadStore)

// functions
function loadHome(){
    img.setAttribute('style', 'display: block');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
    music.setAttribute('style', 'display: none');
    store.setAttribute('style', 'display: none');
}
function loadAbout(){
    img.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: block');
    contact.setAttribute('style', 'display: none');
    music.setAttribute('style', 'display: none');
    store.setAttribute('style', 'display: none');
}
function loadContact(){
    img.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: block');
    music.setAttribute('style', 'display: none');
    store.setAttribute('style', 'display: none');
}
function loadMusic(){
    img.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
    store.setAttribute('style', 'display: none');
    music.setAttribute('style', 'display: block');
}
function loadStore(){
    img.setAttribute('style', 'display: block');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
    music.setAttribute('style', 'display: none');
    store.setAttribute('style', 'display: block');
}

// on page load
loadHome()