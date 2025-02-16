function sumNumbers(obj) {
    let result = 0;

    const values = Object.values(obj); 

    for (const value of values) {
        if (typeof value === "number") {
            result += value
        }
    }

    return result;
}


function printSortedKeys(obj) {
    const entries = Object.entries(obj);

    const numericEntries = entries.filter(([key, value]) => typeof value === 'number');

    for (let i = 0; i < numericEntries.length - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < numericEntries.length; j++) {
            if (numericEntries[j][1] > numericEntries[maxIndex][1]) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            [numericEntries[i], numericEntries[maxIndex]] = [numericEntries[maxIndex], numericEntries[i]];
        }
    }

    return numericEntries.map(([key]) => key);
}




console.log(printSortedKeys({
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7
}))


