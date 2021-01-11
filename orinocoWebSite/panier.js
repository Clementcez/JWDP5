
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

const generalBlock = document.getElementById("produits");
const block = document.createElement("div");
const numberBlock = document.getElementById("nombreArticle");
const vide = document.getElementById("vide");
const plein = document.getElementById("plein");
const blockPrixTotal = document.createElement("p");


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

            const blockDetails= document.createElement("div");
            //creer un p pour les noms
            const couleur = document.createElement("p");
            couleur.innerHTML = elem.couleur;
            blockDetails.appendChild(couleur);

            //creer un p pour les noms
            const quantité = document.createElement("p");
            quantité.innerHTML = "X" + elem.quantité;
            blockDetails.appendChild(quantité);

            generalBlock.appendChild(blockDetails);

            if(elem.id !== undefined){
                const requestNounours = new XMLHttpRequest();
                requestNounours.onreadystatechange = function() {

                    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                        const nounours = JSON.parse(this.responseText);
            
                        //creer un p pour les noms
                        const name = document.createElement("p");
                        name.innerHTML = nounours.name;
                        blockDetails.appendChild(name);
            
                        //creer une balise img pour les images
                        const img = document.createElement("img");
                        img.src = nounours.imageUrl;
                        blockDetails.appendChild(img);
            
                        //creer un p pour les prix
                        const prix = document.createElement("p");
                        prix.innerHTML = nounours.price + " €";
                        blockDetails.appendChild(prix);
                        
                        //calcul + creer un p pour le pix total
                        let prixSpec = Number (nounours.price);
                        let calculPrixTotal = prixSpec * elem.quantité;
                        prixTotal += calculPrixTotal;
                        blockPrixTotal.innerHTML = "Pour un total de " + prixTotal + "€";
                        
                        generalBlock.appendChild(blockDetails);
                        generalBlock.appendChild(blockPrixTotal);

                        plein.classList.remove("hidden");
                        vide.classList.add("hidden");
                    }    
                };
                requestNounours.open("GET", "http://localhost:3000/api/teddies/" + elem.id);
                requestNounours.send();
            }
        }
    }
}
