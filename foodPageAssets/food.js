// setting vars
var allRand;
var sortedList;
const bigBox = $("#main-recipe");
const fourSmall = [
  $("#alt-recipe-1"),
  $("#alt-recipe-2"),
  $("#alt-recipe-3"),
  $("#alt-recipe-4"),
];
const botBox = $("#random-recipe");

//stuff for buttons
var cuisineBntPresed = $(".cuisineSort");
var dayBntPresed = $(".daySort");
var timeBntPresed = $(".timeSort");
const cuisineSortList = ["Italian", "Mexican", "Chinese", "American"];
var btnValue;
$(function () {
  cuisineBntPresed.on("click", function () {
    btnValue = $(this).data().value;
    sortRecipes();
  });
});
$(function () {
  dayBntPresed.on("click", function () {
    btnValue = $(this).data().value;
    sortRecipes();
  });
});
$(function () {
  timeBntPresed.on("click", function () {
    btnValue = $(this).data().value;
    sortRecipes();
  });
});

// gets random recipes to start
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

// sets up the page with recipes
function setPage() {
  if (sortedList !== undefined) {
    bigBox
      .children()
      .children(".card-title")
      .text(sortedList.hits[0].recipe.label);
    var boxText = "";
    for (i = 0; i < 3; i++) {
      boxText += sortedList.hits[0].recipe.ingredientLines[i] + ", ";
    }
    boxText +=
      " Time Needed: " + sortedList.hits[0].recipe.totalTime + " minutes.";
    bigBox.children().children(".card-text").text(boxText);
    bigBox
      .children()
      .children(".card-link")
      .attr("href", sortedList.hits[0].recipe.url);
    bigBox
      .children(".card-img-top")
      .attr("src", sortedList.hits[0].recipe.image)
      .css("max-width", "30%");
    for (i = 1; i - 1 < fourSmall.length; i++) {
      fourSmall[i - 1]
        .children()
        .children(".card-title")
        .text(sortedList.hits[i].recipe.label);
      var smallText = "";
      for (x = 0; x < 3; x++) {
        smallText += sortedList.hits[i].recipe.ingredientLines[x] + ", ";
      }
      fourSmall[i - 1].children().children(".slot1").text(smallText);
      fourSmall[i - 1]
        .children()
        .children(".slot2")
        .text(
          "Time Needed: " + sortedList.hits[i].recipe.totalTime + " minutes"
        );
      fourSmall[i - 1]
        .children(".card-img-top")
        .attr("src", sortedList.hits[i].recipe.image)
        .css("max-width", "30%");
      fourSmall[i - 1]
        .children()
        .children(".card-link")
        .attr("href", sortedList.hits[i].recipe.url);
    }
  } else {
    bigBox
      .children()
      .children(".card-title")
      .text(allRand.hits[0].recipe.label);
    var boxText = "";
    for (i = 0; i < 3; i++) {
      boxText += allRand.hits[0].recipe.ingredientLines[i] + ", ";
    }
    boxText +=
      " Time Needed: " + allRand.hits[0].recipe.totalTime + " minutes.";
    bigBox.children().children(".card-text").text(boxText);
    bigBox
      .children()
      .children(".card-link")
      .attr("href", allRand.hits[0].recipe.url);
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
  botBox.children().children(".card-title").text(allRand.hits[9].recipe.label);
  var boxText = "";
  for (i = 0; i < 3; i++) {
    boxText += allRand.hits[9].recipe.ingredientLines[i] + ", ";
  }
  boxText += " Time Needed: " + allRand.hits[9].recipe.totalTime + " minutes.";
  botBox.children().children(".card-text").text(boxText);
  botBox
    .children()
    .children(".card-link")
    .attr("href", allRand.hits[9].recipe.url);
  botBox
    .children(".card-img-top")
    .attr("src", allRand.hits[9].recipe.image)
    .css("max-width", "30%");
}

// sorts on click
function sortRecipes() {
  var chosenSort = btnValue;
  var useSearch;
  var isCuisine;
  console.log(typeof chosenSort);
  for (i = 0; i < cuisineSortList.length; i++) {
    if (btnValue == cuisineSortList[i]) {
      console.log("cuisine button");
      isCuisine = true;
    }
  }
  if (typeof chosenSort == "number") {
    useSearch = "time";
  } else if (isCuisine == true) {
    useSearch = "cuisine";
  } else {
    useSearch = "meal";
  }

  if (useSearch === "cuisine") {
    //by cuisine
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&cuisineType=" +
        chosenSort +
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
        console.log(chosenSort + " foods");
        sortedList = data;
        console.log(data);
        setPage();
      });
  } else if (useSearch == "meal") {
    console.log("meal button");
    //by meal type
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&mealType=" +
        chosenSort +
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
        console.log(chosenSort + " foods");
        sortedList = data;
        console.log(data);
        setPage();
      });
  } else if (useSearch == "time") {
    // get by time
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&time=" +
        chosenSort +
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
        console.log(chosenSort + " min foods");
        sortedList = data;
        console.log(data);
        setPage();
      });
  }
}
