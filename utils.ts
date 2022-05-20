/* We need to shuffle, and this isn't built in in JavaScript, which
is annoying. This shuffle comes from stackoverflow:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}