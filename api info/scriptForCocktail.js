//for our cocktail ingredient api
//with Alcohol
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

//without alcohol
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

// get drink img with "drink url"/preview (example: Bloody Mary)
// https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg/preview
// url can be got from getting the drink by id and then using the strDrinkThumb key

//sorting info
// https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// used to sort by categories

// https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// used to sort by glasses

// https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// used to sort by ingredients

// https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list
// used to sort by alcoholic fillters
