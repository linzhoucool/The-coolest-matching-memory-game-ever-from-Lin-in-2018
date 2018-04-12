


//Without Object Destructuring

 1.  
  let nameArr = "Colin Toh owns 10 detective books".split(' ')

      let[firstname, lastName, ,totalBooks,bookType] = nameArr








2.
const bookShelf = {totalBooks: 10, booksType: "detective", classics: 5, hardCovers: 5};
const {totalBooks,hardCovers,booksType,classics} = bookShelf
\

3.

const teamName = "tooling"
const people = [{name: "John", role: "senior"},
                {name: "David", role: "junior"},
                {name: "Joseph", role: "senior"},
                {name: "Dennis", role: "junior"}]
seniors = 0;

               for(person of people) {

                if(person.role == 'senior') {
                    seniors ++;
                }
               }

let message = 'There are ${people.length} people on the ${teamname} team.
Their names are ${people[0].name}, ${people[1].name}, ${people[2].name}, ${people[3].name}
${seniors}of them have a senior role.'




4.

function copyReplace(array, from, to, elements) {
    return [...array.slice(0, from), ...elements, ...array.slice(to)]
}
  console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))




  5.
  let name = "Colin";
 
  if(true){
      let name = "Max";  
      console.log(name); 
  }
   
  console.log(name); 


  6.
//Without modifying either of the console.log, prevent the console.log outside the for loop from printing i//


  var arr = [, ,]
 
for (var i = 0; i<arr.length; i++) {
  console.log(i); // 0,1,2
}
 
console.log(i); // 3



7.
//Using the spread operator, create a new alphabet array that are arranged in order//

var alphabet = ["a","d","e","h","i"],
    firstSet = ["b","c"],
    secondSet = ["f","g"];

console.log("Without Spread Operator: ",alphabet); 
console.log("With Spread Operator: ",...alphabet.slice(0,1), ...firstSet, ...secondSet




8.

function feedme(...foods) {
for (const food of foods) {
console, log(i love ${food}!`);
}
}




}

9.
//zUpdate the following code to ES6 taking every opportunity to use spread, rest, destructuring, template literals, object literal shorthand and for-of loops.

var numbersToSum = [1, 1, 2, 3, 5, 8, 13]


const [firstNumber, ,thirdNumber] = numbersToSum
const 

// Sums the numbers provided and sqaures them
// Accepts up to 5 numbers, but probably could accept more or less
function squaredSum(first, second, third, fourth, fifth) { 
  var sum = 0; 

  if(first != undefined)
    sum += first;
  if(second != undefined)
    sum += second;
  if(third != undefined)
    sum += third;
  if(fourth != undefined)
    sum += fourth;
  if(fifth != undefined)
    sum += fifth;

  return sum * sum; 

}

for(var x = 0; x < theRest.length; x++){
  var preString = "The value square of the sum of the numbers is:"
  console.log(preString + squaredSum(firstNumber, thirdNumber, theRest[x])) 
}