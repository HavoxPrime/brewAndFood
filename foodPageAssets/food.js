// setting vars
var allRand;
var sortedList;
var bigBox = $("#main-recipe");
var fourSmall = [
  $("#alt-recipe-1"),
  $("#alt-recipe-2"),
  $("#alt-recipe-3"),
  $("#alt-recipe-4"),
];

// fetching data
//random recipies
fetch(
  "https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=fb075c41&app_key=1916b0e913f376b4311b0b2c82a39941&random=true",
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
    console.log("All random");
    allRand = data;
    console.log(data);
    setPage();
  });

function sortRecipes() {
  var chosenCuisine; // = {THE USERS CHOSEN CUISINE HERE}
  //by cuisine
  fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&cuisineType=" +
      chosenCuisine +
      "&app_id=fb075c41&app_key=1916b0e913f376b4311b0b2c82a39941&random=true",
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
      console.log(chosenCuisine + " foods");
      sortedList = data;
      console.log(data);
      setPage();
    });
}

function setPage() {
  //   if (sortedList !== null) {
  //   } else {
  //   }
  bigBox.children().children(".card-title").text(allRand.hits[0].recipe.label);
  var boxText = "";
  for (i = 0; i < 3; i++) {
    boxText += allRand.hits[0].recipe.ingredientLines[i] + ", ";
  }
  boxText += " Time Needed: " + allRand.hits[0].recipe.totalTime + " minutes.";
  //console.log(allRand.hits[0].recipe.totalTime);
  bigBox.children().children(".card-text").text(boxText);
  bigBox
    .children()
    .append("<a href='" + allRand.hits[0].recipe.url + "'> LinkHere </a>");
  bigBox
    .children(".card-img-top")
    .attr("src", allRand.hits[0].recipe.image)
    .css("max-width", "30%");
  for (i = 1; i - 1 < fourSmall.length; i++) {
    fourSmall[i - 1]
      .children()
      .children(".card-title")
      .text(allRand.hits[i].recipe.label);
    var smallText = "";
    for (x = 0; x < 3; x++) {
      smallText += allRand.hits[i].recipe.ingredientLines[x] + ", ";
    }
    fourSmall[i - 1].children().children(".slot1").text(smallText);
    fourSmall[i - 1]
      .children()
      .children(".slot2")
      .text("Time Needed: " + allRand.hits[i].recipe.totalTime + " minutes");
    fourSmall[i - 1]
      .children(".card-img-top")
      .attr("src", allRand.hits[i].recipe.image)
      .css("max-width", "30%");
    fourSmall[i - 1]
      .children()
      .children(".card-link")
      .attr("href", allRand.hits[i].recipe.url);
  }
}
