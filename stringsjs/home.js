
// STRING STRING STRING
let fruit="orange";
let colcnFruits="mango,banana,apple";
console.log(fruit.slice(1,5));
console.log(fruit.replace('range',' bikram'));
console.log(fruit.charAt(0));
console.log(fruit.toUpperCase());
console.log(fruit.split('')); //split by charactrs.. form an array of 6 characters.
console.log(colcnFruits.split(',')); //slplit by items ini the variable ssigned...

//  ARRAY ARRAY ARRAY
let fruits=['mango','banana','apple','pineapple'];
fruits=new Array('mango','banana','apple','pineapple');
// alert(fruits[2]);
console.log(fruits[2]);//access value at diff index

fruits[0]='grapes';
console.log(fruits);

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string',fruits.toString());
console.log(fruits.join('-:-')); //it joins the elements with the given value attach it with -:-  inside (array) ,nythinng u enter;//
console.log(fruits.pop()); //it removes last element from (array)
console.log(fruits.push('berries'),fruits); //it adds elements or appends at last in an  (array//
fruits[fruits.length]='new fruit'; //it works same as push cons in an (array)
console.log(fruits);
fruits.shift(); //remove itms from start of front of an (array)
console.log(fruits);
fruits.unshift('kiwi'); //add new items to an (array)
console.log(fruits);

let vegetables=['cowli','potato','tomato'];
let allgroceries=fruits.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.slice(1,5)); //from index 1 includng 1 and upto index 5 excluding 5
console.log(allgroceries.reverse());
console.log(allgroceries.sort());

let numbers=[1,3,4,7,9,23,45,67,91,12,13,10,5,100,293,2057,03,08];
console.log(numbers.sort(function(a,b){
    return a-b; ///this function sort the array numbers in ascending order,,..
}));
console.log(numbers.sort(function(a,b){
    return b-a;
}));
let emptyArray=[];
for(let i=0;i<=10;i++){
    emptyArray.push(i);
}
console.log(emptyArray);

//   ------------------commmon array methods finished here---------------------

//      OBJECTS IN JAVASCRIPT 

let student={
    firstName:'Bikram',
    lastName:'Gyawali',
    age:21,
    weight:59,
    stsudentInfo:function(){
        return this.firstName +  " " +this.lastName;
    }
}
console.log(student.firstName);
student.firstName='Bicky';
console.log(student.firstName);
student.weight++;
console.log(student.weight);
console.log(student.stsudentInfo());






                          //  conditional ,CONTROL,IF ELSE statemnt ,//
 //below line is commented 
//  var age=prompt("What is your age bro?");
 /*if(age<18 || age>35){
     status ="get out quitely!!!";
     console.log(status);
 }else{
    status="you are welcome bicky bro!!!";
    console.log(status);
 }   */                      







 /// using switch case ;)

 switch(0){
    case 0:
    text = 'weekend';
    break;
    case 5:
    text = 'weekend';
    break;
    case 6:
    text = 'weekend';
    break;
  default:
    text = 'weekday';

 }
 console.log(text);