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

  document.getElementById("basketCard").innerHTML = localStorage["number"];

  function showsOrder(data) {
    let articleOrder = document.getElementById("articleOrders");
    let ul = document.createElement('ul');
    ul.className = "ArtOrdersUl";
    let orders = JSON.parse(localStorage["id"]);
    
    console.log(orders);
    
    //for(i=0; i<data.length; i++) {
      //console.log('1');//test
    if(localStorage["number"] > 0) {
      for(j=0; j<orders.length; j++) {

        //console.log("2"); //test
        for(i=0; i<data.length; i++) {
          if(orders[j].id == data[i]._id) { //
            //console.log("true");
            //console.log(data[i]);
            //console.log(orders[j]);
            let li = document.createElement('li'); //creer balise li
            li.className = "ArtOrdersLi"; // attribuer une classe "ArtOrdersLi"
            let deleteArticle = document.createElement('i'); //creer la balise <div>
            deleteArticle.className = "fas fa-trash-alt"; //attribuer la classe 

            let articleImg = '<a class="prodOrder" href="./product.html?id=' + data[i]._id + '"><img class="imgOrder" src="' + data[i].imageUrl + '" alt="l\'image du produit"/></a>';
            //console.log("2");
            let articleName = '<a class="prodOrder" href="./product.html?id=' + data[i]._id + '"><h2 class="artNameOrder">' + data[i].name + '</h2></a>'; //nom des produits
            //console.log("3");
            let articlePrice = '<p class="artPricesOrder"> Prix Unitaire : ' + data[i].price + ' €' + '</p>'; //Prix de chaque produits
            //console.log(articlePrice);
            let quantite = "<p> Quantité :" + orders[j].quantite + "</p>";
            let sommeArticle = "<p> Total : " + orders[j].quantite * data[i].price + " € </p>";
            let articleColor = "<p> Option : " + orders[j].option + "</p>";
            //let deleteArticle = orders[j]
            

            li.innerHTML = articleImg  + articleName + articleColor + articlePrice + quantite + sommeArticle;
            ul.appendChild(li)
            li.appendChild(deleteArticle)
            console.log(j, orders[j])
            let temp = j;
            deleteArticle.addEventListener('click', function(){
              orders.splice(temp, 1);
              localStorage.setItem("id", JSON.stringify(orders));
              localStorage.setItem("number", orders.length);
              document.location.reload();
              console.log(orders);
              console.log(localStorage);
            });
          } 
        }
      }
    } else {
      let aucunArticle = "<h2> Aucun produit n'a était ajouter </h2>";
      let div = document.createElement('div');
      div.innerHTML  = aucunArticle;

    }
    
    document.getElementsByClassName("basketCard").innerHTML = JSON.parse(localStorage["number"]);
    articleOrder.appendChild(ul);
    
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
    
    
    
  