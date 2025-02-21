// call(),apply(),bind()

let studentDetails={
    firstName:"ayush",
    lastName:"aggarwal",

    // getResult:function(){
    //     console.log("pass");
    // }
    getName:function(){
        console.log(this.firstName);
    }
};
// console.log(studentDetails.firstName+studentDetails.lastName);
// studentDetails.getResult();



// call
let getName=function(){
    console.log(this.firstName);
}
// getName.call(studentDetails);
// getName.call(studentJasjot)

let getName2 = function(args1,args2){
    console.log(this.firstName+" "+this.lastName+" "+args1+args2);
}
const ans1 =getName2.call(studentDetails,"g6","g5");        //CALL() can be invoked without calling
// console.log(ans1)        

const ans2 = getName2.apply(studentDetails,["g6,g10,g20"])  //APPLY()  can be invoked without calling
// console.log(ans2)

const ans3 = getName2.bind(studentDetails,"g16","g11");       //BIND() can not be invoked without calling
console.log(ans3())

//call- takes 1object and then number of arguments needs
//apply - takes 1object and only argument in array
//bind -takes 1object and number of arguments needs and needed to be invoked like a function




// event bubbling  and event capturing
// event bubbling is happening from child to grandparent
// event capturing is happening from grandparent to child
// by default it is false, works as event bubbling
// document.getElementById("grand-parent").addEventListener("click",(e)=>{
//     console.log("this is grandparent");
//     // e.stopPropagation()
// },true)
// document.getElementById("parent").addEventListener("click",(e)=>{
//     console.log("this is parent");
//     // e.stopPropagation()
// },true)
// document.getElementById("child").addEventListener("click",(e)=>{
//     console.log("this is child");
//     // e.stopPropagation()
// },true)


// document.getElementById("cs").addEventListener("click",()=>{
//     window.location.href="localhost/cs";
// });
// document.getElementById("mech").addEventListener("click",()=>{
//     window.location.href="https://www.google.com/";
// });
// document.getElementById("ee").addEventListener("click",()=>{
//     window.location.href="localhost/ee";
// });

// event delegation
// document.getElementById("subjects").addEventListener("click",(e)=>{
//     // window.location.href="localhost/cs";
//     // console.log(e);
//     window.location.href = e.target.id;
// });



// Debouncing
// document.getElementById("search-product").addEventListener("input",debouncing);
// let timeout;
// function fetchdata(){
//     console.log("fetching api data");
// }

// function debouncing(){
//     clearTimeout(timeout);
//     timeout = setTimeout(fetchdata,1000);
// }


