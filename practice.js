//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: "Terry Dinh",
  age: 26,
}
console.log(me);  //Code here




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Linkin Park",
  food: "KBBQ",
  person: "Mom",
  book: "Lord of the rings",
  movie: "Transformers",
  holiday: "Christmas"
};  //Code here


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  favoriteThings.car = "Tesla";
  favoriteThings.brand = "Ted Baker";//Code here


//Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.

  favoriteThings.food = "Chicken Nuggets";
  favoriteThings.book = "Harry Potter";//Code here




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = 'firstPocket';
backPack['firstPocket'] = 'chapstick';  //Code here

//After you do the above, alert your entire backPack object.

console.log(alert(backPack));//Code here

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);  //Code here




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var alsoMe = {
  name: "Terry",
  age: 26,
  height: "5ft 9in",
  gender: "male",
  married: "single af",
  eyeColor: "brown",
  hairColor: "salt & pepper"
}; //Code Here

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var key in alsoMe){
console.log(alsoMe[key]);
}//Code Here




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  title1: "BLOOD",
  title2: "DNA",
  title3: "HUMBLE",
  title4: "LUST",
  title5: "LOYALTY"
}  //Code Here

//Now, loop through your album object alerting every song title individually.

for (var key in album){
  console.log(album[key]);
}  //Code Here




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  texas: 27470000000,
  california: 39140000000,
  newYork: 8491000000,
  florida: 20270000000,
  washington: 717000000
}  //Code Here

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (var key in states){
    console.log(states[key])
    if(states[key] < 300000){
      alert (key);
    }
}   //Code Here




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (var key in user1){
  if(!user1[key]) {
    delete user1[key];
  }
}
console.log(user1);//Code Here

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  user1.name = "Terry Dinh";
  user1.pwHash = "password$1";
  user1.username = "Tedinh";//Code Here




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user2.name = "Tyler S. McGinnis";
user2.email = "tyler.mcginnis@devmounta.in"  //Code Here

//Now call the sayEmail method that's on the user object which will alert the users email

  console.log(user2.sayEmail());//Code Here




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};  //Code Here

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
  alert("hello");
}

methodCollection.logHello = function() {
  console.log("hello");
}//Code Here

//Now call your alertHello and logHello methods.

methodCollection.alertHello();

methodCollection.logHello();//Code Here



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

function makePerson(name2, birthday2, ssn2){
  var obj = {
  name: name2,
  birthday: birthday2,
  ssn: ssn2
};
  return obj;
}  //Code Here



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

function makeCard(cardNumber, expirationDate, securityCode){
  var obj = {
    num: cardNumber,
    exp: expirationDate,
    sec: securityCode
  }
  return obj;
}
 //Code Here



//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

function bindCard(person, cc){
  var obj = {}
  for (var key in person) {
    obj[key] = person[key]
  }
  for(var prop in cc){
    obj[prop] = cc[prop]
  }
  return obj;
}//Code Here
