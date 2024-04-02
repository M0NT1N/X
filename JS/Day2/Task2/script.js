function Numbers(number) {
    var list = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            list.push(i);
        }
    }
    return list;
}

function Main(number) {
    var list = Numbers(number);
    if (list.length > 2) {
        console.log(number + " ədədi sadə deyil, bölənləri: " + list);
    } else {
        console.log(number + " ədədi sadədir");
    }
}

var number = prompt("Bir rəqəm girin:");
number = parseInt(number);
Main(number);