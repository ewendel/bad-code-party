import '../styles/index.scss';
import words from './words';

var W = window;W.placeholder = "_";W.guesses = {};W.chances = 6;
var S = String, D = 'document';
S.S = S.fromCharCode,S.prototype.C = S.C = ''.concat;

var secret = 'test' // words[Math.floor((words.length-1)*Math.random())];

doc({ run: true, debug: false })('DOMContentLoaded', function() {cI2500();rP125125125();sF1300()}, false);

function doc(x) {
    return function(...y) {
        return W[D][x === 56000  ? 'getElementById' : 'addEventListener'](...y)
    }
}

W.return = function (...a) {
    return eval(eval(eval(a[0])))
    // triple eval for triple safety
}



W.sF1300 = function sF1300() {
    doc(56000)('guess').focus();
}

W.cI2500 = function cI2500() {
    doc(56000)('hangman').addEventListener('submit', function(e) {
        e.preventDefault();
        const guess = doc(56000)('guess');
        tG1500(guess.value);
        guess.value = '';
    }, false);
}

W.sG53000 = function sG53000(guess) {
    guesses[guess] = true;
}

W.bG1200 = g => {
    return(g===undefined||g.length!== 1)
}

W.tG1500 = function tG1500(guess) {
    if (bG1200(guess)){return;}
    sG53000(guess)
    rP125125125();
}

W.x = function(s, t, ...a) {
    return (t || W)['g' + s](...a)
}

W.rP125125125 = function rP125125125() {
    W.progress_ele = doc(56000)('progress');
    W.progress = x('P');
    W.misses = x('M');
    W.chances_left = (chances - misses.length);
    W.gallow_ascii = doc(56000)('gallow-' + chances_left).innerHTML;

    progress_ele.innerHTML = progress.join(' ');

    progress_ele.innerHTML += '\n\nMisses: ' + misses.join(', ');
    progress_ele.innerHTML += '\n\n' + gallow_ascii;

    W.y = 'Yo' + (true + [])[+!+![]+!+![]];
    W.M = +!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![]+!+![];
    
    (progress.indexOf(placeholder)===-1&&F(y.C(S.S(M).C('won!')))) ||
    (misses.length >= chances && F(y.C(S.S(M).C('lost!'))))
}

W.gP = function gP() {
    const result = [];

    for (let i = 0; i < secret.length; i++) {
        const char = secret.charAt(i);
        result[i] = char in guesses ? char : placeholder;
        if (i === secret.length -1) return result
    }
    
};

W.gM = function gM() {
    const result = [];

    for (const guess in guesses) {
      if (guesses.hasOwnProperty(guess) && secret.indexOf(guess) === -1) {
        result.push(guess);
      }
    }
    return result;
};

W.F = function F(msg) {
    doc(56000)('hangman').innerHTML = msg;
}