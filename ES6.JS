console.log("Hello, ES6!");

function add(a=20,b=10){
    console.log(a+b)

};
add(30,40);
add(100);
add();


function signin(user =  "guest"){
    console.log('welcome'+  user);
};
signin();
signin("sana");

let add = () =>  console.log("hello world fr");
add();



let number = (num) => { if(num > 0){
    console.log("Positive");
}else {
    console.log("Negative");
}

}
number(10);

//class //

class bike{
    constructor(model_name,color,price){
        this.model_name = model_name;
        this.color = color;
        this.price = price;
    }
}
let bike1 = new bike("pulsar","black",100000);
let bike2 = new bike("Honda","red",80000);
let bike3 = new bike("Hero","Blue",90000);
let bike4 = new bike("yamaha","brown",70000);
console.log(bike3.price);


//Other Methods  //

class bike{
    constructor(model_name,color,price){
        this.model_name = model_name;
        this.color = color;
        this.price = price;

    }
    bikeDetails(){
        console.log("bike:" + this.model_name);
        console.log("color:" + this.color);
        console.log("price:" + this.price);
        

}
showPrice(){
    console.log("price of:" + this.model_name+"is" + this.price);
}

}


let bike1 = new bike("pulsar","black",100000);
let bike2 = new bike("Honda","red",80000);
let bike3 = new bike("Hero","Blue",90000);
let bike4 = new bike("yamaha","brown",70000);


bike2.bikeDetails();


bike1.showPrice();


// short hand method //

class sportsBike extends bike{

}
bike3.bikeDetails();


// temlate Litteral //

var name = "john";
var age = 30;
var city = "New York";


console.log( `my name is ${name} and i am ${age} years old and i live in ${city}`);

var a = 10;
var b = 20;
console.log(` sum of a and b is ${a + b}`);

console.log(` my name
     is john,
    and i am a software developer`);

    //for of loop //

    var arr1 = ["onion","cabbage","tomato","potato"];
for(var x of arr1){
    console.log(x +" is a vegetable");
}


var num = [10,20,30,40,50,];

var str = "hello world";
for(var x of str){
    console.log(x + "ing");
}ode

// rest parameters //

function sum(num1,num2, ...nums){
    let sum = 0
    for(let x of nums){
        sum += x;

    }
    console.log(num1+num2+sum);

}
sum(10,20,30,40,50);

//spread operators //


let ar1 = [10,20,30];
let ar2 = [40,50,60];
var ar3 = [...ar1,...ar2,70]; // push

console.log(...ar1,...ar2,...ar3);

let ar1 = [10,20,30];
let ar2 = [40,50,60];
var ar3 = [...ar1]; // push

console.log(ar3); // [10,20,30]



// array destructuring //


let arr = ["kerala","malayalam",10000];
let [state, language, population] = arr;

console.log(language);


let arr = ["kerala","malayalam",10000,["kochi","trivandrum","kollam"]];
let [state, languge, population,[a1,a2,a3]] = arr;

console.log(languge);
console.log(a1);
console.log(a2);
console.log(a3); 

// Object destructuring //

let obj1 = {
    name : "john",
    age : 30,
    city : "new york",
    list:{
        a1 : "apple",
        a2 : "banana",
        a3 : "orange"
    }

}
let {name, age, city, list:{a1,a2,a3}} = obj1;

console.log(name);
console.log(age);
console.log(city);
console.log(a1);
console.log(a2);
console.log(a3);


















