//Accessing Sidebar Link Elements
var alcoholDropdownEl = $("#alcohol-type");

//Accessing Main Popular Recipe Card Elements
var mainPopularImgEl = $("#main-popular-img");
var mainPopularTitleEl = $("#main-popular-title");
var mainPopularListEl = $("#main-popular-category");
var mainPopularInstructionsEl = $("#main-popular-description");

//Accessing Popular Recipe Card Elements

//Card 1
var popular1ImgEl = $("#popular1-img");
var popular1TitleEl = $("#popular1-title");
var popular1ListEl = $("#popular1-category");
var popular1InstructionsEl = $("#popular1-description");

//Card 2
var popular2ImgEl = $("#popular2-img");
var popular2TitleEl = $("#popular2-title");
var popular2ListEl = $("#popular2-category");
var popular2InstructionsEl = $("#popular2-description");

//Card 3
var popular3ImgEl = $("#popular3-img");
var popular3TitleEl = $("#popular3-title");
var popular3ListEl = $("#popular3-category");
var popular3InstructionsEl = $("#popular3-description");

//Card 4
var popular4ImgEl = $("#popular4-img");
var popular4TitleEl = $("#popular4-title");
var popular4ListEl = $("#popular4-category");
var popular4InstructionsEl = $("#popular4-description");

//Accessing Random Recipe Card Elements
var randomImgEl = $("#random-img");
var randomTitleEl = $("#random-title");
var randomListEl = $("#random-category");
var randomInstructionsEl = $("#random-description");

var randomRecipeLink;

var initialRandomImgs = [];
var initialRandomNames = [];
var initialRandomCategories = [];
var initialRandomInstructions = [];
var initialRandomIds = [];

var randomImg;
var randomName;
var randomCategory;
var randomInstructions;
var randomId;

async function initialLoad() {
  randomRecipeLink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  await $.ajax({
    url: randomRecipeLink,
    method: "GET",
  }).then(function (data) {
    randomImg = data.drinks[0].strDrinkThumb;
    randomName = data.drinks[0].strDrink;
    randomCategory = data.drinks[0].strCategory;
    randomInstructions = data.drinks[0].strInstructions;
    randomId = data.drinks[0].strIdDrink;

    initialRandomImgs.push(randomImg);
    initialRandomNames.push(randomName);
    initialRandomCategories.push(randomCategory);
    initialRandomInstructions.push(randomInstructions);
    initialRandomIds.push(randomId);
  });
  generateInitialContent();
}
for (i = 0; i < 6; i++) {
  initialLoad();
}

function generateInitialContent() {
  mainPopularImgEl.attr("src", initialRandomImgs[0]);
  popular1ImgEl.attr("src", initialRandomImgs[1]);
  popular2ImgEl.attr("src", initialRandomImgs[2]);
  popular3ImgEl.attr("src", initialRandomImgs[3]);
  popular4ImgEl.attr("src", initialRandomImgs[4]);
  randomImgEl.attr("src", initialRandomImgs[5]);

  mainPopularTitleEl.text(initialRandomNames[0]);
  popular1TitleEl.text(initialRandomNames[1]);
  popular2TitleEl.text(initialRandomNames[2]);
  popular3TitleEl.text(initialRandomNames[3]);
  popular4TitleEl.text(initialRandomNames[4]);
  randomTitleEl.text(initialRandomNames[5]);

  mainPopularListEl.text(initialRandomCategories[0]);
  popular1ListEl.text(initialRandomCategories[1]);
  popular2ListEl.text(initialRandomCategories[2]);
  popular3ListEl.text(initialRandomCategories[3]);
  popular4ListEl.text(initialRandomCategories[4]);
  randomListEl.text(initialRandomCategories[5]);

  mainPopularInstructionsEl.text(initialRandomInstructions[0]);
  popular1InstructionsEl.text(initialRandomInstructions[1]);
  popular2InstructionsEl.text(initialRandomInstructions[2]);
  popular3InstructionsEl.text(initialRandomInstructions[3]);
  popular4InstructionsEl.text(initialRandomInstructions[4]);
  randomInstructionsEl.text(initialRandomInstructions[5]);
}

var drinkByAlcoholTypeAPI;
var drinksAfterInput = [];
var drinkImages = [];
var drinkName = [];
var drinkId = [];

var mainDetailsById;
var popular1DetailsById;
var popular2DetailsById;
var popular3DetailsById;
var popular4DetailsById;

function loadOnClick(event) {
  event.preventDefault();

  if (alcoholDropdownEl.val() == "non-alcoholic") {
    drinkByAlcoholTypeAPI =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
  } else {
    drinkByAlcoholTypeAPI =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
      alcoholDropdownEl.val();
  }
  $.ajax({
    url: drinkByAlcoholTypeAPI,
    method: "GET",
  }).then(function (data) {
    function randomSuggestedDrinks() {
      randomDrinkOptionsAfterInput = data.drinks;
      randomDrinkAfterInput =
        randomDrinkOptionsAfterInput[
          Math.floor(Math.random() * randomDrinkOptionsAfterInput.length)
        ];
    }
    for (i = 0; i < 5; i++) {
      randomSuggestedDrinks();

      if (drinksAfterInput.includes(randomDrinkAfterInput)) {
        i--;
        return;
      } else drinksAfterInput.push(randomDrinkAfterInput);
    }

    for (i = 0; i < 5; i++) {
      drinkImages.push(drinksAfterInput[i].strDrinkThumb);
    }

    mainPopularImgEl.attr("src", drinkImages[0]);
    popular1ImgEl.attr("src", drinkImages[1]);
    popular2ImgEl.attr("src", drinkImages[2]);
    popular3ImgEl.attr("src", drinkImages[3]);
    popular4ImgEl.attr("src", drinkImages[4]);

    for (i = 0; i < 5; i++) {
      drinkName.push(drinksAfterInput[i].strDrink);
    }

    mainPopularTitleEl.text(drinkName[0]);
    popular1TitleEl.text(drinkName[1]);
    popular2TitleEl.text(drinkName[2]);
    popular3TitleEl.text(drinkName[3]);
    popular4TitleEl.text(drinkName[4]);

    for (i = 0; i < 5; i++) {
      drinkId.push(drinksAfterInput[i].idDrink);
    }

    mainDetailsById =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId[0];
    popular1DetailsById =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId[1];
    popular2DetailsById =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId[2];
    popular3DetailsById =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId[3];
    popular4DetailsById =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId[4];

    $.ajax({
      url: mainDetailsById,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      mainPopularListEl.text(data.drinks[0].strCategory);
      mainPopularInstructionsEl.text(data.drinks[0].strInstructions);
    });
    $.ajax({
      url: popular1DetailsById,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      popular1ListEl.text(data.drinks[0].strCategory);
      popular1InstructionsEl.text(data.drinks[0].strInstructions);
    });
    $.ajax({
      url: popular2DetailsById,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      popular2ListEl.text(data.drinks[0].strCategory);
      popular2InstructionsEl.text(data.drinks[0].strInstructions);
    });
    $.ajax({
      url: popular3DetailsById,
      method: "GET",
    }).then(function (data) {
      popular3ListEl.text(data.drinks[0].strCategory);
      popular3InstructionsEl.text(data.drinks[0].strInstructions);
    });
    $.ajax({
      url: popular4DetailsById,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      popular4ListEl.text(data.drinks[0].strCategory);
      popular4InstructionsEl.text(data.drinks[0].strInstructions);
    });
  });
  drinksAfterInput = [];
  drinkImages = [];
  drinkName = [];
  drinkId = [];
}

alcoholDropdownEl.on("change", loadOnClick);
