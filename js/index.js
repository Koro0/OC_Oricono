
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

//premier visite du site, creer le nombre dans le panier et actualiser la page
window.onload = verifPanier;

function verifPanier() {
  if(localStorage['number'] == null) {
      localStorage.setItem('number', 0);
      document.location.reload();
  }
  
}


  function shows(data) {
  let ul = document.createElement('ul');
  ul.className = "justify-content-between";
  for(i=0; i<data.length; i++) {
    let li = document.createElement('li');
    li.className ="row col-lg-4 col-md-6 col-sm-12";
    let articleImg = '<a class="prodLink" href="./product.html?id=' + data[i]._id + '"><img class="imagesProd" src="';
    let articleSelect = "<select>"; //Liste deroulante; variable select
    let articleName = '<a class="prodLink text-dark" href="./product.html?id=' + data[i]._id + '"><h3 class="artName">' + data[i].name + '</h3></a>'; //nom des produits
    let articleDescrip = '<p class="description">' + data[i].description +'</p>'; //Descriptions des articles
    let articlePrice = '<p class="indexPrice">' + data[i].price + ' €' + '</p>'; //Prix de chaque produits
    
    
    //parcourir le tableu couleur data[i].color
    for(j=0; j<data[i].colors.length; j++) {
      //parcourir tous les couleurs de chaque produit
      articleSelect += "<option>" + data[i].colors[j] + "</option>"; 
    }
    articleSelect += "</select>";
    articleImg += data[i].imageUrl + '" alt="l\'image du produit"></a>';
    li.innerHTML = articleImg  + articleName + articleDescrip + "<p> Choix des couleurs : </p>" + articleSelect + articlePrice;
    ul.appendChild(li);
  }
  
  articlesBox.appendChild(ul);
}

