let data="secret information"
class User{

   
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    viewData(){
        console.log("data=",data)
    }
}
class Admin extends User{

    constructor(name,email){
        super(name,email);

    }
    editData(){;
        data="some new value"
    }

}

let student1=new User("Ramsingh","ram123@gmail.com");
let student2=new User("Chandana","chandu123@gmail.com");
let Teacher1=new User("Dean","Dean@gmail.com");

let admin=new Admin("Admin","admin@gmail.com");
