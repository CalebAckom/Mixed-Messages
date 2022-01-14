const note = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const chord = ['maj9', 'maj9#11', 'm11', 'm13', '13', '13b9', '9#11', '7#9b13', '7sus4b9', 'dim7', 'm7b5'];

const randomSelect= (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

let melodyNote1 = randomSelect(note);

console.log(`Start melody on note: ${melodyNote1}`);