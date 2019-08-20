function greet(name){
    console.log("Welcome to OOJS "+name);
}


greet('Shantanu');

greet(3+7);
greet(8+' hello');

const emp=[{id:100,name:'Shantanu',city:'Hyderabad',salary:56000},
{id:100,name:'Shantanu',city:'Hyderabad',salary:56000},
{id:100,name:'Shantanu',city:'Hyderabad',salary:56000},
{id:100,name:'Shantanu',city:'Hyderabad',salary:56000}];

for(let i=0;i<emp.length;i++){
console.log(emp[i].name);
}