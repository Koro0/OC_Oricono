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

  
let articleUrl = new URL(window.location.href);
let articleId = articleUrl.searchParams.get("id")
  console.log(articleId);
let btnAddSelect = document.getElementsByClassName('addSelect');
//let articleBasket = 
let selectArticle = localStorage;
console.log(selectArticle);
// variable localStorage pour basket pour les articles ajoutées
  function showsArticle(data) {
    let ul = document.createElement('ul');
    //console.log(data);

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
        let panier = [{}]

        butt.addEventListener('click', function(){
          
          let opt = document.getElementById("liste").options[document.getElementById('liste').selectedIndex].text;
          //console.log(opt); //option selectionner
          
          panier.push({
            "id" : articleUrl.searchParams.get("id"),
            "quantité" : 1,
            "option" : opt
          })
          console.log(panier);
          localStorage.setItem("id", JSON.stringify(panier));
          console.log(localStorage); 
          
          //let panierLocal = JSON.parse(localStorage.getItem("id", JSON.stringify(panier)));
          //console.log(panierLocal);
          //l&sl&sconsole.log(localStorage);
          // let local = localStorage.getItem('id'); // id : 564-879-458
          // let idarray = local.split('-');
          console.log(panier.length);
          //document.getElementsByClassName("basketCard").innerHTML = panier.length;
        }, false);
        
      }
    } 
    
    
    articleBox.appendChild(ul);
  }
/*
  //function pour enregistrer les article ajouter
  function addSelectArticle() {
    selectArticle += articleId ;
    console.log(selectArticle);
    document.getElementById(basketCard).innerHTML = selectArticle.length;
  }
  */