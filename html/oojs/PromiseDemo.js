let promise=new Promise(function(resolve,reject){
   // reject('The processing is rejected');
   resolve("Good");
}
).then(
    result=>{console.log("Success")},
error=>{console.log("Rejected")});