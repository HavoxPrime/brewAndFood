//for our food api
//by cuisine (example : italian)
fetch(
  "https://api.edamam.com/api/recipes/v2?type=public&cuisineType=italian&app_id=fb075c41&app_key=1916b0e913f376b4311b0b2c82a39941",
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
    console.log("Italian foods");
    console.log(data);
  });

//by time (example : 10)
fetch(
  "https://api.edamam.com/api/recipes/v2?type=public&time=10&app_id=fb075c41&app_key=1916b0e913f376b4311b0b2c82a39941",
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
    console.log("10 minute or less foods");
    console.log(data);
  });

//by time (example : lunch)
fetch(
  "https://api.edamam.com/api/recipes/v2?type=public&mealType=lunch&app_id=fb075c41&app_key=1916b0e913f376b4311b0b2c82a39941",
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
    console.log("lunch foods");
    console.log(data);
  });

//get a specific recipe
fetch(
  "https://api.edamam.com/api/recipes/v2/recipe_23ae65b3c93f2b0f4b7cf100c3ab4061?type=public&app_id=fb075c41&app_key=1916b0e913f376b4311b0b2c82a39941",
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
    console.log("rhurbarb juice");
    console.log(data);
  });

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
    console.log(data);
  });

// images can be found under OBJNAME.hits[i].recipe.image (example :rhubarb juice) https://www.edamam.com/web-img/f14/f1492ce026ed044bb4fa847a56de096f.jpg
