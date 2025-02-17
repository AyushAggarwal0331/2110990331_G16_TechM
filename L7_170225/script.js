// CALLBACK FUCNTION 
function a(){
    console.log("first");
}
function b(x){
    console.log("second");
    a();
}
// b(a());

// EVENT LISTENER
// var count=0;
// document.getElementById("button-clk1").addEventListener("click",function(){
//     count++;
//     console.log("clicked");
// })

// document.getElementById("button-clk2").addEventListener("click",function(){
//     count++;
//     console.log("clicked");
// })


function reachedRestraurent(callback){
    console.log("reached restraurent");
    setTimeout(callback,1000)
}
function table(callback){
    console.log("finding table")
    setTimeout(callback,1000)
}
function menu(callback){
    console.log("discover menu")
    setTimeout(callback,1000)
}
function price(callback){
    console.log("checking price")
    setTimeout(callback,1000)
}
function starter(callback){
    console.log("eating starter")
    setTimeout(callback,1000)
}
function maincourse(callback){
    console.log("main course eating")
    setTimeout(callback,1000)
}
function dessert(callback){
    console.log("eating dessert")
    setTimeout(callback,1000)
}
function bill(callback){
    console.log("paying bill")
    setTimeout(callback,1000)
}
function leaving(){
    console.log("leaving restraurent")
}

//chaining callback

// readibity issues
// leaving(bill(dessert(maincourse(starter(price(table(reachedRestraurent())))))))

// pyramid doom     solution-> Promises
reachedRestraurent(()=>{
    table(()=>{
        menu(()=>{
            starter(()=>{
                maincourse(()=>{
                    dessert(()=>{
                        bill(()=>{
                            leaving();
                        })
                    })
                })
            })
        })
    })
})

