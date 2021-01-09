//Crrer un requete pour recuperer les produits par rapport aux clés
fetch('http://localhost:3000/api/teddies')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    
    showsArticle(data)
  })
  .catch((err) => {
    // Do something for an error here
    console.log(err);
  })

  // recupere le Id du produit 
let articleUrl = new URL(window.location.href);
let articleId = articleUrl.searchParams.get("id");
console.log(articleUrl, articleId);
let btnAddSelect = document.getElementsByClassName('addSelect');
document.getElementById("basketCard").innerHTML = localStorage["number"];


function showsArticle(data) {
  let ul = document.createElement('ul');

  for(i=0; i<data.length; i++) {
    let li = document.createElement('li');
    let articleImg = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><img class="imagesProd" src="';
    let articleSelect = '<select id="liste">'; //Liste deroulante; variable select
    let articleName = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><h2 class="artName">' + data[i].name + '</h2></a>'; //nom des produits
    let articleDescrip = '<p class="description">' + data[i].description +'</p>'; //Descriptions des articles
    let articlePrice = '<p class="artPrices">' + data[i].price + ' €' + '</p>'; //Prix de chaque produits
    let btnAddArticle = '<button id="local" class="addSelect" value="articleId">Ajouter</button>'; //bouton ajouter produit
    if(articleId == data[i]._id) {
      
        //parcourir le tableu couleur data[i].color
        for(j=0; j<data[i].colors.length; j++) {
          //parcourir tous les couleurs de chaque produit
          articleSelect += "<option>" + data[i].colors[j] + "</option>"; 
        }
      articleSelect += "</select>";
      articleImg += data[i].imageUrl + '" alt="l\'image du produit"/></a>';
      
      
      li.innerHTML = articleImg  + articleName + articleDescrip + articleSelect + articlePrice;
      // li.innerHTML = articleImg  + articleName + articleDescrip + articleSelect + articlePrice + btnAddArticle;
      
      ul.appendChild(li);
      let butt = li.appendChild(document.createElement("button"));
      butt.innerHTML = btnAddArticle;
      let panier;
      
      butt.addEventListener('click', function(){
        let sameArticle = false;
        let opt = document.getElementById("liste").options[document.getElementById('liste').selectedIndex].text;
        //console.log(opt); //option selectionner
        if(localStorage["id"]) { //si le localStorage posséde deja du contenus
          panier = JSON.parse(localStorage["id"]); //objet recuperer  sur localStorage
          //console.log("existe");
        } else { //sinon Creer un tableau
          panier = [];
          //console.log("vide");
        }
        for(k=0; k<panier.length; k++) {//boucle dans le tableau panier
          // si cet article est deja present dans le panier et qui a les meme option
          if(panier[k].id == articleUrl.searchParams.get("id") && panier[k].option == opt) {
            panier[k].quantite += 1; //dans ce cas, on ajoute juste la quantité en plus
            sameArticle = true; //puis on change le boolean en "true"
          }
        }
        if(sameArticle == false) { // dans le condition où le boolean est "false"(produit non existent dans panier), on push le produit
          panier.push({
            "id" : articleUrl.searchParams.get("id"),
            "quantite" : 1,
            "option" : opt
          })
        }
        localStorage.setItem("id", JSON.stringify(panier));
        localStorage.setItem("number", panier.length);
        document.location.reload(); //actualise le page
      }, false);
    }
  } 
  articleBox.appendChild(ul);
}
