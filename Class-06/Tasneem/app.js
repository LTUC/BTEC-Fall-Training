console.log("I am a live");
// for comments
// Data type i js primitiv(number,String , Boolean (true , false) , undifined (غير محدد بقيمه), null(have data without values) , symbole) 
// nonprimitive (objects , arrays , functions ,)
//loosly type / dinamic (can change the type of varyable ) 
// declear variable create it assign give it value

let name ="Tasneem";
let age=21;
let isHappy=true;
console.log( name ,age ,isHappy);
//name عليها خط كلمة محجوزة بشتغل ما بعطيني ايرور
//camelCase   .  PascalCase   .طرق تسميه الvariables
//popup boxes
// aleart :بدي اعطي معلومه ل يوزر 
// alert("welcom to our wesite");
//confirm
//confirm("Do you want to hear a job"); حطيتو تحت ل خزن القيمة
let useInput=confirm("Do you want to hear a job");
console.log(useInput);
if(useInput){
    alert("taxi is like the sun , it is not there when ou");
}
//prampt بدي يوزر يدخل داتا
let userAge=prompt("how old are you?")
console.log(userAge);
if(userAge <18){
    alert("Never too young to learn js ");
}
else{
    alert("Never too  old to learn js "); 
}

// array is data structutre is js other is not
let daysOfWeek=["sunday",["monday"],["Friday"]];
let person=["farah" , [22],[true]];
console.log(person);
//bracket a notation 
person[0];
person.length;

//loops
for(let i =0;i<5;i++){
    console.log(i);
}

//functions  is not a method مش مرتبط ب كلاس مستقل  method مرتبط ب كلاس  

function addNumber(){
console.log("Hi");
}
addNumber();
function addNumber2(num){
return  num;
}
addNumber2(9);
function addnumber3(){
     return true;
}
function addNumber4(number){
console.log("hi");
}
addNumber4(9);
//اذا بدي قيمة الريترن لازم خزنها في متغير

// single resposibelity :افضل اذا خليت كل founction مسؤل عن شي 
//arrow functions يفضل استخدامه 

//const not change value 
//let block scope بستخدمها بس بالمجال الي بحتاجها فيه
//var دايما جوة الذاكرة و بسبب بطى
