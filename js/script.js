
//        Task - 1

//----------------------------------------------------------------------------

// function sum (x,y) {
//     if ((x+y)=100) {
//         console.log("Сумма чисел равна 100");
//     } else {
//         console.log("Сумма чисел меньше или больше 100");
//     }
// }


// console.log(sum(30,70));



//------------------------------------------------------------------------------


// Task - 2


let month = 3
let amount = 1000
let remainder = amount%month;
let x = credit(month,amount);

function credit () {
    let normalAmount = amount-remainder;
    let monthAmount = normalAmount/month
    return monthAmount
}

let i = 1
for (; i < month; i++) {
    console.log(i + ". Месяц = " + x) 
    if (i == month) breake;
}
console.log(i + ". Месяц = " + (x + remainder)) 

