// Variable with distance in kilometers
let kilometers = 5;

// Function to convert kilometers to miles
function convertKilometersToMiles(kilometers) {
  return kilometers * 0.621371;
}

// Output the distance converted to miles
let miles = convertKilometersToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
