// First Assigne Values
var varName = "Var_ALI";
let letName = "Let_ALI";
const constName = "Const_ALI";
let PossibleValue = "Declare & Assign Value";
//Getting Html Fields to show its values by JS
var varId, letId, constId, PossibleId;
varId = document.getElementById("var");
letId = document.getElementById("let");
constId = document.getElementById("const");
PossibleId = document.getElementById("Possible_Condition");
//Function for showing HTML values
const showVariables = (varName, letName, constName, PossibleValue) => {
  varId.innerHTML = `${varName}`;
  letId.innerHTML = `${letName}`;
  constId.innerHTML = `${constName}`;
  PossibleId.innerHTML = `${PossibleValue}`;
};
showVariables(varName, letName, constName, PossibleValue);
//After Reassigning Values

setTimeout(() => {
  varName = "Var_ReAssign_ALI";
  letName = "Let_ReAssign_ALI";
  PossibleValue = "ReAssign Value";
  // constName="const_ReAssign_ALI"; //Not Possible ?
  showVariables(varName, letName, null, PossibleValue);
}, 3000);
//After ReUse name bi Variables

setTimeout(() => {
  var varName = "Var_ReUse_variable-Name_ALI";
  // let letName = "Let_ReUse_variable-Name_ALI"; //Not Possible ?
  // const constName = "const_ReUse_variable-Name_ALI"; //Not Possible ?
  PossibleValue = "ReUse VariableName ";
  showVariables(varName, null, null, PossibleValue);
}, 6000);

// Primitive  Data type

// Number; 2983
// String; "ALI"
// Boolean; true false
// undefined;
// null;
// BigInt;

//get DataType and Show In HTML Feild
var DataType = document.getElementById("DataType");
function DataTypeshow(num, type) {
  DataType.innerHTML = `${num}= ${type}`;
}
var num = 29;
DataTypeshow(num, "Number");
setTimeout(() => {
  num = "ALI";
  DataTypeshow(num, "String");
}, 5000);
setTimeout(() => {
  num = true;
  DataTypeshow(num, "Boolean");
}, 6000);

// Non Primitive Data Type

// object;
var object = {
  name: "Ali",
  age: 22,
  gender: "male",
  city: "Lahore",
  address: [(city = "Okara"), (house = 5)],
};
console.log("Object Starts Here=>" + object.name);
for (const key in object) {
  const element = object[key];
  // console.log(element);
}
// array;

var array = [1, 2, 3, 4, 5, 6, "Ali ", "Hamza"];
console.log("Array Start Here=>" + array[6]);
array.forEach((element) => {
  // console.log(element);
});

//Operators in JS

// Arthematic Operator

var a = 10;
var b = 20;
var c = a + b;
document.getElementById("AO").innerHTML = `${a} +${b}=${c}`;
// Assignment Operator

var name = "ALI HAMZA";

// Conditional Operator

if (a > 10) {
  // console.log(a);
  document.getElementById("CO").innerHTML = `${a} >10 = ${a}`;
} else if (a < b) {
  // console.log(b);
  document.getElementById("CO").innerHTML = `${a} <${b}=${b}`;
}

// Logical Operator

if (a != 5 || a > 20) {
  // console.log("OR Operator");
  document.getElementById("LO").innerHTML = `${a} !=5 || ${a}<20  =${a}`;
}

function user(v) {
  // console.log("Hello " + v);
  document.getElementById("FV").innerHTML = `Hello ${v}`;
}

setTimeout(() => {
  user("ALI");
}, 2000);
setTimeout(() => {
  user("Hamza");
}, 3000);
setTimeout(() => {
  user("ALI_HAMZA");
}, 6000);

//Loop
for (var i = 0; i < 10; i++) {
  // console.log(i);
  document.getElementById("FL").innerHTML = `${i}`;
}

var i = 0;
while (i <= 10) {
  // console.log(i);
  document.getElementById("WL").innerHTML = `${i}`;
  i++;
}

var btn_INC = document.getElementById("btn_INC");
var btn_DEC = document.getElementById("btn_DEC");
var btn_Reset = document.getElementById("btn_Reset");
var counterShow = document.getElementById("counter");
var counter = 0;

const EventHandler = (o) => {
  if (o === "INC") {
    document.querySelector("#body").style.backgroundColor = "gray";
    counter++;
  } else if (o === "DEC") {
    counter--;
    document.querySelector("#body").style.backgroundColor = "yellow";
  } else {
    counter = 0;
    document.querySelector("#body").style.backgroundColor = "lightGreen";
  }
  // console.log(counter);
  counterShow.innerHTML = `${counter}`;
  counterShow.style.color = `blue`;
};

btn_DEC.addEventListener("click", function () {
  EventHandler("DEC");
});
btn_INC.onclick = function () {
  EventHandler("INC");
};
btn_Reset.onclick = function () {
  EventHandler("RESET");
};
