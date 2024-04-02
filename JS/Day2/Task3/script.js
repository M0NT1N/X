function Pairs(list, target) {
    const pair = [];

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === target) {
                pair.push([list[i], list[j]]);
            }
        }
    }
    
    return pair;
}

const numbersInput = prompt("Rəqəmləri vergül ilə girin:");
const targetSum = parseInt(prompt("Cəmi olacaq rəqəmi girin:"));
const numbers = numbersInput.split(",").map(Number);
const result = Pairs(numbers, targetSum);
console.log("Cəmi olan ədədlər:", result);