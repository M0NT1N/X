function TotalSum(input) {
    let sum = 0;
    if (!isNaN(parseInt(input)) && parseInt(input) % 2 === 0) {
      sum = parseInt(input);
    }
    return sum;
}

let total = 0;

while (true) {
    let result = prompt("Rəqəmi daxil edin.");
  
    if (result === null) {
      console.log("Cüt rəqəmlərin cəmi:", total);
      break;
    }
  
    let sum = TotalSum(result);
    total += sum;
}