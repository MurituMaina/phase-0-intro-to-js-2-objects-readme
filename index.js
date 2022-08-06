const address = {
    street:{
      line1:"11 Broadway",
      line2:"2nd Floor",
    },
    city:"New York",
    state:"NY",
   zipCode:"3234rf" ,
  }
  console.log(address);
  console.log(address.street.line2);
//   Accessing Nonexistent Properties
address.country;
//=> undefined
  const meals = {
    breakfast: "Avocado toast",
    lunch: "Avocado Orange Apple",
    dinner: "Avocado Lemon tea",
  };
  
  console.log(meals.breakfast);
  // => "Avocado toast"
  
  console.log(meals.dinner);

  //But keys must be unique. If the same key is used for multiple properties, only the final value will be retained. The rest will be overwritten:

const eat = {
  breakfast: "Avocado toast",
  breakfast: "Oatmeal",
  breakfast: "Scrambled eggs",
};

console.log(eat);
// => { breakfast: "Scrambled eggs" }

// Access a Value  using either dot notation or bracket notation\

// Bracket Notation
address["street"];
//=> { line1: "11 Broadway", line2: "2nd Floor" }

address["street"]["line1"];
//=> "11 Broadway"

address["street"]["line2"];
//=> "2nd Floor"

address["city"];
//=> "New York"

address["state"];
//=> "NY"

address["zipCode"];
//=> "10004"


//Nonstandard Keys
const wildKeys = {
    "Cash rules everything around me.": "Wu",
    "C.R.E.A.M.": "Tang",
    "Get the money.": "For",
    "$ $ bill, y'all!": "Ever",
  };
//    Example of incorrect use of  dot notation for Nonstandard keys
//   wildKeys.'Cash rules everything around me.';
// ERROR: Uncaught SyntaxError: Unexpected string
wildKeys["$ $ bill, y'all!"];
//=> "Ever"
// camelCaseEverything
// Start the key with a lowercase letter
// No spaces or punctuation


// Accessing Properties Dynamically

console.log(address["zip" + "Code"]);
//=> "10004"
// Pretty neat, but the real strength of bracket notation is its ability to compute the value of variables on the fly. For example:

const meal = {
  breakfast: "Oatmeal",
  lunch: "Caesar salad",
  dinner: "Chimichangas",
};

let mealName = "lunch";

console.log(meal[mealName]);
//=> "Caesar salad"
// Key note the  variable is not in quotes in the square bracket 




const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const me = {
  [morningMeal]: "French toast",
  [middayMeal]: "Personal pizza",
  [eveningMeal]: "Fish and chips",
};

console.log(me);
//=> { breakfast: "French toast", lunch: "Personal pizza", dinner: "Fish and chips" }
// Once again, by wrapping the variable names in square brackets, we're letting JavaScript know that it needs to interpret the contents. Let's try doing the same thing without the square brackets:

const morningMea = "breakfast";
const middayMea = "lunch";
const eveningMea = "dinner";

const m = {
  morningMeal: "French toast",
  middayMeal: "Personal pizza",
  eveningMeal: "Fish and chips",
};

console.log(m);
//=> { morningMeal: "French toast", middayMeal: "Personal pizza", eveningMeal: "Fish and chips" }

// Object Keys
const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  
  console.log(Object.keys(wednesdayMenu));
  //=> ["cheesePlate", "fries", "salad"]
  console.log(Object.keys(wednesdayMenu.cheesePlate));


//   Object.values()
console.log(Object.values(wednesdayMenu));