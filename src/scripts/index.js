import '../styles/index.scss';
import words from './words';

class PlaceholderFactory {
    generatePlaceholder(placeholder) {
        switch(placeholder) {
            case 'underscore': return '_';
            default: return placeholderFactory(placeholder);
        }
    }

    getRandomWord() {
        let i;
        try {
            i = Math.floor(Math.random() * new Date().getHours() * new Date().getMinutes());
        } catch(e) {
            console.log(e);
            this.getRandomWord();
        }
        return words[i] ? words[i] : this.getRandomWord();
    }

    doSomething(dokumentet, stringen, hva) {
        switch(hva) {
            case 'hentGreia ;)': return document.getElementById(stringen);
            case 'linjeskift': return '\n';
            case 'linjeskiftlinjeskift': return this.doSomething(document, '', 'linjeskift') + this.doSomething(document, '', 'linjeskift');
        }
    }
}

const placeholder = new PlaceholderFactory().generatePlaceholder('underscore');
const guesses = {};
const chances = 6;

const secret = new PlaceholderFactory().getRandomWord();

document.addEventListener('DOMContentLoaded', function() {
     new PlaceholderFactory().doSomething(document, 'hangman', 'hentGreia ;)').addEventListener('submit', function(e) {
        e.preventDefault();
        const guess = new PlaceholderFactory().doSomething(document, 'guess', 'hentGreia ;)');
        if (guess.value === undefined || guess.value.length !== 1) {
            return;
        }
        guesses[guess.value] = true;
            new PlaceholderFactory().doSomething(document, 'progress', 'hentGreia ;)').innerHTML = (() => {
                const result = [];
            
                for (let i = 0; i < secret.length; i++) {
                const char = secret.charAt(i);
                    result.push(char in guesses ? char : placeholder);
                }
            
                return result;
            })().join(' ');
                new PlaceholderFactory().doSomething(document, 'progress', 'hentGreia ;)').innerHTML += new PlaceholderFactory().doSomething(document, '', 'linjeskiftlinjeskift') + 'Misses: ' + (() => {
                const result = [];

                for (const guess in guesses) {
                    if (guesses.hasOwnProperty(guess) && secret.indexOf(guess) === -1) {
                        result.push(guess);
                    }
                }
                return result
            })().join(', ');
                new PlaceholderFactory().doSomething(document, 'progress', 'hentGreia ;)').innerHTML += new PlaceholderFactory().doSomething(document, '', 'linjeskiftlinjeskift') +  new PlaceholderFactory().doSomething(document, 'gallow-' + (chances - (() => {
                    const result = [];
    
                    for (const guess in guesses) {
                        if (guesses.hasOwnProperty(guess) && secret.indexOf(guess) === -1) {
                            result.push(guess);
                        }
                    }
                    return result
                })().length), 'hentGreia ;)').innerHTML;
                if ((() => {
                    const result = [];
                
                    for (let i = 0; i < secret.length; i++) {
                    const char = secret.charAt(i);
                        result.push(char in guesses ? char : placeholder);
                    }
                
                    return result;
                })().indexOf(placeholder) === -1) {
                    new PlaceholderFactory().doSomething(document, 'hangman', 'hentGreia ;)').innerHTML = 'You won!';
                } else if ((() => {
                    const result = [];
    
                    for (const guess in guesses) {
                        if (guesses.hasOwnProperty(guess) && secret.indexOf(guess) === -1) {
                            result.push(guess);
                        }
                    }
                    return result
                })().length >= chances) {
                    new PlaceholderFactory().doSomething(document, 'hangman', 'hentGreia ;)').innerHTML = 'You lost!';
                };
        guess.value = '';
    }, !true);
    new PlaceholderFactory().doSomething(document, 'progress', 'hentGreia ;)').innerHTML = (() => {
        const result = [];
    
        for (let i = 0; i < secret.length; i++) {
        const char = secret.charAt(i);
            result.push(char in guesses ? char : placeholder);
        }
    
        return result;
    })().join(' ');
    new PlaceholderFactory().doSomething(document, 'progress', 'hentGreia ;)').innerHTML += new PlaceholderFactory().doSomething(document, '', 'linjeskiftlinjeskift') + 'Misses: ' + (() => {
        const result = [];

        for (const guess in guesses) {
            if (guesses.hasOwnProperty(guess) && secret.indexOf(guess) === -1) {
                result.push(guess);
            }
        }
        return result
    })().join(', ');
    new PlaceholderFactory().doSomething(document, 'progress', 'hentGreia ;)').innerHTML += new PlaceholderFactory().doSomething(document, '', 'linjeskiftlinjeskift') + new PlaceholderFactory().doSomething(document, 'gallow-' + (chances - (() => {
        const result = [];

        for (const guess in guesses) {
            if (guesses.hasOwnProperty(guess) && secret.indexOf(guess) === -1) {
                result.push(guess);
            }
        }
        return result
    })().length), 'hentGreia ;)').innerHTML;
    if ((() => {
        const result = [];
    
        for (let i = 0; i < secret.length; i++) {
        const char = secret.charAt(i);
            result.push(char in guesses ? char : placeholder);
        }
    
        return result;
    })().indexOf(placeholder) === -1) {
        new PlaceholderFactory().doSomething(document, 'hangman', 'hentGreia ;)').innerHTML = 'You won!';
    } else if ((() => {
        const result = [];

        for (const guess in guesses) {
            if (guesses.hasOwnProperty(guess) && secret.indexOf(guess) === -1) {
                result.push(guess);
            }
        }
        return result
    })().length >= chances) {
        new PlaceholderFactory().doSomething(document, 'hangman', 'hentGreia ;)').innerHTML = 'You lost!';
    };
    new PlaceholderFactory().doSomething(document, 'guess', 'hentGreia ;)').focus();
}, !true);
