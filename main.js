function fibsRec(n){
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
    let prev = fibsRec(n-1);
    return [...prev, prev[prev.length-1] + prev[prev.length-2]];
}

function mergeSort(sortArray){
    if (sortArray.length <= 1) return sortArray;
    let midpoint= Math.floor(sortArray.length/2);
    let low = mergeSort(sortArray.slice(0, midpoint));
    let high = mergeSort(sortArray.slice(midpoint));
    let merged = [];
    for (let i = 0, highIndex = 0, lowIndex = 0; i < sortArray.length; i++){
        if (highIndex >= sortArray.length - midpoint || low[lowIndex] < high[highIndex])
            merged.push(low[lowIndex++]);
        else merged.push(high[highIndex++]);
    }
    return merged;
}