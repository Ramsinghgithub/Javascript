let employee={
    calcTax1(){
        console.log("Tax rate is 10%");
    },
    //or
    //we can write the function in two ways inside the object above one and below are the two ways
    // calcTax12:function(){
    //     console.log("Tax rate is 10%");       
    // }
}

const karanArjun={
    salary:50000,
    calcTax1(){
        console.log("Tax rate is 20%");
    },

}
// const karanArjun1={
//     salary:50000,

// }
// const karanArjun2={
//     salary:50000,

// }
// const karanArjun3={
//     salary:50000,

// }
// const karanArjun4={
//     salary:50000,

// }

karanArjun.__proto__=employee;//setting the empployee object's function into the karanArjun object
// karanArjun1.__proto__=employee;//setting the empployee object's function into the karanArjun1 object
// karanArjun2.__proto__=employee;//setting the empployee object's function into the karanArjun2 object
// karanArjun3.__proto__=employee;//setting the empployee object's function into the karanArjun3 object
// karanArjun4.__proto__=employee;//setting the empployee object's function into the karanArjun4 object
console.log(karanArjun)
console.log(karanArjun.calcTax1())

// console.log(karanArjun.calcTax1)
