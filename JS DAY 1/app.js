// console.log("Hello SMIUANS");
// document.write("Hello World");
// alert("Hello World")
// prompt("Write Your Name", "Name");

var stdName = "Usama"
var fName = "Usman"

var cgpa = 3.55

// console.log(typeof cgpa);

// alert(cgpa)
// alert(stdName + " " + fName + " " + cgpa)


document.write("<h1>Hello</h1> <h2>Hello</h2>")
document.write(10 + 2 + "<br>")
document.write(10 - 2 + "<br>")
document.write(10 / 2 + "<br>")
document.write(10 * 2 + "<br>")
document.write(10 % 3 + "<br>")

// num = 10

// console.log(num)

// num++
// console.log(num)

// num--

// console.log(num)

//BODMAS

// Bracket
// Divide
// Multiply
// Add
// Subtract

// myExp = (10 + 2) * 3
// console.log(myExp)


// if (myExp >= 80) {
//     alert("Yes")
// }

// else if (myExp != 36) {
//     alert("Equal")

// }

// else {
//     alert("NO")
// }

// var age = -1;


// if (age > 0 || age < 18) {
//     alert("You are ineligible to cast the vote");
// }
// else {
//     alert("Welcome")
// }


var myArr = ['Farhan', 'Usman', 'Hamza', 'Iqra', 'Souhaib'];
var myArr1 = ["SMIU", "Madarsa"]
// console.log(myArr[0])
// console.log(myArr[1])
// console.log(myArr[2])
// console.log(myArr[3])
// console.log(myArr[4])

// myArr[1] = "Sibtain"

// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.push("Shahraiz")
// console.log(myArr)


// myArr.shift()
// console.log(myArr)

// myArr.unshift("Babar")
// console.log(myArr)


// myArr.splice(2, 1, "Farhan", "Souhaib")
// console.log(myArr)

// var myCopy = myArr.slice(0, 3)
// console.log(myCopy)


// for (var i = 0; i < myArr.length; i++) {

//     console.log(myArr[i].toLocaleUpperCase())
//     console.log(i + 1 + ":" + myArr[i])
// }


// for (var i = 0; i < myArr.length; i++) {

//     for (var j = 0; j < myArr1.length; j++) {
//         console.log(myArr[i] + " " + myArr1[j])
//     }

// }

// var myName = "Usama"
// console.log(myName.toLowerCase())


var sentence = "Usama Usman here , My Name is Usama Usman"
// var fname = sentence.indexOf("Usama Usman")
// var lname = sentence.lastIndexOf("Usama Usman")

// console.log(fname)
// console.log(lname)

// var fChar = fname.charAt(0)

// var myMsg = "hello"
// var myChar = myMsg.charAt(1)

// console.log(myChar)


// var correctName = sentence.replace(/Usama Usman/g, "Osama Usman")
// console.log(correctName)

// // console.log(Math.round(1.))


// var myNum = 1.78987

// console.log(Math.ceil(myNum))
// console.log(Math.floor(myNum))
// console.log(Math.random())


// // var std = +prompt("Your Age");
// // console.log(std)

// console.log(parseFloat("1.99999"))
// console.log(parseInt(1.99999))

var nowDate = new Date()


console.log("Full Time : ", nowDate)
console.log("Current : ", nowDate.getDate())
console.log("Current : ", nowDate.getDay())
console.log("Current : ", nowDate.getFullYear())
console.log("Current : ", nowDate.getHours())
console.log("Current : ", nowDate.getMonth())
console.log("Current : ", nowDate.getSeconds())


var dayName = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
var nameToday = dayName[nowDate.getDay()]
console.log(nameToday)


// var myYear = new Date("July 19, 1999")
// console.log(myYear)

// console.log((nowDate - myYear) / (1000 * 60 * 60 * 24))

nowDate.setDate(26)
console.log(nowDate)


var SouhaibQues = +prompt("Enter your Birth Year");
console.log(typeof SouhaibQues)











