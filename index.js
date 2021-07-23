/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts. 
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */

function getTotalCount(animals) {
// Input: An array of animal objects.
// Ouput: The TOTAL of ALL animal counts in NUMBER 
// Edgecase: What would return if an empty array was entered
//Define your default
// IF there is no count,
if (!animals) {
  return 0;
}
let total = 0;
// Define your loop
for (const i of animals) {
  //Accumulating 
  if (i.count) {
    total += i.count
    }
  }
    return total // 
}
/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
// Input: An array of animal objects
// Output: An ARRAY of strings of the 'kind' key

if (!animals) {
  return []; // If an empty array is passed in as an argument, return EMPTY array
}
//Define your default value
let kind = [];
// Define your loop
for (const i of animals) {
  //Accumulating
  if (i.kind) {
    kind.push(i.kind)
  }
}
  return kind
}


/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {

// Input: An array of animal objects
// Input2: A NUMBER, the lowest count of animals to include
// Output: An ARRAY of objects, that represents all animals that have a count EQUAL or GREATER than the 'minimum' parameter

if (!animals) {
  return []; // return empty array if there is not argument passed in
}

// Define your default value
let animal = [];
// Define your loop
for (const i of animals) {
  //Accumulating
  if (i.count >= minimum) {
    animal.push(i)
  }
}
  return animal 
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {

  // Input: An array of animal objects
  // Outut: The OBJECT which represents the animal with the HIGHEST COUNT

  if (animals.length === 0) {
    return null
  }

  // Define your default value
  let isHighest = animals[0]
  // Define your loop
  for (const i of animals) {
    if (i.count > isHighest.count) {
      isHighest = i
    }
  }
    return isHighest
}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
