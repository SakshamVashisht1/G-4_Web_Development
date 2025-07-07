// console.log("SCRIPT START")

// // setTimeout(()=>{
// //     console.log("I am going to College..")
// // },4000)

// // setTimeout(()=>{
// //     console.log("I am going to Class..")
// // },3000)

// function ok(cb){
//     console.log("This is Ok");
//     setTimeout(cb,3000);
// }

// function fine(cb){
//     console.log("Youre in fine");
//     setTimeout(cb,2000);
// }

// function thankyou(cb){
//     console.log("Thanks for being here.")
//     setTimeout(cb,4000)
// }

// function finish(){
//     console.log("Finish....")
// }
// console.log("SCRIPT END")

// ok(()=>{
//     fine(()=>{
//         thankyou(()=>{
//             finish()
//         })
//     })
// })


// let arr = [2,3,4,5,6,8,5]

// function doubleArray(arr,arr2){
//     for(let i = 0; i<arr.length; i++){
//         arr2[i] = 2*arr[i];
//     }
// }
// let arr2=[]
// doubleArray(arr,arr2);
// console.log(arr2);
// console.log(arr);


Array.prototype.calculate = function(logic){
    let output=[];

    for(var i =  0; i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

function triple(x){
    return x*x*x;
}
let arr = [1,2,3,4,5,6];




let output = arr.calculate(triple);

console.log(output);