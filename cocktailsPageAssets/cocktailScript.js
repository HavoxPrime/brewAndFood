//Js
//waiting for variables from the html!!!
//declare variables!!!!
var alchoholicDrinks= $("Alchoholic")
var nonAlchoholicDrinks= $("Non_Alchoholic")


//alchoholic drinks 
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic", {
  method: "GET",
  credentials: "same-origin",
  redirect: "follow",
  cache: "no-store",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Alchoholic");
    console.log(data);
    
  });

// non-alchoholic drincks
fetch(
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
  {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
    cache: "no-store",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      
    console.log("Non_Alchoholic");
    console.log(data);
  });

  // get ingredient by name (example: vodka)
  //this is a short discription of the ingredient
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=Vodka", {
  method: "GET",
  credentials: "same-origin",
  redirect: "follow",
  cache: "no-store",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("The ingredient vodka");
    console.log(data);
  });

  // get drinks by ingredient (example: vodka)
  //this is lists drinks based on the ingredients
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka", {
  method: "GET",
  credentials: "same-origin",
  redirect: "follow",
  cache: "no-store",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("The drinks made with vodka");
    console.log(data);
  });

  // get drinks by id (example: Bloody Mary)
fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11113", {
  method: "GET",
  credentials: "same-origin",
  redirect: "follow",
  cache: "no-store",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("The Bloody Mary");
    console.log(data);
  });

  //sorting info
// https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// used to sort by categories

// https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// used to sort by glasses


//this list out the ingredients name we can use to 
// https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// used to sort by ingredients

// https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list
// used to sort by alcoholic fillters
