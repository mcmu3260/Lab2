// Variables with the diameter of the end of the circle and the height in meters
let diameter = 5;
let height = 10;

// Function to calculate the volume of a cylinder
function calculateCylinderVolume(diameter, height) {
 let radius = diameter / 2;
 return Math.PI * Math.pow(radius, 2) * height;
}

// Output the volume of the cylinder
let volume = calculateCylinderVolume(diameter, height);
console.log(`The volume of the cylinder with a diameter of ${diameter} meters and a height of ${height} meters is ${volume} cubic meters.`);