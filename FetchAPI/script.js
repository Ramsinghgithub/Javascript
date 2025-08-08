let URL="https://potterapi-fedeperin.vercel.app/"
let para=document.querySelector("#para")
let btn=document.querySelector("#btn");

//using async and await

const getBooks=async()=>{
    console.log("getting data......")
    let response= await fetch(URL)
    console.log(response)//JSON format
    let data=await response.json();
    console.log(data.message)// js Object format
    para.innerText=data.message;
    

};
btn.addEventListener("click",getBooks)

//                 (or)

/***************************************************************************************** */
//using promise chaining

// function getBooks(){
//     fetch(URL).then((response)=>{
//         return response.json();


//     }).then((data)=>{
//         console.log(data)
//         para.innerText=data.message;

//     })
  
// }
//  btn.addEventListener("click",getBooks)

