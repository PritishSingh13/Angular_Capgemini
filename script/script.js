// // setTimeout (runs once after delay)
// setTimeout(function () {
//     console.log("Hello World");
// }, 2000);


// // setInterval (runs again and again)
// setInterval(function () {
//     console.log("Hello Iran and America");
// }, 1000);

// let promiseData=new Promise((res,rej)=>{
//     const success=false;

//     setTimeout(()=>{
//         if(success){
//             res("success in fetching data")
//         }
//         else{
//             rej("error in fetching");
//         }


//     },2000);
// });

// promiseData.then((a)=>{
//     console.log(a);
//     console.log("then block")
// });

// promiseData.catch((b)=>{
//     console.log(b);
//     console.log("catch block")
// });

// promiseData.finally(()=>{
//     console.log("success");
// })



//FETCHING

// let data=fetch("https://dummyjson.com/products");

// data
// .then((a)=>{
//     return a.json(); //a.json() converts response → JavaScript object
// })
// .then((b)=>{
//     let val=b.products; //This .then() runs when a.json() is complete
// // b contains the actual data from API
//     val.forEach((a)=>{
//         console.log(a);
//         console.log(a.description)
//     });
// });


//Fetching (Async)
async function demo(){
    
    try{
        let val=await fetch("https://dummyjson.com/products");

    let data=await val.json();
    console.log(val);
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

demo();