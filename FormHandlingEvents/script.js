// let form=document.querySelector(".form")
let submit=document.querySelector(".form")
// console.log(btn)

 
submit.addEventListener("submit",(e)=>{
    e.preventDefault();
    
 
    const formData=new FormData(e.target);
    console.log(formData)

    let name=formData.get("name");
    let email=formData.get("email");
    let dob=formData.get("dob");
    let gender=formData.get("gender")

    console.log(name);
    console.log(email);
    console.log(dob);
    console.log(gender);
  
});




