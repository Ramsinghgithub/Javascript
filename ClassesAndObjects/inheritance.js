// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{

// }

// let obj=new Child();
// console.log(obj.hello());//o/p:hello

/************************************************************************ */

class Person{

constructor(name){
    this.name=name;
    this.species="homo sapiens"
}

    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("do nothing")
    }
}
class Engineer extends Person{
    constructor(branch,name){
        console.log("enter child constructor");
        super(name);//to invoke parent class constructor
        this.branch=branch;
        console.log("enter parent constructor");
        console.log(super.eat())//calling the super class methods inside the Child class i.e.,Engineer class with the help of super keyword
    }
    work(){
        console.log("solve problems,Build something")
    }

}
class Doctor extends Person{
   
    work(){
        console.log("Treat patients");
    }

}

let engObj=new Engineer("CSE","Ramisngh");//Object creation for Engineer class
let dctObj=new Doctor();//Object creation for Doctor class
