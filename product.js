//Crrer un requete pour recuperer les produits para rapport aux clés
fetch('http://localhost:3000/api/teddies')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
    showsArticle(data)
    btnAddSelect.addEventListener(click, function addSelectArticle() {
      
    } )
  })
  .catch((err) => {
    // Do something for an error here
    console.log(err);
  })/*
  function showArticle() {
      let articleUrl = windows.location.href.serchParams.get("id"):
      console.log(articleUrl);
      
  }
  showArticle();*/
let articleUrl = new URL(window.location.href);
let articleId = articleUrl.searchParams.get("id")
 console.log(articleId);
let btnAddSelect = document.getElementsByClassName('addSelect');
//let articleBasket = 

 function showsArticle(data) {
    let ul = document.createElement('ul');
    

    
      for(i=0; i<data.length; i++) {
        let li = document.createElement('li');
        let articleImg = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><img class="imagesProd" scr="';
        let articleSelect = "<select>"; //Liste deroulante; variable select
        let articleName = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><h2 class="artName">' + data[i].name + '</h2></a>'; //nom des produits
        let articleDescrip = '<p class="description">' + data[i].description +'</p>'; //Descriptions des articles
        let articlePrice = '<p class="artPrices">' + data[i].price + ' €' + '</p>'; //Prix de chaque produits
        let btnAddArticle = '<button class="addSelect" value="data[i]._id">Ajouter</button>'; //bouton ajouter produit
        if(articleId == data[i]._id) {
        
          //parcourir le tableu couleur data[i].color
          for(j=0; j<data[i].colors.length; j++) {
            //parcourir tous les couleurs de chaque produit
            articleSelect += "<option>" + data[i].colors[j] + "</option>"; 
          }
          articleSelect += "</select>";
          articleImg += data[i].imageUrl + '" alt="l\'image du produit"/></a>';
          
          console.log(btnAddArticle);
          li.innerHTML = articleImg  + articleName + articleDescrip + articleSelect + articlePrice + btnAddArticle;
          
          ul.appendChild(li);
      }
    } 
    
    
    articleBox.appendChild(ul);
  }

  //function pour enregistrer les article ajouter
  