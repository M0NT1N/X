let sum = 0;
let number;

while (true) {
    number = parseInt(prompt("Rəqəm daxil edin"));
    console.log("Daxil etdiyiniz rəqəm:", number);
    if (number >= 0) {
      sum += number;
    } else {
      break;
    }
}

console.log("Müsbət rəqəmlərin toplamı", sum);
