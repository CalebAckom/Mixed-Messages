const { type } = require("os");

const note = ['C', 'C#/Db', 'D', 'Eb', 'E', 'F', 'F#/Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const chord = ['maj9', 'naj9#11', 'm11', 'm13', '13', '13b9', '9#11', '7#9b13', '7sus4b9', 'dim7', 'm7b5'];

const mixed = (type) =>
{
    let num = Math.floor(Math.random() * type.length);
    return type[num]
};

console.log('Use the melody note or pitch ' + mixed(note) + ' with the chord ' + mixed(note) + mixed(chord));