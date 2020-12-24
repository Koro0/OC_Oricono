

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
    shows(data);
  })
  .catch((err) => {
    // Do something for an error here
    console.log(err);
  })


function shows(data) {
  let ul = document.createElement('ul');
  let articleLi = "";
  for(i=0; i<data.length; i++) {
    let li = document.createElement('li');
    let articleImg = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><img class="imagesProd" src="';
    let articleSelect = "<select>"; //Liste deroulante; variable select
    let articleName = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><h2 class="artName">' + data[i].name + '</h2></a>'; //nom des produits
    let articleDescrip = '<p class="description">' + data[i].description +'</p>'; //Descriptions des articles
    let articlePrice = '<p class="artPrices">' + data[i].price + ' €' + '</p>'; //Prix de chaque produits
    let btnAddArticle = '<button>'; //bouton ajouter produit
    
    
    //parcourir le tableu couleur data[i].color
    for(j=0; j<data[i].colors.length; j++) {
      //parcourir tous les couleurs de chaque produit
      articleSelect += "<option>" + data[i].colors[j] + "</option>"; 
    }
    articleSelect += "</select>";
    articleImg += data[i].imageUrl + '" alt="l\'image du produit"></a>';
    li.innerHTML = articleImg  + articleName + articleDescrip /*+ articleSelect*/ + articlePrice;
    ul.appendChild(li);
  }
  
  articlesBox.appendChild(ul);
  document.getElementsByClassName("basketCard").innerHTML = JSON.parse(localStorage["number"]);
}

let articleUrl = window.location.search.substring(3);
console.log(articleUrl);