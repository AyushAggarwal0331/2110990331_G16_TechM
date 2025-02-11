// set Interval

// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(7);
// },1000)
// console.log(four());
// setInterval(()=>{
//     console.log(8);
// },2000)
// console.log(6);


// clousure set TimeOut 

// for(var i=1;i<=6;i++){
//     function xy(i){
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     }
//     xy(i)
// }

//  Same Same but different

// function xy(i){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
// for(var i=1;i<=6;i++){
    
//     console.log(xy(i))
// }


// case 2
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x()
// console.log(z)
// z();


// case 3
// function z(){
//     var b=900
//     function x(){
//         var a=7
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

var count=0;
function increment(){
    return count++;
}
increment()
increment()
increment()
console.log(count)

function outside(){
    var count=0;
    return function increment(){
        count++;
        console.log(count)
    }
    
}
var a=outside()
a()
a()
a()

