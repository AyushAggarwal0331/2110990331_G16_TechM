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
const finaldata = fetchApiData();

finaldata.then((result)=>{
    console.log(result)
})

document.getElementById("button").addEventListener("click",function(){
    let data = document.getElementById("searchbar").value;
    console.log(data)
})



