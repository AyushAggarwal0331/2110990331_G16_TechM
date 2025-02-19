// REDUCE

const arr=[2,3,5,1,7]
// normal way
var sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
// console.log(sum);

// using reduce

const ans=arr.reduce(function(acc,curr){
    acc+=curr
    return acc;
},0)
// console.log(ans)

const users =[
    {firstName:"pratiyush",lastName:"ray",age:25},
    {firstName:"ayush",lastName:"aggarwal",age:21},
    {firstName:"sahil",lastName:"gupta",age:22},
    {firstName:"ravneet",lastName:"kang",age:24},
    {firstName:"ayush",lastName:"aggarwal",age:21},
    {firstName:"ayush",lastName:"aggarwal",age:21}
]

const pair = users.reduce(function(acc,curr){
    if(curr.age in acc){
        acc[curr.age] =acc[curr.age]+1;
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(pair)


const maxValue=arr.reduce(function(acc,curr){
    if(acc<curr) acc=curr;
    return acc;
},0)

console.log(maxValue);

// PROMISE      // 3 states -> pending, fulfilled, rejected
// callback can not hold its state

// reachedRestraurent(()=>{
//     table(()=>{
//         menu(()=>{
//             starter(()=>{
//                 maincourse(()=>{
//                     dessert(()=>{
//                         bill(()=>{
//                             leaving();
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// reachedRestraurent(function(){
//     console.log("reached HSR")
// })
// .then(table)
// .then(menu)
// .then(starter)
// .then(maincourse)
// .then(dessert)
// .then(bill)
// .then(leaving)


// const myRestraurent = new Promise(resolve,reject){
//     // if(1> time <3){
//     //     resolve("reched on time");
//     // }
//     // else{
//     //     reject("not no time");
//     // }
// }



// by  callback
// createOrder(cart,callback){
//     console.log("order creation");
//     orderPayment(orderId,callback){
//         console.log("payment done")
//         orderSummary(orderId,callback){
//             console.log("chek summary")
//             updateWallet(){
//                 console.log("wallet updata");
//             }
//         }
//     }
// }

const cart=["shoes","bags","watches","jeans"]

function createOrder(card){
    const myPromise = new Promise(function(resolve,reject){
        if(cart.length>0){
            console.log("order created")
            resolve("123009");
        }
        else{
            const error = new Error("Order failed")
            reject(error.message);
        }
    })
    return myPromise
}
console.log(createOrder(cart))


// createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("payment successful",orderId)
// })
// .then(function orderSummary(orderId){
//     console.log("order summary",orderId)
// })

function orderPayment(orderId){
    console.log("order payment succesful",orderId)
}
function orderSummary(orderId){
    console.log("order summary succesful",orderId)
}
function updateWallet(){
    console.log("wallet update succesful")
}


createOrder(cart)
.then(function(orderId){
    return orderPayment(orderId)
})
.then(function(orderId){
    return orderSummary(orderId)
})
.then(function (){
    return updateWallet()
})
.catch( function(error){
    console.log("error")
})

// example trying
// const data =["1","2"]

// function create(data){
//     const createData = new Promise(function(resolve,reject){
//         if(data.length>0){
//             resolve("yes")
//         }
//         else{
//             reject("no")
//         }
//     })
//     return createData;
// }
// function create2(){
//     console.log("create2");
// }
// create(data)
// .then(function(){
//     return create2;
// })


// PROMISE API  -Promise.all() -Promise.allSettled()  -Promise.any()    -Promise.race()
