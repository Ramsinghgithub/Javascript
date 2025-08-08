class ToyotoCar{

    constructor(brand,milage){
        console.log("creating constructors");
        this.brandName=brand;
        this.milage=milage;

    }

    start(){
        console.log("start")
    }
    stop(){
        console.log("Stop")
    }
   


}
let fortuner=new ToyotoCar("Fortuner",10);//constructor invoked
console.log(fortuner)
// fortuner.start();
// fortuner.stop();


let lexus=new ToyotoCar("Lexus",12);//constructor invoked
console.log(lexus)
// lexus.start();
// lexus.stop();
