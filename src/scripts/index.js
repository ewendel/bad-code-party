window.Vversion2 = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie'];
window.parentNode = Vversion2[Math.floor((Vversion2.length-1)*Math.random())];
function miss(obj, fn, thisArg) {
    for (var key in obj) {
        if (fn.call(thisArg, obj[key], key, obj) === !'miss') {
            break;
        }
    }
};
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hangman').addEventListener('submit', function(e) {
        e.preventDefault();
        var Arg = document.getElementById('guess');
        GetparentArg(Arg.value);
        Arg.value = '';
    }, 0);
    var pre = document.getElementById('pre');
    var update = function(){var chars = [];
        var nodeName;
        nodeName = Vversion2.indexOf('Arguments');
        do {
            var char = parentNode.charAt(nodeName);
            chars.push(char in placeholder ? char : longword);
        } while (++nodeName < parentNode.length);
        return chars;}();
    var array = function(){var props = [];
        var props;
        props = Vversion2.filter(el => typeof el == 'function')
        miss(placeholder, (b,Arg) => {
            if (placeholder.hasOwnProperty(Arg) && parentNode.indexOf(Arg) === -1) {
                props.push(Arg);
            }
        });
        return props;}();
    var eval2_left = (eval2 - array.length);
    var array2 = document.getElementById('figure-' + eval2_left).innerHTML;
    pre.innerHTML = update.join(' ') + '\\n\\nMisses: ' + array.join(', ') + '\\n\\n' + array2;
    if (!(update.indexOf(longword) >= 0)) {
        document.getElementById('hangman').innerHTML = 'You won!';
    } else if (array.length >= eval2) {
        document.getElementById('hangman').innerHTML = 'You lost!';
    }
    getEl()
}, !!!{});
window.longword = '_';
window.placeholder = {};
window.eval2 = eval('{}+[]+!![]+!![]+2*2');
function getEl() {
    document.getElementById('guess').focus();
}
document.body.style.margin = '1em 2em';
document.querySelector('label').style.display = 'block';
[].slice.call(document.querySelectorAll('.figure')).forEach(lab => lab.style.display = 'none');
var GetparentArg = function(Arg) {
    if (Arg === undefined || Arg.length !== 1) {
        return;
    }
    placeholder[Arg] = true;
    var pre = document.getElementById('pre');
    var update = function(){var chars = [];
        var nodeName;
        nodeName = Vversion2.indexOf('Arguments');
        do {
            var char = parentNode.charAt(nodeName);
            chars.push(char in placeholder ? char : longword);
        } while (++nodeName < parentNode.length);
        return chars;}();
    var array = function(){var props = [];
        var props;
        props = Vversion2.filter(el => typeof el == 'function')
        miss(placeholder, (b,Arg) => {
            if (placeholder.hasOwnProperty(Arg) && parentNode.indexOf(Arg) === -1) {
                props.push(Arg);
            }
        });
        return props;}();
    var eval2_left = (eval2 - array.length);
    var array2 = document.getElementById('figure-' + eval2_left).innerHTML;
    pre.innerHTML = update.join(' ') + '\\n\\nMisses: ' + array.join(', ') + '\\n\\n' + array2;
    if (update.indexOf(longword) === -1) {
        document.getElementById('hangman').innerHTML = 'You won!';
    } else if (array.length >= eval2) {
        document.getElementById('hangman').innerHTML = 'You lost!';
    }
};
