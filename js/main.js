// cached elements
let h1 = document.querySelector('h1')
let img = document.querySelector('img')
let body = document.querySelector('body')
let audio = document.getElementById("myAudio")
let header = document.querySelector("#header")
let footer = document.querySelector("#tinyFooter")

let fProjexx = document.querySelector('#fullProjexx')
let mProjexx = document.querySelector('#miniProjexx')
let miniP = document.querySelector('#miniP')
let titleP = document.querySelector('#titleP')

let fSteez = document.querySelector('#fullSteez')
let mSteez = document.querySelector('#miniSteez')
let miniS = document.querySelector('#miniS')
let titleS = document.querySelector('#titleS')

let fPaul = document.querySelector('#fullPaul')
let mPaul = document.querySelector('#miniPaul')
let miniPA = document.querySelector('#miniPA')
let titlePA = document.querySelector('#titlePA')

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')

let sections = [true, true, true]

fProjexx.addEventListener('click', swap)
fPaul.addEventListener('click', swap1)
fSteez.addEventListener('click', swap2)
audio.loop = true

function swap() {
    if (sections[0]) fadeToggle(fProjexx, mProjexx, 0)
    else fadeToggle(mProjexx, fProjexx, 0)
}
function swap1() {
    if (sections[1]) fadeToggle(fPaul, mPaul, 1)
    else fadeToggle(mPaul, fPaul, 1)
}
function swap2() {
    if (sections[2]) fadeToggle(fSteez, mSteez, 2)
    else fadeToggle(mSteez, fSteez, 2)
}

function fadeToggle(a, b, c) {
    let s, y, z;
    if (c == 0) { s = swap; y = miniP; z = titleP }
    else if (c == 1) { s = swap1; y = miniPA; z = titlePA }
    else if (c == 2) { s = swap2; y = miniS; z = titleS }

    if (sections[c]) {
        $(a).fadeOut(500, function () {
            a.removeEventListener('click', s)
            $(b).fadeIn(500, function () {
                y.addEventListener('click', s)
                z.addEventListener('click', s)
            })
        })
    } else {
        $(a).fadeOut(500, function () {
            y.removeEventListener('click', s)
            z.removeEventListener('click', s)
            $(b).fadeIn(500, function () {
                b.addEventListener('click', s)
            })
        })
    }

    sections[c] = !sections[c]
}

let pause = true
// $(audio).animate({volume: 0}, 0);
document.getElementById("header").addEventListener("click", function () {
    if (pause) {
        audio.play();
        $(audio).animate({ volume: 1 }, 750);
        pause = false
    } else {
        $(audio).animate({ volume: 0 }, 500);
        setTimeout(function () {

            audio.pause();
        }, 500)
        pause = true
    }
});

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        e.preventDefault()
        if (pause) {
            audio.play();
            $(audio).animate({ volume: 1 }, 750);
            pause = false
        } else {
            $(audio).animate({ volume: 0 }, 500);
            setTimeout(function () {

                audio.pause();
            }, 500)
            pause = true
        }
    }
}

// 1075, 767

window.onkeydown = function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
};



$(fProjexx).click(function () {
    fadeScroll('#one')
});
$(miniP).click(function () {
    fadeScroll('#one')
});
$(titleP).click(function () {
    fadeScroll('#one')
});

$(fPaul).click(function () {
    fadeScroll('#two')
});
$(miniPA).click(function () {
    fadeScroll('#two')
});
$(titlePA).click(function () {
    fadeScroll('#two')
});

$(fSteez).click(function () {
    fadeScroll('#three')
});
$(miniS).click(function () {
    fadeScroll('#three')
});
$(titleS).click(function () {
    fadeScroll('#three')
});

function fadeScroll(zone) {
    console.log("outside: ", sections.toString())
    if (zone == '#one') {
        if (sections[1]) {
            $(fPaul).fadeOut(500)
            $(fPaul).fadeIn(500)
        } else {
            $(mPaul).fadeOut(500)
            $(mPaul).fadeIn(500)
        }
        $(header).fadeOut(500)
        $(header).fadeIn(500)
    } else if (zone == '#two') {
        if (sections[0]){
            $(fProjexx).fadeOut(500)
            $(fProjexx).fadeIn(500)            
        } else {
            $(mProjexx).fadeOut(500)
            $(mProjexx).fadeIn(500)
        }
        if (sections[2]){
            $(fSteez).fadeOut(500)
            $(fSteez).fadeIn(500)
        } else {
            $(mSteez).fadeOut(500)
            $(mSteez).fadeIn(500)
        }
    } else {
        console.log('hit: ', sections)
        if (sections[1]) {
            $(fPaul).fadeOut(500)
            $(fPaul).fadeIn(500)
        } else {
            $(mPaul).fadeOut(500)
            $(mPaul).fadeIn(500)
        }
        $(footer).fadeOut(500)
        $(footer).fadeIn(500)
    }
    setTimeout(() => {

        $('html,body').animate({
            scrollTop: $(zone).offset().top
        },
            'fast');
    }, 400)
}


// function init() {
body.style.display = 'none'
$(body).fadeIn(4000)
// }

