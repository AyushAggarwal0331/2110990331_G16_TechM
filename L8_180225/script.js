


function x(){
    console.log("i am x")
}
function y(args){
    console.log("i am y")
    args();
}
y(x);
// here x is callback and y is HOF

data=[2,3,4,5];

const calculateDouble= function (data){
    output=[]
    for(let i=0;i<=data.length;i++){
        output.push(data[i]*2);
    }
    return output;
}

const calculateHalf= function (data){
    output=[]
    for(let i=0;i<data.length;i++){
        output.push(data[i]/2);
    }
    return output;
}

const calculateAddTen= function (data){
    output=[]
    for(let i=0;i<data.length;i++){
        output.push(data[i]+10);
    }
    return output;
}
// console.log(calculateDouble(data))
// console.log(calculateHalf(data));
// console.log(calculateAddTen(data))

// making differert fucntion for change of 1 line of code 

function doubled(data){
    var ans = data*2;
    return ans;
}
function divide(data){
    var ans = data/2;
    return ans;
}

const calcu = function(data,callback){
    console.log("HOF")
    const output=[]
    for(let i=0;i<data.length;i++){
        output.push(callback(data[i]));
    }
    return output;
}

// console.log(calcu(data,doubled));
// console.log(calcu(data,divide));
// instead used HOF making main function comman and just making small function
// for changes


// polyfill of map featuer of js
// by using prototype
Array.prototype.mappp = function(logic){
    var output=[]
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output;
}
// console.log(data.mappp(doubled));


// MAP, FILTER, REDUCE


const data2=[2,5,6,9];

const area = data2.map((a)=>{
    return 3.14*(a*a);
})

const circumference = data2.map((b)=>{
    return (2*3.14)*b;
})

const diameter = data2.map((c)=>{
    return c*2;
})

// console.log(area);
// console.log(circumference);
// console.log(diameter);



const odds=[1,2,4,3,6,5,7,8];

const chooseOdd= function(odds){
    const output=[]
    for(let i=0;i<odds.length;i++){
        if(odds[i]%2 != 0) output.push(odds[i]);
    }
    return output;
}

const findOdd = odds.filter((a)=>{
    return a%2 !=0
})

Array.prototype.filter = function(){
    const output=[]
    for(let i=0;i<odds.length;i++){
        if(this[i]%2 !=0) output.push(this[i]);
    }
    return output;
}

// console.log(chooseOdd(odds))
// console.log(findOdd)
// console.log(odds.filter());

const users =[
    {firstName:"pratiyush",lastName:"ray",age:25},
    {firstName:"ayush",lastName:"aggarwal",age:21},
    {firstName:"sahil",lastName:"gupta",age:22},
    {firstName:"ravneet",lastName:"kang",age:24},
    {firstName:"ayush",lastName:"aggarwal",age:21}
]

const fullName= users.map((a)=>
     a.firstName+" "+a.lastName
)
console.log(fullName)

const user = users.filter((a)=>{
    return a['$age'] > 23
})
console.log(user)

