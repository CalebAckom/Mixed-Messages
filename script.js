const note = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const chord = ['maj9', 'maj9#11', 'm11', 'm13', '13', '13b9', '9#11', '7#9b13', '7sus4b9', 'dim7', 'm7b5'];
const noteValue = ['Whole', 'Half', 'Quarter', 'Sixth', 'Eighth', 'Sixteenth'];

const randomSelect= (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

const genChordProgression = () => {
    let progressArray = [];
    for (let i = 0; i < 4; i++) {
        progressArray.push(randomSelect(note) + randomSelect(chord));
    }
    return progressArray.join(' -> ');
}
// Generates tempo between 60 - 180BPM 
const generateTempo = () => {
    let tempo = Math.abs(Math.floor(Math.random() * (180 - 60 + 1) + 60));
    return tempo;
}

const generateNoteValue = () => {
    let randomNoteValue = [];
    for (let i = 0; i < 4; i++) {
        randomNoteValue.push(randomSelect(noteValue));
    }
    return randomNoteValue.join(' -> ');
}
let melodyNote1 = randomSelect(note);
let chordProg1 = genChordProgression();
let tempo1 = generateTempo();
let noteValue1 = generateNoteValue(noteValue);

console.log('Melody and Chord Composition');
console.log('============================');
console.log(`Using tempo: ${tempo1} BPM`);
console.log(`Starting melody on note: ${melodyNote1} \nWith chord progression: ${chordProg1}`);
console.log(`With note values      : ${noteValue1}`);
