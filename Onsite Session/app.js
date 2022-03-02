var nm1 = 23
var nm2 = 13

console.log("Subtract = ", nm1 - nm2)
console.log("Add = ", nm1 + nm2)
console.log("Multiply=", nm1 * nm2)
console.log("Divide =", nm1 / nm2)
console.log("Reminder=", nm1 % nm2)
console.log("Power=", nm1 ** nm2)
// console.log(nm1 - nm2)

var num1 = 10;
console.log(num1);

// num1 = num1 + 1

num1--
console.log((3 + 8) * 4)

var Name = "Afan"
console.log("Welcome ", Name)

// var fname = prompt("Student Name?", "Your First Name");
// var lname = prompt("Student Name?", "Your Last Name");

// alert(fname + " " + lname)


// if (fname == "Vinod") {
//     alert("Hello")
// }
// else if (fname == "Hamza" || lname == "Sarmad") {
//     alert("Shadi Mubarak" + lname)
// }

// else {
//     alert("bye")
// }

var cities = ["Atlanta", "Baltimore", "Chicago"];
var cities1 = ["Denver", "Los Angeles", "Seattle"]
// cities.shift()
// cities.unshift("karachi")
var allCities = []


// cities.splice(1, 0, "pig", "duck", "emu");
var newArr = cities.slice(0, 1)
console.log(cities)
console.log(newArr)

for (var i = 0; i < cities.length; i++) {
    for (var j = 0; j < cities1.length; j++) {
        allCities.push(cities[i] + cities1[j])

    }
}

// console.log(cities.toLowerCase())
// console.log(cities.toUpperCase())

var name = "Osama"
console.log(name.toLowerCase())


for (i = 0; i < cities.length; i++) {
    console.log(cities[i].toLowerCase())
}

// var firstChar = fname.slice(0, 1);
// var firstChar = fname.charAt(3)
// var myIndex = 

// var myName = prompt("Name");
// var myIndex = prompt("Index");

// console.log(myName.indexOf(myIndex))

// console.log(myName.replace('Usama', 'Vinod'))
// console.log(Math.round(4.6))
// console.log(Math.round(4.53))
// console.log(Math.round(4.3))
// console.log(Math.round(4.67))
// console.log(Math.round(4.1))

console.log(Math.round(.0678437))
console.log(Math.ceil(3.000001));
console.log(Math.floor(3.999999))

var bigDecimal = Math.random();
console.log((Math.ceil(bigDecimal * 4534) / 2))

var profit = "200" * "150";
console.log(profit)

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// var qualifyingAge1 = parseFloat(currentAge) + 1;



// console.log(qualifyingAge)
// console.log(qualifyingAge1)

var integerString = "24.789"
var num = Number(integerString);
console.log(num)

var numberAsNumber = 1234.809808098
var numberAsString = numberAsNumber.toString()

console.log(numberAsString)
console.log(numberAsNumber.toFixed())





// console.log(firstChar)
// alert(fname.charAt(3))

// alert(cities[4])