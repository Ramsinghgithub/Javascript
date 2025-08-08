// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);

// }
// calculator(10,20,sum);

//       (or)

// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);

// }



// calculator(10,20,(a,b)=>{
//     console.log(a+b);

// });

const hello=()=>{
    console.log("hello")
}
//         hello is the callback function
setTimeout(hello,3000);