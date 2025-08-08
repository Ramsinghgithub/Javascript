function api(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve("success");

        },2000)

    })
}

// async function getWeatherData(){
//     console.log("getting data1.....")
//     await api(1);//pause 2sec
//     console.log("getting data2.....")
//     await api(2);// pause 2 sec
//     console.log("getting data3.....")
//     await api(3)//pause 2 sec
//     console.log("getting data4.....")
//     await api(4)//pause 2 sec
//     console.log("getting data5.....")
//     await api(5)//pause 2 sec
//     console.log("getting data6.....")
//     await api(6)//pause 2 sec

// }
// console.log(getWeatherData())

//        (Or) IIFE(immediate invoked function expression) here we no need to call the function on console

(async ()=>{
    console.log("getting data1.....")
    await  api(1)
    console.log("getting data2.....")
    await  api(2)
    console.log("getting data3.....")
    await  api(3)

})()