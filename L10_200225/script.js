// PROMISE API'S

const myPromiseFromNetflix = new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("fetched data from netflix");
        // reject("error netflix")
    },5000);
})

const myPromiseTwitter = new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("fetched from twitter");
        // reject("error twitter")
    },2000);
})

const myPromiseGithub = new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("fetched from github");
        // reject("error error error");
    },1000);
})

const myPromiseHotstar = new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("fetched from hotstar");
        // reject("error hotstar")
    },3000);
})

const rejection =4567;
// promise.all()
const checkall = Promise.all([myPromiseFromNetflix,myPromiseTwitter,myPromiseGithub,myPromiseHotstar, rejection])
// console.log(checkall)

// promise.allsettled()
const checkallSettled = Promise.allSettled([myPromiseFromNetflix,myPromiseTwitter,myPromiseGithub,myPromiseHotstar])
// console.log(checkallSettled)

const checkRace = Promise.race([myPromiseFromNetflix,myPromiseTwitter,myPromiseGithub,myPromiseHotstar])
// console.log(checkRace)

const checkany = Promise.any([myPromiseFromNetflix,myPromiseTwitter,myPromiseGithub,myPromiseHotstar])
// console.log(checkany)





// Async - Await
// async is a feature to make a function asyncronous
async function techM(){
    console.log("hello techM")
}
// const techMdata = techM()
// console.log(techMdata)

// techMdata.then((result)=>{
//     return result
// })


const projectsubKuber = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("submitted successfully")
    }, 5000);
})

function projectEvalute(){              // sync function waiting for kuber result
    const projectFile = projectsubKuber;    // taking 5 sec. thread is moving and showing undefined
    console.log(projectFile);   
}
// projectEvalute();

async function projectEvalute(){
    const projectFile = await projectsubKuber;
    console.log(projectFile);
}
// projectEvalute();       // making function async await means waiting for result and move after


//------------

console.log("class start");
const kuberWriting = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("writing");
    },10000)
})
async function evaluate() {
    console.log("attendence marking");
    const fileEvaluate = await kuberWriting;
    console.log(fileEvaluate);

    console.log("class end");
}
// evaluate();

// we use try catch for error handling in async await
async function evaluate() {
    try{
        console.log("attendence marking");
    const fileEvaluate = await kuberWriting;
    console.log(fileEvaluate);

    console.log("class end");
    }
    catch(error){
        console.log(error);
    }
}



////////////////////

// lets fetch some data

async function fetchApiData(){
    try{
        const data = await fetch("https://api.chucknorris.io/jokes/categories");
    const mydata = await data.json();
    return mydata;
    }
    catch(err){
        console.log(err)
    }
}
// const finaldata = fetchApiData();

// finaldata.then((result)=>{
//     console.log(result);
// })

