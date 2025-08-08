//callBackHell

//To solve the proble of callBack Hell we use promises



// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId)
//         if(getNextData){
//             getNextData();
//         }
//     },2000 )

// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     });
// })



// let promise=new Promise((resolve,reject)=>{

//     console.log("Iam a promise")
    // resolve("success")
//     reject("Some err occured")

// })

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            // reject("err");
            // if(getNextData){
            //     getNextData();
            // }

        },3000)

    })
}
//promise chaining

console.log("getting data1....")
getData(1).then((res)=>{
    console.log("getting data2....")
    return getData(2)
    

})
.then((res)=>{
    console.log("getting data3....")
    return getData(3);
})
.then((res)=>{
    console.log("getting data4....")
    return getData(4);
})
.then((res)=>{
    console.log(res)
})

