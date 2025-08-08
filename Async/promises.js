// let getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Iam a promise");
        // resolve("success");
//         reject("error")

//     })
// }
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res)

// });
// promise.catch((err)=>{
//     console.log("Rejected",err)
// })


function asycFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("data1")
              resolve("success");
            // reject("error")
            
        },4000)
       
    })
}
function asycFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("data2")
              resolve("success");
            // reject("error")
            
        },4000)
       
    })
}

console.log("Fetching data1.....")

//promise chaining
let p1=asycFun1();
p1.then((res)=>{
    console.log(res)
    console.log("Fetching data2.....")
    let p2=asycFun2();
    p2.then((res)=>{
        console.log(res)
    })
})

//       (or)

//promise chaining

// asycFun1().then((res)=>{
//      console.log(res)
//      console.log("Fetching data2.....")
//      asycFun2().then((res)=>{
//         console.log(res)
//      })

// })






