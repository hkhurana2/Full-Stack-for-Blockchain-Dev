
//Exercise 1
function findIfZero(num){
    return (num ==  0)
}

console.log(findIfZero(0))
console.log(findIfZero(4))
console.log(findIfZero("0"))
console.log(findIfZero("12w"))


//Exercise 2

function getTableScore(wins,draws,losses){
    var ans =  (wins * 3) + draws
    return ans
}


console.log(getTableScore(2,3,1))
console.log(getTableScore(3,2,1))
console.log(getTableScore(4,9,"j"))
console.log(getTableScore("2","3","5"))

//Exercise 3

function oddEvenList(){
    for (var i = 0 ; i<11; i++){
        if(i%2 == 0){
            console.log(i + " is even")
        }
        else{
            console.log(i + "is odd")
        }
    }
}

oddEvenList()

//Exercise 4
function printHelloWorld(repetitions){
    for(var i =0; i< repetitions; i++){
        console.log("Hello World!")
    }
}

printHelloWorld(4)

//Exercise 5
function buildArray(num){
    var nums = [];
    
    for(var i = 0 ; i < num; i ++){
        nums.push(i)
    }
    console.log(nums)
}

buildArray(3)
buildArray(9)

//Exercise 6

function emptyArray(arr){
    console.log(arr)
    arr2 = arr
    while (arr2.length >0){
        arr2.pop();
    }
    console.log("removed arr: " + arr2)
}
emptyArray([1,2,3])




//Exercise 7
function CityData(name,population,continent){
    this.name = name;
    this.population = population
    this.continent = continent
}
function findFacts(city){
    console.log(city.name + " has a population of " + city.population + " and is located in " + city.continent)
}
var toronto = new CityData("Toronto","6,197,000", "North America")
findFacts(toronto)


//Challenges

//Challenges #1


function greaterThanSize(){
    var size = Math.floor(Math.random() * 10);
    var count = 0
    while(size >= count){
        console.log("the current size is" + size + "and count is " + count);
    count++;
    }
    
}
greaterThanSize();


//Challenges #2
function reverseIt(arr){
    var newArr = []
    
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[arr.length - i -1]) 
    }
    return newArr;
}
arr = [1,2,3,4]
console.log(arr)
console.log(reverseIt(arr))

//Challenge 3

function testObj(var1,var2,var3){
    this.var1 = var1
    this.var2 = var2
    this.var3 = var3
}
function getKeyValuePairs(objToParse){
    console.log([Object.keys(objToParse)],[Object.values(objToParse)])
    console.log()
}

obj1 = new testObj(1,2,3)
obj2 = new testObj("one","two","three")

getKeyValuePairs(obj1)
getKeyValuePairs(obj2)







// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    

//Exercise 1
function findIfZero(num){
    return (num ==  0)
}

console.log(findIfZero(0))
console.log(findIfZero(4))
console.log(findIfZero("0"))
console.log(findIfZero("12w"))


//Exercise 2

function getTableScore(wins,draws,losses){
    var ans =  (wins * 3) + draws
    return ans
}


console.log(getTableScore(2,3,1))
console.log(getTableScore(3,2,1))
console.log(getTableScore(4,9,"j"))
console.log(getTableScore("2","3","5"))

//Exercise 3

function oddEvenList(){
    for (var i = 0 ; i<11; i++){
        if(i%2 == 0){
            console.log(i + " is even")
        }
        else{
            console.log(i + "is odd")
        }
    }
}

oddEvenList()

//Exercise 4
function printHelloWorld(repetitions){
    for(var i =0; i< repetitions; i++){
        console.log("Hello World!")
    }
}

printHelloWorld(4)

//Exercise 5
function buildArray(num){
    var nums = [];
    
    for(var i = 0 ; i < num; i ++){
        nums.push(i)
    }
    console.log(nums)
}

buildArray(3)
buildArray(9)

//Exercise 6

function emptyArray(arr){
    console.log(arr)
    arr2 = arr
    while (arr2.length >0){
        arr2.pop();
    }
    console.log("removed arr: " + arr2)
}
emptyArray([1,2,3])




//Exercise 7
function CityData(name,population,continent){
    this.name = name;
    this.population = population
    this.continent = continent
}
function findFacts(city){
    console.log(city.name + " has a population of " + city.population + " and is located in " + city.continent)
}
var toronto = new CityData("Toronto","6,197,000", "North America")
findFacts(toronto)


//Challenges

//Challenges #1


function greaterThanSize(){
    var size = Math.floor(Math.random() * 10);
    var count = 0
    while(size >= count){
        console.log("the current size is" + size + "and count is " + count);
    count++;
    }
    
}
greaterThanSize();


//Challenges #2
function reverseIt(arr){
    var newArr = []
    
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[arr.length - i -1]) 
    }
    return newArr;
}
arr = [1,2,3,4]
console.log(arr)
console.log(reverseIt(arr))

//Challenge 3

function testObj(var1,var2,var3){
    this.var1 = var1
    this.var2 = var2
    this.var3 = var3
}
function getKeyValuePairs(objToParse){
    console.log([Object.keys(objToParse)],[Object.values(objToParse)])
    console.log()
}

obj1 = new testObj(1,2,3)
obj2 = new testObj("one","two","three")

getKeyValuePairs(obj1)
getKeyValuePairs(obj2)







