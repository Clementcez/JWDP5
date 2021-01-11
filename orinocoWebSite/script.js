
const requestNounours = new XMLHttpRequest();
requestNounours.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);

        const i = document.getElementById("produits");
        
        for (let nounours of response) {
            const block = document.createElement("div");

            //creer un p pour les noms
            const name = document.createElement("p");
            name.innerHTML = nounours.name;
            block.appendChild(name);

            //creer une balise img pour les images
            const img = document.createElement("img");
            img.src = nounours.imageUrl;
            block.appendChild(img);

            //creer un p pour les prix
            const prix = document.createElement("p");
            prix.innerHTML = nounours.price + " €";
            block.appendChild(prix);

            //creer un bouton avec url
            const button = document.createElement("button");
            const lien = document.createElement("a");
            lien.href = "produits.html?id=" + nounours._id;
            lien.innerHTML = "Explorer moi !"
            block.appendChild(button);
            button.appendChild(lien);
            console.log(nounours)


            i.appendChild(block);
        }
    }
};
requestNounours.open("GET", "http://localhost:3000/api/teddies");
requestNounours.send();

const requestCam = new XMLHttpRequest();
requestCam.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);

        const i = document.getElementById("produits2");
        
        for (let cameras of response) {
            const block = document.createElement("div");

            //creer un p pour les noms
            const name = document.createElement("p");
            name.innerHTML = cameras.name;
            block.appendChild(name);

            //creer une balise img pour les images
            const img = document.createElement("img");
            img.src = cameras.imageUrl;
            block.appendChild(img);

            //creer un p pour les prix
            const prix = document.createElement("p");
            prix.innerHTML = cameras.price + " €";
            block.appendChild(prix);

            //creer un bouton avec url
            const button = document.createElement("button");
            const lien = document.createElement("a");
            lien.href = "produits.html?id=" + cameras._id;
            lien.innerHTML = "Explorer moi !"
            block.appendChild(button);
            button.appendChild(lien);

            i.appendChild(block);
        }
    }
};
requestCam.open("GET", "http://localhost:3000/api/cameras");
requestCam.send();

const requestMeuble = new XMLHttpRequest();
requestMeuble.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);

        const i = document.getElementById("produits3");
        
        for (let furnitures of response) {
            const block = document.createElement("div");

            //creer un p pour les noms
            const name = document.createElement("p");
            name.innerHTML = furnitures.name;
            block.appendChild(name);

            //creer une balise img pour les images
            const img = document.createElement("img");
            img.src = furnitures.imageUrl;
            block.appendChild(img);

            //creer un p pour les prix
            const prix = document.createElement("p");
            prix.innerHTML = furnitures.price + " €";
            block.appendChild(prix);

            //creer un bouton avec url
            const button = document.createElement("button");
            const lien = document.createElement("a");
            lien.href = "produits.html?id=" + furnitures._id;
            lien.innerHTML = "Explorer moi !"
            block.appendChild(button);
            button.appendChild(lien);

            i.appendChild(block);
        }
    }
};
requestMeuble.open("GET", "http://localhost:3000/api/furniture");
requestMeuble.send();

// const btn = document.getElementsByTagName("button");

document.addEventListener("DOMContentLoaded", function(event) {
    const btns = document.getElementsByTagName("button");

    for (let btn of btns){
        btn.addEventListener("click", titi);
    };

});


function titi () {
    const i = document.getElementById("test");
    const truc = document.createElement("p");
    const getUrl = "chibrax";
    truc.innerHTML = getUrl;
    i.appendChild(truc);

    console.log("dstisyoug")
};



// const i = document.getElementById("test");
// const truc = document.createElement("p");
// const getUrl = "chibrax";
// truc.innerHTML = getUrl;
// i.appendChild(truc);






// btn.onclick = 

// const img = document.createElement("img");
// img.src = response[0].imageUrl;
// const block = document.getElementById("image");
// block.appendChild(img);

// function afficherNounoursNameParagraphe(nounours) {} // afficher les noms des nounours sous forme de paragraphes dans la page

// function afficherDivAvecNomEtPrixNounours(nounours) {} // pour chaque nounours, creer division et a l'interieur, ajoute nom + prix du nounours

// function afficherPhotoDesNounours(nounours) {} // reussir a integrer les liens dans la balise src de tag <img>

// function afficherLeToutSousFormeDeDivisions(nounours) {}