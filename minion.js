const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  //forEach

//   First, he wants to test out forEach to check who's present. So as he goes down the array of minions, they should console.log that they're here.

// const listOfMinions= (array) => {array.forEach((element) => {
    
//     console.log(element);
// })} 

// listOfMinions(minions)

//-----------------------------------------------------------------------------------------------
// map
// They're all here -- great! But Gru has noticed something off about the array of minions: their names aren't capitalized. He might be a mob boss, but he does care about correct grammar! So let's go ahead and fix that for him using the mapmethod.

// Using the mapmethod, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions
// Expected output:


    let capitalizedMinions = minions.map((element, index)=>{
        if(element === "kevin") {
         return "kevin";
        }
        else{
            // for each element, access the character at 0 and uppercase it and then add that character to the copy of the element that had the first character removed 
            let newName = element.charAt(0).toUpperCase() + element.slice(1);
            return newName;
        }

    })
    
    console.log(capitalizedMinions);



//-----------------------------------------------------------------------------------------------
//filter
// Uh oh! Not every minion was capitalized. Gru's not feeling too happy about that, so now he wants to test out the filtermethod to filter out the sneaky minion who didn't get capitalized.

// Use filterto filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

let actuallyCapitalizedMinions = capitalizedMinions.filter( minion => minion !== "kevin")
console.log(actuallyCapitalizedMinions)

//-----------------------------------------------------------------------------------------------
//every
// use every on your new actuallyCapitalizedMinionsarray, to check if they're all capitalized now

let isActuallyCapitalizedMinions = actuallyCapitalizedMinions.every(element => element.charAt(0) === element.charAt(0).toUpperCase())

console.log(isActuallyCapitalizedMinions)

//-----------------------------------------------------------------------------------------------
//BONUS METHODS

// every
// In order to check whether or not that previous map worked, Gru wants to try using the everymethod instead. So, using every, check whether or not every minion in capitalizedMinionsare actually capitalized.

let isCapitalizedMinions = capitalizedMinions.every(minion => minion.charAt(0) === minion.charAt(0).toUpperCase())

console.log(isCapitalizedMinions)

// Create a function called isCapitalizedthat accepts a minion as an argument and checks whether or not the first letter of the minion's name is capitalized
// Now using both the everymethod and the isCapitalizedmethod you just wrote, check whether or not all the capitalizedMinions are capitalized

const isCapitalized = minionNames => {

    let totalCap = 0;
    let numberOfMinons = minionNames.length  

    minionNames.forEach(name => {
          //check if the first letter of the minion's name is capitalized
         if (name.charAt(0) === name.charAt(0).toUpperCase()) {totalCap += 1}
        
    });
    
    return(totalCap === numberOfMinons ? `All minions are capitalized` : `Not all minions are capitalized`)

}

console.log(isCapitalized(capitalizedMinions))

//-----------------------------------------------------------------------------------------------
// find
// Great! We filtered out the non-capitalized minion, but while we know it was kevin, Gru didn't know that. So, he wants to find out which minion escaped his map earlier by testing out the findmethod.

// Using find, find which minion is not correctly capitalized in the original capitalizedMinionsarray and save it to a variable called uncapitalizedMinion, then console log it


let uncapitalizedMinion = capitalizedMinions.find(element => element[0] !== element[0].toUpperCase())

console.log(uncapitalizedMinion)



//-----------------------------------------------------------------------------------------------
// findIndex
// Aha! Now that Gru's found out which minion escaped him, he wants to find out what index in the original array he was at so he can fix him up later.

// Using findIndex, find what index kevin is in the original capitalizedMinionsarray


let indexOfKevin = capitalizedMinions.findIndex(element => element === uncapitalizedMinion)


console.log(indexOfKevin)


// Now that he's found him, he can just use capitalizedMinions[1]to select kevin and capitalize his name.
// Once that's done, check again using everywhether or not capitalizedMinionsis all capitalized correctly

capitalizedMinions[indexOfKevin] = capitalizedMinions[indexOfKevin].charAt(0).toUpperCase() + capitalizedMinions[indexOfKevin].slice(1)

let isAllCapitalized = capitalizedMinions.every(element => element[0] === element[0].toUpperCase())

console.log(isAllCapitalized)

//-----------------------------------------------------------------------------------------------
//reduce
// Sweet! Now that that's all sorted, Gru can just have some fun testing out the remaining array methods he wanted to learn, starting with reduce. Out of curiority, he wants to know what the sum of all his minions' name lengths is. Use reduceto find out

// First, using mapcreate a separate array called minionNameLengthsthat maps out the minions' name lengths


let arrayOfMinonNameLength = minions.map(element => element = element.length)

console.log(arrayOfMinonNameLength)


// Use reduceto sum up the minionNameLengthsarray

let arrayOfMinonNameLengthSum = arrayOfMinonNameLength.reduce((acc, element, index) => {
acc += element;
return acc;
},0)

console.log(arrayOfMinonNameLengthSum)



//-----------------------------------------------------------------------------------------------
// some
// Now Gru wants to test out the somemethod, so let's go ahead and do that a few times.

// Check whether or not some of the minion's name lengths are 6 or above. How about 7 or above?


let isMinonNameLengthSix = minions.some(element => element.length >= 6)
let isMinonNameLengthSeven = minions.some(element => element.length >= 7)

console.log(isMinonNameLengthSix)
console.log(isMinonNameLengthSeven)



// Lowercase Kevin's name again inside of the capitalizedMinionsarray, then check whether or not some of the minion's names are capitalized using some. How about it any are lowercased?

capitalizedMinions[indexOfKevin] = capitalizedMinions[indexOfKevin].charAt(0).toLowerCase() + capitalizedMinions[indexOfKevin].slice(1)

let isSomeCapitalizedMinionsUppercased = capitalizedMinions.some(element => element[0] === element[0].toUpperCase())
let isSomeCapitalizedMinionsLowercased = capitalizedMinions.some(element => element[0] === element[0].toLowerCase())

console.log(isSomeCapitalizedMinionsUppercased)
console.log(isSomeCapitalizedMinionsLowercased)



//-----------------------------------------------------------------------------------------------
// sort
// Great, now Gru has had some practice with array methods that require callbacks. Now it's time to do some bad guy stuff. Before he can do so by sending his minions out to do his bidding, he wants to sort them in ascending order of their name lengths. Because why not?

// Use sortto order the minions within the capitalizedMinionsarray by order of name length.
// Hints: you'll need to write your own compareMinionsfunction first to pass in as a callback to sort



const sortMinionsByNameLengths = capitalizedMinions.sort((a,b)=> {
    return a.length-b.length;
})

console.log(sortMinionsByNameLengths)

