function MySlice(arr, start, end) {

    // я ввел столько условий, чтобы учесть все варианты входа start и end, протестировав сначала на обычном .slice(), кроме не цифр


    if (!start && !end || start == end || start > end) {
        return [];
    }

    let result = [];

    
    if (end) {
        for (;start < end; start++) {
            result.push(arr.at(start));
        }
    } else {
        if (start >= 0) {
            for (;start < arr.length; start++) {
                result.push(arr.at(start));
            }
        } else {
            for (let i = arr.length+start; i < arr.length; i++) {
                result.push(arr.at(i));
            } 
        }
    }

    return result;
}


function myIndexOf(arr, item, from) {
    i = from === undefined ? 0 : from < 0 ? Math.max(arr.length + from, 0) : from;


    for (; i < arr.length;i++) {
        if (arr[i] === item) {
            return i;
        } 
    }
    

    return -1;
}


function myIncludes(arr, item, from) {

    i = from === undefined ? 0 : from < 0 ? Math.max(arr.length + from, 0) : from;

    for (; i < arr.length;i++) {
        if (arr[i] === item) {
            return true;
        } 
    }
    
    return false;
}

console.log(myIndexOf([1, 2, 3, 4, 5], 4))