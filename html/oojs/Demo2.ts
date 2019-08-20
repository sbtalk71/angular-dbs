class Person{
    constructor(public id:number,public name:string, public city:string,public salary:number){
    }


    details(): string{
        return this.id+' '+this.name+' '+this.city+' '+this.salary;
    }
}

let p=new Person(100,'Shantanu','Hyderabad',34000);
console.log(p.details());

export class Emp extends Person{
    constructor(public id:number,public name:string, public city:string,public salary:number,public age:number){
  
        super(id,name,city,salary);
    }

    details(): string{
        return super.details()+' '+this.age;
    }


}

let e=new Emp(201,'John','Bangalore',56000,56);
console.log(e.details());