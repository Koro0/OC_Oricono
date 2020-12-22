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
  })/

  function showsOrder (data) {
    let ul = document.createElement('ul');
    //console.log(data);
    let localS = JSON.parse(JSON.stringify(localStorage));
    console.log(localS);
    for(j=0, j<localS.length, j++) {
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
      
    }
    
    
    articleOrders.appendChild(ul);
  }