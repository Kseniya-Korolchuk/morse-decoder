const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let array = expr.match( /.{1,10}/g );
    let words = array.map(el => el.replace(/0/g, ' ').trimStart().replace(/ /g, '0'));
    let morse = words.map(el => el.replace(/10/g, '.').replace(/11/g, '-').replace('**********', ' '));
    let sentence = morse.map (el => {
        for (let key in MORSE_TABLE) {
          if (el == key) {
            return MORSE_TABLE[key];
          } 
          else if (el == ' ') {
            return el;
          }
        }
    })
    return sentence.join('');
} 

module.exports = {
    decode
}