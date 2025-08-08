// console.log("Hello !")
// window.console.log("Hello!")
// console.dir(document.body)
// console.dir(document.head)
// let heading=document.getElementById("heading1")
// console.log(heading)
// console.dir(document.getElementById("heading1"))
// console.dir(document.body.childNodes[1])

// let heading=document.getElementsByClassName("myClass")
// console.log(heading)
// console.dir(heading)

// let firstEle=document.querySelector(".myClass")
// console.log(firstEle)

// let allEle=document.querySelectorAll(".myClass")
// console.log(allEle)

// let btn=document.querySelector("#myBtn");
// console.log(btn)

// let div=document.querySelector("div").children
// console.log(div)

// let div=document.querySelector("div");

// console.dir(document.querySelector("div").innerText)

// let heading=document.querySelector("h2");

// let m=heading.innerText
// console.log(m)

// let str=heading.innerText+" from Apna College students";
// let res=m.concat(str)
// console.log(str)
// console.log(res)


// let divs=document.querySelectorAll(".box")
// divs[0].innerText="new unique value 1"
// divs[1].innerText="new unique value 2"
// divs[2].innerText="new unique value 3"
// let index=1;
// for(let ele of divs){
    // console.log(ele.innerText)
//     ele.innerText=`new unique value ${index}`
//     index++;
// }


// let div=document.querySelector("div")
// console.log(div)

// let id=div.getAttribute("id")
// console.log(id)

// let para=document.querySelector("p")
// console.log(para)

// let cls=para.getAttribute("class")
// console.log(cls)


// console.log(para.setAttribute("class","newClass"))

// let div=document.querySelector("div");

// console.log(div.style)


// let newBtn=document.createElement("button")
// newBtn.innerText="Click me!"
// console.log(newBtn)

// let para=document.querySelector("p");
// para.after(newBtn)

// let heading=document.createElement("h1");
// heading.innerHTML="<i>This is a JavaScript code</i>";

// let div=document.querySelector("body");
// div.prepend(heading)

// let para=document.querySelector("p")

// para.remove();

// let newBtn=document.createElement("button");
// newBtn.innerText="Click Me!"

// newBtn.style.backgroundColor="red"
// newBtn.style.color="white"

// let body=document.querySelector("body")

// body.prepend(newBtn)


// let para=document.querySelector("p")

// let btn1=document.querySelector("#btn1");
// console.log(btn1)
// btn1.onclick=(e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX,e.clientY)
    
    // console.log("btn1 was clicked");
    // a=24;
    // a++
    // console.log(a)
// }

// btn1.addEventListener("click",(e)=>{
//     console.log(e)
//     console.log("this is event listner")
// })

// btn1.addEventListener("click",(e)=>{
//     console.log(e)
//     console.log("button1 was clicked--handler1")
// })

// btn1.addEventListener("click",(e)=>{
//     console.log(e)
//     console.log("button1 was clicked--handler2")
// })

// btn1.addEventListener("click",(e)=>{
//     console.log(e)
//     console.log("button1 was clicked--handler3")
// })
// let handler2=()=>{
//     console.log("button1 was clicked--handler3")
// }

// btn1.addEventListener("click",(e)=>{
//     console.log(e)
//     console.log("button1 was clicked--handler4")
// })

// btn1.removeEventListener("click",handler2)


// let div=document.querySelector("#box")
// console.log(div)
// div.onmouseover=(e)=>{
//     console.log("This is a box")

//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX,e.clientY)
// }

// let modebtn=document.querySelector("#mode");
// let currMode="light";//dark
// let body=document.querySelector("body");
// console.log(modebtn)
// modebtn.addEventListener("click",()=>{
   
    // if(currMode==="light"){
    //     currMode="dark"
        // bgc.style.background="black"
    //        body.classList.add("dark") 
    //        body.classList.remove("light")
    // }
    // else{
    //     currMode="light"
        // bgc.style.background="white"
//         body.classList.add("light")
//          body.classList.remove("dark")
//     }
//     console.log(currMode)


// })

let submit=document.querySelector("#submit");
submit.addEventListener("click",(e)=>{
   e.preventDefault();
  let fisrtName= document.querySelector("#fname").value;
  let lastName =document.querySelector("#lname").value;

  console.log(fisrtName);
  console.log(lastName)
})







