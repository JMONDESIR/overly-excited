let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray) {
        // Each time the for loop executes, you're going to add one more word to this string
        let buildMeUp = ""

        for (let i = 0; i < theWordArray.length; i++) {
                if (i % 3 === 0 && i !== 0) {
                        buildMeUp = buildMeUp + " " + theWordArray[i] + "!";
                } else {
                        buildMeUp = buildMeUp + " " + theWordArray[i];
                        console.log(buildMeUp);
                        // Print buildMeUp to the console
                }
        }
}
addExcitement(sentence)