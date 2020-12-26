fetch('http://localhost:3000/api/teddies')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    showsOrder(data)
  })
  .catch((err) => {
    // Do something for an error here
    console.log(err);
  })  

  function showsOrder(data) {
    let ul = document.createElement('ul');
    let orders = JSON.parse(localStorage["id"]);
    
    console.log(orders);
    let li = document.createElement('li');
    li.className = "ArtOrders";
    for(i=0; i<data.length; i++) {
      //console.log(data[i]._id)
      //console.log('1');//test
      if(orders == []) {
        li.innerHTML  = "Aucun produit n'a était ajouter"
      }
      for(j=0; j<orders.length; j++) {
        //console.log("2"); //test
        if(orders[j].id == data[i]._id) { //
          //console.slog("true");
          let articleImg = '<a class="prodOrder" href="./product.html?id=' + data[i]._id + '"><img class="imgOrder" src="' + data[i].imageUrl + '" alt="l\'image du produit"/></a>';
          //console.log("2");
          let articleName = '<a class="prodOrder" href="./product.html?id=' + data[i]._id + '"><h2 class="artNameOrder">' + data[i].name + '</h2></a>'; //nom des produits
          //console.log("3");
          let articlePrice = '<p class="artPricesOrder">' + data[i].price + ' €' + '</p>'; //Prix de chaque produits
          //console.log(articlePrice);
          let quantite = "<p>" + orders[j].quantite + "</p>";
          let sommeArticle = "<p>" + orders[j].quantite * data[i].price + " € </p>";
          
          li.innerHTML = articleImg  + articleName + articlePrice + quantite + sommeArticle;

        } 
      
      }
      ul.appendChild(li)
    }
    articleOrders.appendChild(ul);
  }
  

    /*for(j=0, j<localS.length, j++) {
      if(localS.length > 0) {
        for(i=0; i<data.length; i++) {
          let li = document.createElement('li');
          let articleImg = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><img class="imagesProd" src="';
          
          let articleName = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><h2 class="artName">' + data[i].name + '</h2></a>'; //nom des produits
          let articlePrice = '<p class="artPrices">' + data[i].price + ' €' + '</p>'; //Prix de chaque produits

          if(data[i].id = localS['id']) {
            li.innerHTML = articleImg  + articleName + articleDescrip + articleSelect + articlePrice;
          }
        } else {
          li.innerHTML  = "Aucun produit ajouter"
        }
        ul.appendChild(li);
      }
    */
    
    
    
  