

/*// Creer une requete est assigner le "new XMLHttpRequest"
var request = new XMLHttpRequest();

//ouvrir la connection avec le server
request.open('GET', 'http://localhost:3000/api/teddies');

//Envoi de la requete
request.send();
*/

fetch('http://localhost:3000/api/teddies')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
    affiche(data);
  })
  .catch((err) => {
    // Do something for an error here
    console.log(err);
  })


function affiche(data) {
  let ul = document.createElement('ul');

  for(i=0; i<data.length; i++) {
    let li = document.createElement('li');
    let articleImg = '<a href="./produit.html"><img class="imagesProd" scr="';
    let articleSelect = "<select>"; //Liste deroulante
    let articleName = '<a href="./produit.html"><h2 class="artName">' + data[i].name + '</h2></a>'; //nom des produits
    let articleDescrip = '<p>' + data[i].description +'</p>'; //Descriptions des articles
    let articlePrice = '<p>' + data[i].price + ' €' + '</p>'; //Prix de chaque produits
    //parcourir le tableu couleur data[i].color
    for(j=0; j<data[i].colors.length; j++) {
      //creer variable select
      articleSelect += "<option>" + data[i].colors[j] + "</option>"; 
    }
    articleSelect += "</select>";
    articleImg += data[i].imageUrl + '" alt="l\'image du produit"></a>';
    li.innerHTML = articleImg  + articleName + articleDescrip /*+ articleSelect*/ + articlePrice;

    ul.appendChild(li);
  }
  articleBox.appendChild(ul);
}
