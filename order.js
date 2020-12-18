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
    let localS = JSON.parse(JSON.stringify(localStoragel&));
    console.log(localS);
        for(i=0; i<data.length; i++) {
        let li = document.createElement('li');
        let articleImg = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><img class="imagesProd" src="';
        
        let articleName = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><h2 class="artName">' + data[i].name + '</h2></a>'; //nom des produits
        let articlePrice = '<p class="artPrices">' + data[i].price + ' €' + '</p>'; //Prix de chaque produits

        if(articleId == data[i]._id) {
        articleImg += data[i].imageUrl + '" alt="l\'image du produit"/></a>';
        
        
        li.innerHTML = articleImg  + articleName + articleDescrip + articleSelect + articlePrice;
        
        ul.appendChild(li);
      }
    } 
    
    
    articleOrders.appendChild(ul);
  }