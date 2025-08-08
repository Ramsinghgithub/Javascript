// let student={
//     fullName:"Ramsingh",
//     age:24,
//     cgpa:7.15,
//     ispass:true
// }
// student.age=student.age+1
// console.log(student.age)

// const product={
//     title:"Ball pen",
//     rating:4,
//     offer:5,
//     price:250
// }
// console.log(product)

// const profile={
//     username:"sradhaKhapra",
//     post:250,
//     following:4,
//     followers:1000000,
//     isFollow:true,
//     details:"apna college|ex-microsoft,DRDA"

// }
// console.log(profile)
// console.log(typeof profile["post"])



//Operator
//Arthemetic operator

// let a=5
// let b=2
// console.log("a=",a,"& b=",b)
// console.log("a+b="+(a+b))
// console.log("a-b="+(a-b))
// console.log("a*b="+(a*b))
// console.log("a/b="+(a/b))
// console.log("a%b="+(a%b))
// console.log("a**b="+(a**b))


//Unary operator

// let a=5;
// let b=2;
// ++a;
// console.log(a)
// a++;
// console.log(a)
// ++b;
// console.log(b)
// b++;
// console.log(b)

//comparision Operator

//check the given number is multiple of 5 or not

// let num=prompt("enter a number")

// if(num%5===0){
//     console.log("Multiple of 5")
// }
// else{
//     console.log("not a multiple of 5")
// }
// 


// let marks=prompt("enter marks")

// if(marks>=80&&marks<=100){
//     console.log("A grade")
// }
// else if(marks>=70&&marks<=89){
//     console.log("B grade")
// }
// else if(marks>=60&&marks<=69){
//     console.log("C grade")
// }
// else if(marks>=50&&marks<=59){
//     console.log("D grade")
// }
// else if(marks>=0&&marks<=49){
//     console.log("F grade")

// }

// for(let i=1;i<=5;i++){
//     console.log("Hello world")
// }
// console.log("loop has ended")


// let sum=0;
// for(let i=1;i<=5;i++){
//     sum+=i;
// }
// console.log(sum)

// let sum=0;
// let i=1;
// while(i<=5){
//     sum+=i;
    // console.log(i)
//     i++
// }
// console.log(sum)

// let i=1;
// do{
//     console.log("Apna college");
//     i++
    
// }while(i<=10);

// let str="Ramsingh"
// for(let i of str){
//     console.log(i)
// }

// let student={
//     fullName:"Ramsingh",
//     age:24,
//     cgpa:7.15,
//     ispass:true
// }
// for(let key in student){
//     console.log(key,":",student[key])
// }

// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// let i=1;
// do{
//     if(i%2==0){
//         console.log(i)

//     }
//     i++
// }while(i<=100);
// let GameNum=25;
// let guessNum=prompt("Guess the number");

// while(guessNum!=GameNum){
//     guessNum=prompt("You entered wrong num")

// }
// console.log("congratulations,you entered the right num");

// let obj={
//     item:"pen",
//     price:10
// }
// let ouput=`the cost of ${obj.item} is ${obj.price} rupees`//special String type
// console.log(ouput);

// console.log("The cost of",obj.item,"is",obj.price,"Rupees")

// let str="Apnacollege"
// console.log(str.length)
// console.log(str.slice(1))
// console.log(str.substring(11,1))
// console.log(str.slice(1,10))
// console.log(str.slice(-5,-1))


// let str="I love sweety I love sweety"
// let s=str.replaceAll("sweety","Virat kholi")
// console.log(s)


// let string=prompt("enter your full name");

// let len=string.length;

// console.log(`@${string}${len}`)
// console.log("@"+string.concat(len))

// let marks=[60,40,50,80,90]
// console.log(marks);
// console.log(marks.length)

// let string=["Ramsingh","Chandana","Mahesh","Rakesh","Shiva","Bunty"]
// for(let ele of string){
//     console.log(ele.toUpperCase())
// }
// for(let key in string){
//     console.log(string[key])
// }
// console.log(string)
// console.log(string.length)


// for(let i of string){
//     console.log(i)
// }

// let arr=new Array(4);
// for(let i=0;i<arr.length;i++){
//    arr[i]= prompt("enter array ele");
// }
// console.log(arr)

// let arr=[10,20,30,40,50];
// let sum=0;
// let count=arr.length;

// for(let ele of arr){
//     sum+=ele;
// }
// let avg=sum/count;
// console.log(`avg marks of the class=${avg}`)


// let arr=[250,645,300,900,501];

// let result=new Array(arr.length);

// for(let i=0;i<arr.length;i++){
//     let offer=arr[i]/10
//     arr[i]=arr[i]-offer;
//     result[i]=arr[i]
// }
// console.log(result)

// console.log(arr.pop())
// console.log(arr)
// arr.unshift(1000)
// console.log(arr)
// arr.shift();
// console.log(arr)
// console.log(arr.sort())
// console.log(arr.reverse())

// let names=["Ramsingh","Chandana","Mahesh","Rakesh","Shiva","Bunty"]
// let  nums=[10,20,30,40,50]
// console.log(names)
// console.log(names.toString())

// console.log(nums)
// console.log(nums.toString())
// let string="welcome to js"
// console.log(string.substring(2))

// let names=["Ramsingh","Chandana","Mahesh","Rakesh","Shiva","Bunty"]
// let  nums=[10,20,30,40,50]

// let arr=names.concat(nums);
// console.log(arr)

// console.log(nums.slice(1,5))


// let  nums=[10,20,30,40,50]
// console.log(nums.splice(2,1,60,70,80))
// console.log(nums)

// let companies=["Blooberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies)
// companies.shift();
// companies.splice(2,1,"Ola");
// companies.push("Amazon");
// console.log(companies)
// console.log(companies.join("💖"))

// function sumOfTwoNum(a,b){
//    let s=a+b;
//    return s;

// }
// console.log(sumOfTwoNum(10,20))
// console.log("Ramsingh"/10)

// let arrowSum=(a,b)=>
//     {
//     return a+b;
// };
// console.log(arrowSum(10,20))

//Performing task on Function
/************************************************************************ */
//find no of vowels in a given string

// function findNoOfVowels(str){
//     let count=0;
//     for(let ch of str){
//         if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
//             count++;
//         }
//     }
//     console.log(count)

// }
// findNoOfVowels("aeiou")

//same task using arrow function
/******************************************************************************************* */
// let findNoOfVowels=(str)=>{
//     let count=0;
//     for(let ch of str){
//         if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'||ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U'){
//             count++;
//         }
//     }
//     console.log(count)

// }
// findNoOfVowels("shiva")

//Higher order function
/********************************************************************************* */
// let arr=["Ramsingh","Chandana","shiva","Bunty"];
// arr.forEach((val,index,arr)=>{
    // console.log(val.toUpperCase(),index,arr)
    // console.log(index)
    // console.log(Array)
    
// })


//practice
//forEach
/********************************************** */
// let arr=[1,2,3,4,5,6];
// arr.forEach((val)=>{
//     console.log(val*val)

// })

// let num=[2,3,4,5,6];

// let calcSquare=(num)=>{
//     console.log(num*num)

// }

// num.forEach(calcSquare)
// console.log(arr)

//Map
/***************************************************** */
// let arr=[1,2,3,4,5,6];
// let arr1=arr.map((val)=>{
//     return val*val

// })
// console.log(arr1)


//Filter HOF
/****************************************************** */
// let arr=[2,45,10,5,2,7,1,3]
// let arr1=arr.filter((val)=>{
//     if(val>=5) return val;

// })
// console.log(arr1)

//reduce
/************************************************* */
// let arr=[1,2,3,4];

// let sumWithinitVal=arr.reduce((accumaltor,currentValue)=>{
//     return accumaltor>currentValue?accumaltor:currentValue;


// })
// console.log(sumWithinitVal)

// practice
// /************************************************ */
// let marks=[97,64,32,49,99,96,86]

// let filterMarks=marks.filter((val)=>{
//     return val>90

// })
// console.log(filterMarks)

//sum of an array

let n=prompt("enter a n value")
let arr=[];
for(let i=1;i<=n;i++){
arr[i-1]=i;

}
console.log(arr)

let sumOfArray=arr.reduce((res,currentVal)=>{
    return res+=currentVal

})
console.log(sumOfArray)

let prodOfArray=arr.reduce((res,currentVal)=>{
    return res*=currentVal

})
console.log(prodOfArray)

