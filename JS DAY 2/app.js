// function abc(name, last) {
//     alert("Hello There " + name + last)
// }

// abc()

// abc("Usama", "Usman")

// function anyValue(myVal) {
//     var fun; //local variable

//     if (myVal > 50) {
//         fun = 100
//     }
//     else {
//         fun = 0
//     }

//     return fun

// }

// var funVal = anyValue(70); //global variable
// console.log(funVal)
// console.log(fun)

// myDay = prompt("Enter the Day");

// switch (myDay) {
//     case "Sat":
//         alert("Its Holiday");
//         break;

//     case "Sun":
//         alert("Its Picnic Time");
//         break;

//     default:
//         alert("Kaam Kaam aur Bas Kaam")

// }

var i = 5;

// while (i < 3) {
//     console.log(i);
//     i++;
// }

do {
    console.log("Yehh raha : ", i)
    i++
} while (i < 3)

function myFunc() {
    // alert('Hello')

    myTxt = document.getElementById('txt').value;
    console.log(myTxt)

}

function Hamza() {
    var city;
    var code = document.getElementById('zip').value;
    // console.log(code)

    switch (code) {
        case "12345":
            // alert("Its Holiday");
            city = "Karachi"
            break;

        case "23456":
            // alert("Its Picnic Time");
            city = "Lahore"
            break;
    }

    document.getElementById('city').value = city
}


function readMore() {
    var defaultText = document.getElementById('myPara').innerHTML;

    var ourText = "lorem epsum balahhahahkahsjkhdjkhsckhksh"

    document.getElementById('myPara').innerText = defaultText + ourText;
    console.log(defaultText)

}

function genList() {
    var myList = document.getElementById('myList');
    var newList = "<ol>    <li>hello</li>    <li>hi</li>    <li>bye</li>    <li>tata</li></ol>"
    console.log(myList)
    document.getElementById('myList').innerHTML = newList
}


// document.getElementById('myPara').style.color = "red"
var lis = document.getElementsByTagName('li');

// console.log(lis[2])

var listtt = document.getElementById('list1');
// console.log(listtt.childNodes[2].previousSibling)


function msgSend() {

    var givenText = document.getElementById('txt').value;
    var box = document.getElementById('id1');
    var mypara = document.createElement('p');
    var myText = document.createTextNode(givenText);

    mypara.appendChild(myText);
    box.appendChild(mypara)

}