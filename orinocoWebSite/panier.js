
//Solution racourcie mais pas gardé car trop d'érreurs possible, si se n'est pas un id qui est en key du localStorage ça plante
// function forEachKey() {
//     for( let i = 0; i < localStorage.length; i++){
//         let ids = localStorage.key(i);

//         const requestNounours = new XMLHttpRequest();
//         requestNounours.onreadystatechange = function() {
//             if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
//                 const response = JSON.parse(this.responseText);
//                 console.log(response)
//             }
//         };
//         requestNounours.open("GET", "http://localhost:3000/api/teddies/" + ids);
//         requestNounours.send();
//     }
// }

window.onload = forEachKey;

const block = document.createElement("div");
const numberBlock = document.getElementById("nombreArticle");
const vide = document.getElementById("vide");
const plein = document.getElementById("plein");

const tableauArticle = document.getElementById("article");
const tableauNom = document.getElementById("nom");
const tableauPrix = document.getElementById("prix");
const tableauCouleur = document.getElementById("couleur");
const tableauQuantité = document.getElementById("quantitéArticle");
const tableauPrixTotal = document.getElementById("total");
const viderPanier = document.getElementById("vider");

const blockPrixTotal = document.createElement("td");

viderPanier.onclick = function vider(){
    localStorage.clear();
    location.reload();
};

let calculQantité = 0;
let prixTotal = 0;

function forEachKey() {

    for( let i = 0; i < localStorage.length; i++){
        let ids = localStorage.key(i);
        const allProducts = JSON.parse(localStorage.getItem(ids));

        for (let elem of allProducts){
            let nombre = Number (elem.quantité);
            let result = calculQantité += nombre;
            numberBlock.innerHTML = result;

            //creer un p pour les noms
            const couleur = document.createElement("td");
            couleur.innerHTML = elem.couleur;
            tableauCouleur.appendChild(couleur);

            //creer un p pour les noms
            const quantité = document.createElement("td");
            quantité.innerHTML = "X" + elem.quantité;
            tableauQuantité.appendChild(quantité);

            if(elem.id !== undefined){
                const requestNounours = new XMLHttpRequest();
                requestNounours.onreadystatechange = function() {

                    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                        const nounours = JSON.parse(this.responseText);
            
                        //creer un p pour les noms
                        const name = document.createElement("td");
                        name.innerHTML = nounours.name;
                        tableauNom.appendChild(name);
            
                        //creer une balise img pour les images
                        const imgArticle = document.createElement("td");
                        const img = document.createElement("img");
                        img.src = nounours.imageUrl;
                        imgArticle.appendChild(img);
                        tableauArticle.appendChild(imgArticle);
            
                        //creer un p pour les prix
                        const prix = document.createElement("td");
                        prix.innerHTML = nounours.price + " €";
                        tableauPrix.appendChild(prix);
                        
                        //calcul + creer un p pour le pix total
                        let prixSpec = Number (nounours.price);
                        let calculPrixTotal = prixSpec * elem.quantité;
                        prixTotal += calculPrixTotal;
                        blockPrixTotal.innerHTML = prixTotal + "€";
                        tableauPrixTotal.appendChild(blockPrixTotal);

                        plein.classList.remove("hidden");
                        vide.classList.add("hidden");
                        viderPanier.classList.remove("hidden");
                    }    
                };
                requestNounours.open("GET", "http://localhost:3000/api/teddies/" + elem.id);
                requestNounours.send();
            }
        }
    }
}

const buttonForm = document.getElementById("buttonForm");

buttonForm.onclick = function verification(){
    const form = document.getElementById("formulaire");
    console.log(form)
};