console.log("WE SAY GOOD BYE TO FRONTEND FOR A BIT");

function sayHiToSomeone(name = "Ola") {
  console.log(`Hey, ${name}`);
}

sayHiToSomeone();
sayHiToSomeone("Aleksandra");

const arr = [1, 2, 3, 4, 5, "jellyfish"];

function retrieveString(array = []) {
  return array.find((el) => typeof el === "string");
}

// retrieveString("This is a string");
const found = retrieveString();
// console.log(retrieveString());

const aldo = {
  username: "aldo",
  email: "aldo@superimportantaccount.gov",
  password: "askfjghfdsiugyfdsiugtysifu ghdsiugyfdkjghfdskugyfdsukghfdskh",
  interactions: [],
  socialSecurity: "123123-854324",
  age: 24,
  profilePic: "https://superimportanntbutnotillegaltohavepic.com",
  hasDog: true,
  favoriteColor: "none, colors are dumb",
  hasDyslexya: true,
  favoriteWord: "grassy ass",
  favoriteDish: "mashed mushrooms with overcooked brocoli",
  favoriteMovie: "titanic",
  favoriteMusic: "nickelback",
  isDivorced: undefined,
  favoriteCandy: "potato skins",
  favoriteBear: "the one that is closer",
  laughter: "jajajajaja",
};

const laura = {
  username: "laura",
  email: "aldo@superimportantaccount.gov",
  password: "askfjghfdsiugyfdsiugtysifu ghdsiugyfdkjghfdskugyfdsukghfdskh",
  interactions: [
    "learn",
    "be in the netherlands",
    { question: "fromKrys", when: { longTime: true } },
  ],
  socialSecurity: "123123-854324",
  age: 24,
  profilePic: "https://superimportanntbutnotillegaltohavepic.com",
  hasDog: true,
  favoriteColor: "none, colors are dumb",
  hasDyslexya: true,
  favoriteWord: "grassy ass",
  favoriteDish: "sushi",
  favoriteMovie: "titanic",
  favoriteMusic: "latin",
  isDivorced: undefined,
  favoriteCandy: "potato skins",
  favoriteBear: "the one that is closer",
};

function logFreakyUser({
  username,
  favoriteMusic,
  favoriteDish,
  laughter = "ahahah",
}) {
  console.log(
    `${username}'s  favorite thing to do on a friday is to put on some sweet ${favoriteMusic}  jams, while eating some good ${favoriteDish}. And then throughout the night ${laughter} was heard all around`
  );
}

// name's favorite thing to do on a friday is to put on some sweet nickelback while eating some good mashed mushrooms with overcooked brocoli

//   username +
//       "'s favorite thing to do on a friday is to put on some sweet " +
//       favoriteMusic +
//       " jams, while eating some good " +
//       favoriteDish

logFreakyUser(aldo);
logFreakyUser(laura);

const url = "https://www.officeapi.dev/api/quotes/random";

fetch(url).then((success) => {
  console.log("success:", success);
});

function getOfficeData() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

getOfficeData().then((data) => {});

// const laura = {
//   username: "laura",
//   email: "aldo@superimportantaccount.gov",
//   password: "askfjghfdsiugyfdsiugtysifu ghdsiugyfdkjghfdskugyfdsukghfdskh",
//    interactions: [
//   "learn",
//   "be in the netherlands",
//   { question: "fromKrys", when: { longTime: true } },
// ],
// const {interactions: interactionsFromAldo} = aldo
// const {
//   interactions: [
//     ,
//     dutchThing,
//     {
//       question,
//       when: { longTime },
//     },
//   ],
// } = laura;
const { likesFluffy = true } = laura;
console.log("likesFluffy:", likesFluffy);
// const  = interactions;
// console.log("dutchThing:", dutchThing);
// const {interactions} = laura
