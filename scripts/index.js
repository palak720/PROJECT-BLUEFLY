
const bar =document.getElementById('bar');
const li =document.getElementById('li');

if(bar) {
    bar.addEventListener('click',() => {
        li.classList.add('active');
    })
}


/* singleproduct page*/
var MainImg=document.getElementById("MainImg")
        var smallimg=document.getElementsByClassName("small-img");

       smallimg[0].onclick=function(){
        MainImg.src =smallimg[0].src
       }
       smallimg[1].onclick=function(){
        MainImg.src =smallimg[1].src
       }
       smallimg[2].onclick=function(){
        MainImg.src =smallimg[2].src
       }
       smallimg[3].onclick=function(){
        MainImg.src =smallimg[3].src
       }

/* search bar*/

const BaseUrl='https://universal-snowy-visitor.glitch.me/'

const card =document.getElementsByClassName("card");
const searchField =document.getElementById('search-input')


async function fetchsearch(){
    try{
        const BaseUrl='https://universal-snowy-visitor.glitch.me/'
        const response= await fetch(BaseUrl)
        const data =await response.json()
        return data.randomdata

    }catch(err){
        console.log("Error fetching", err)
        return[]
    }
}

searchField.addEventListener("click",async () =>{
    const query =searchField.value.trim()

    if(query !== ""){
        try{
            const randomdata=await fetchNewsQuery(query)
            displaysearch(randomdata)

        }catch(error){
        console.log("Error fetching news by query",err)
    }
    }

})

function fetchNewsQuery(query){
    try{
        const BaseUrl='https://universal-snowy-visitor.glitch.me/q=${query}'
        const response= await fetch(BaseUrl)
        const data =await response.json()
        return data.randomdata;

    }catch(err){
        console.log("Error fetching", err)
        return[]
    }
}

}




function displaysearch(randomdata){
    card.innerHTML =""
    randomdata.forEach((randomdata) =>{
        const crd =document.createElement("div")
        crd.classList.add("crd")
        const img =document.createElement("img");
        img.src =randomdata.BaseUrlToImage;
        const title =document.createElement("h2")
        title.textContent = randomdata.title

        crd.appendChild(img)
        crd.appendChild(title)
        card.appendChild(crd);

    });
}

(async () => {
    try {
        const randomdata =await fetchsearch();
        displaysearch(randomdata);
    }catch(error){
        console.error("Error fetching",err);
    }
})();

/* login page*/

