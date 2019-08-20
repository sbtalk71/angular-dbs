

class Person{

    constructor(id,name,city){
        this.id=id;
        this.name=name;
        this.city=city;
       
    }

    details(){
        return this.id+" "+this.name+" "+this.city;
    }
}

let p1=new Person(100,'Shantanu','Hyderabad');
console.log(p1.details());

class Emp extends Person{
    constructor(id,name,city,salary){
        super(id,name,city);
        this.salary=salary;
    }


    details(){
        return super.details()+' '+this.salary;
    }
}

let e1=new Emp(201,'John','Bangalore',84000);

console.log(`Emp Details :+${e1.details()}`);
