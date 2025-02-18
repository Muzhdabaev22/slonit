function FirstUpperLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}


function stringСlipping(string) {
    if (string.length <= 40) {
        return string;
    }

    string = string.slice(0,40);

    let index = 39

    while (isLetter(string[index])) {
        index--;
    }

    string = string.slice(0, index);    

    
    return string + '...';
}

function isLetter(char) {
    return char.toUpperCase() !== char.toLowerCase();
}



function substringTwoStrings(string1, string2) {
    let length1 = string1.length;
    let length2 = string2.length;
    if (length1 > length2) {
        
        for (let index = 0; index <= length1 - length2; index++) {
            if (string2 === string1.slice(index, index + length2)) {
                return true;
            }
        }

    } else if (length1 < length2) {
        for (let index = 0; index <= length2 - length1; index++) {
            
            if (string1 === string2.slice(index, index + length1)) {
                return true;
            }
        }
    } 
    
    return false;
}

console.log(substringTwoStrings("ba", "bababa"))