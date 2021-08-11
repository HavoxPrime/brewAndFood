// setting vars
var allRand;
var sortedList;

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
  });

function sortRecipes() {
  var chosenCuisine; // = {THE USERS CHOSEN CUISINE HERE}
  //by cuisine
  fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&cuisineType=" +
      chosenCuisine +
      "&app_id=fb075c41&app_key=1916b0e913f376b4311b0b2c82a39941",
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
    });
}

function setPage() {
  if (sortedList !== null) {
  } else {
  }
}
