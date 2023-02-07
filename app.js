const header = document.getElementById("hero");
$("#hero").tooltip();
header.onclick = () => location.reload();

GetRandomPicture();

function GetRandomPicture() {
    let randomId = Math.floor(120500+(Math.random()*100000));

    fetch('https://api.artic.edu/api/v1/artworks/'+randomId+'?fields=id,title,image_id,artist_title')
    .then((response) => response.json())
    .then((data) => {
        DisplayImageData(data);
        return;
    })
    .catch((error)=>{
        console.error("Error", error);
        GetRandomPicture();
    })
}

function GetPicture(id){
    fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,artist_title`)
    .then((response) => response.json())
    .then((data) => {
        DisplayImageData(data);
        return;
    })
    .catch((error)=>{
        console.error("Error", error);
    })
}

function DisplayImageData(data){
    const display = document.getElementById("display"); 

    const heading = document.getElementById("art-work-heading"); 
    const image = document.getElementById("art-work-image"); 
    const author = document.getElementById("art-work-author");

    let imgUrl = data.config.iiif_url+"/"+data.data.image_id+"/full/843,/0/default.jpg";
    
    heading.textContent = data.data.title; 
    image.setAttribute("src", imgUrl);
    author.textContent = data.data.artist_title;
}

