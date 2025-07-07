/*console.log("Hello World");

var a = 123;

console.log(a);

function abc(){
    console.log("This is function ABC");

    function hgf(){
        console.log("This is HGF");
    }
    hgf();
}*/

//def();

/*function def(){
    console.log("This is function DEF");
}*/

//abc();

//var b = 300;

//console.log(b);

// arrow function

/*var a = 200;
console.log(a);
xyz();
var xyz=()=>{
    console.log("XYZ Function called");
}

var b = 300;
console.log(b);*/

//console.log(b);
//let b = 100;


// compund statment
// {   //grandparent
//     var a = 100;
//     var b = 200;
//     var c = 300;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(x);
//     {
//         // parent
//         console.log(a);
//         console.log(b);
//         console.log(c);

//         {
//             //child
//             var x = 2000
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }

// try changing all these to let 



// function scoped 
// function abc() {
//     var a = 100
//     var b = 200
//     var c = 300
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     function def() {

//         var d = 400

//         function ghi() {
//             console.log(a)
//             console.log(b)
//             console.log(c)
//             console.log(d)
//         }
//         ghi()
//     }
//     def()
// }
// abc()





// for(var i = 0; i <= 5; i++){
//     //console.log(i);
//     setTimeout(()=>{
//         console.log(i);
//     }, 2000)
// }


// for(var i = 0; i <= 5; i++){
//     function closure(i){
//         setTimeout(()=>{
//             console.log(i);
//         }, 2000)
//     }
//     closure(i);
// }



function xyz(cb){
    console.log("I am XYZ function");
}
function cb(){
    console.log("I am CB function");
}
xyz(cb);

function foodOrder(cb){


}

function pay