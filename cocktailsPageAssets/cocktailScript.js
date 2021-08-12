//Accessing Sidebar Link Elements
var alcoholDropdownEl = $("#alcohol-type");

//Accessing Main Popular Recipe Card Elements
var mainPopularImgEl = $("#main-popular-img");
var mainPopularTitleEl = $("#main-popular-title");
var mainPopularList1El = $("#main-popular-list1");
var mainPopularList2El = $("#main-popular-list2");
var mainPopularLinkEl = $("#main-popular-recipe-link");

//Accessing Popular Recipe Card Elements

//Card 1
var popular1ImgEl = $("#popular1-img");
var popular1TitleEl = $("#popular1-title");
var popular1List1El = $("#popular1-list1");
var popular1List2El = $("#popular1-list2");
var popular1LinkEl = $("#popular1-recipe-link");

//Card 2
var popular2ImgEl = $("#popular2-img");
var popular2TitleEl = $("#popular2-title");
var popular2List1El = $("#popular2-list1");
var popular2List2El = $("#popular2-list2");
var popular2LinkEl = $("#popular2-recipe-link");

//Card 3
var popular3ImgEl = $("#popular3-img");
var popular3TitleEl = $("#popular3-title");
var popular3List1El = $("#popular3-list1");
var popular3List2El = $("#popular3-list2");
var popular3LinkEl = $("#popular3-recipe-link");

//Card 4
var popular4ImgEl = $("#popular4-img");
var popular4TitleEl = $("#popular4-title");
var popular4List1El = $("#popular4-list1");
var popular4List2El = $("#popular4-list2");
var popular4LinkEl = $("#popular4-recipe-link");

//Accessing Random Recipe Card Elements
var randomImgEl = $("#random-img");
var randomTitleEl = $("#random-title");
var randomList1El = $("#random-list1");
var randomList2El = $("#random-list2");
var randomLinkEl = $("#random-recipe-link");

//waiting for variables from the html!!!
//declare variables!!!!
var alchoholicDrinks = $("Alchoholic");
var nonAlchoholicDrinks = $("Non_Alchoholic");

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

var drinkByAlcoholTypeAPI =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
  alcoholDropdownEl.val();

function loadInitial(event) {
  event.preventDefault();
  $.ajax({
    url: drinkByAlcoholTypeAPI,
    method: "GET",
  }).then(function (data) {
    if (alcoholDropdownEl.val() == "Non-Alcoholic") {
      drinkByAlcoholTypeAPI =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    }
    console.log(data);
  });
}

alcoholDropdownEl.on("change", loadInitial);

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
