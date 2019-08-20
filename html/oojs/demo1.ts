class Test{
    public age:number=20;

    details():string{
        return "hello, Your age is "+this.age;
    }
}


let t=new Test();
console.log(t.details());


let user:[number,string,string,number];

user=[100,'Shantanu','Hyderabad',5600];
console.log(user[1]);

let id:(number|string);
id=100;
id='200';

console.log(id);
