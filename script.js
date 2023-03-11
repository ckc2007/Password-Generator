// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function generatePassword() {}
function generatePassword() {
  let passLen = prompt(
    "How many characters would you like this password to be? (please enter a number between 8 and 128)"
  );
  console.log(passLen);

  function passLenCheck(x) {
    if (x >= 8 && x <= 128) {
      window.alert(
        `awesome, the password length meets the criteria! a password with ${x} characters will be generated.`
      );
      console.log(x);
      return x;
    } else {
      let x = prompt(
        "I'm sorry, that was an invalid entry. How many characters would you like this password to be? (please enter a number between 8 and 128.)"
      );
      console.log(x);
      passLenCheck(x);
    }
  }

  let confirmedPassLen = passLenCheck(passLen);

  function charChecker() {
    // confirm lowercase?
    let lowerCase = confirm(
      "Quesetion 1 of 4: Do you want to use lowercase characters?"
    );
    console.log(lowerCase);
    // user message so they know what they selected.
    if (lowerCase) {
      window.alert("Ok, your password will include lowercase characters!");
    } else {
      window.alert("Ok, your password will not include lowercase characters.");
    }

    // confirm uppercase?
    let upperCase = confirm(
      "Question 2 of 4: Do you want to use uppercase characters?"
    );
    console.log(upperCase);
    // user message so they know what they selected.
    if (upperCase) {
      window.alert("Ok, your password will include uppercase characters!");
    } else {
      window.alert("Ok, your password will not include uppercase characters.");
    }

    // confirm numeric characters?
    let numeric = confirm(
      "Question 3 of 4: Do you want to use numeric characters?"
    );
    console.log(numeric);
    // user message so they know what they selected.
    if (numeric) {
      window.alert("Ok, your password will include numeric characters!");
    } else {
      window.alert("Ok, your password will not include numeric characters.");
    }

    // confirm special characters?
    let special = confirm(
      "Question 4 of4: Do you want to use special characters?"
    );
    console.log(special);
    if (!upperCase && !lowerCase && !numeric && !special) {
      window.alert(
        "I'm sorry, you must pick at least one type of character to include in the password. Please try again."
      );
      charChecker();
    } else if (special) {
      window.alert("Ok, your password will include special characters!");
    } else {
      window.alert("Ok, your password will not include special characters.");
    }
  }

  charChecker();

  // make a pool now based on the selection criteria

  // min = 0, max = lowerCasePoolArr.length-1
  let lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
  // min = 0, max = upperCasePoolArr.length-1
  let upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // min = 0, max = numericPoolArr.length-1
  let numericArr = "1234567890".split("");
  // min = 0, max = specialPoolArr.length-1
  let specialArr = [
    "\u0020",
    "\u0021",
    "\u0022",
    "\u0023",
    "\u0024",
    "\u0025",
    "\u0026",
    "\u0027",
    "\u0028",
    "\u0029",
    "\u002a",
    "\u002b",
    "\u002c",
    "\u002d",
    "\u002e",
    "\u002f",
    "\u003a",
    "\u003b",
    "\u003c",
    "\u003d",
    "\u003e",
    "\u003f",
    "\u0040",
    "\u005b",
    "\u005c",
    "\u005d",
    "\u005e",
    "\u005f",
    "\u0060",
    "\u007b",
    "\u007c",
    "\u007d",
    "\u007e",
  ];

  let poolArr = [];

  if (lowerCase) {
    poolArr.push(...lowerCaseArr);
  }
  if (upperCase) {
    poolArr.push(...upperCaseArr);
  }
  if (numeric) {
    poolArr.push(...numericArr);
  }
  if (special) {
    poolArr.push(...specialArr);
  }

  // need a random number generator that will return a random number between two numbers (range):
  function randomIndexFromRange(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  let solution = [];
  let randomIndex;

  // push one random index into the solution to meet minimum character requirement for each selected character:
  if (lowerCase) {
    randomIndex = randomIndexFromRange(0, lowerCaseArr.length - 1);
    solution.push(lowerCaseArr[randomIndex]);
  }
  if (upperCase) {
    randomIndex = randomIndexFromRange(0, upperCaseArr.length - 1);
    solution.push(upperCaseArr[randomIndex]);
  }
  if (numeric) {
    randomIndex = randomIndexFromRange(0, numericArr.length - 1);
    solution.push(numericArr[randomIndex]);
  }
  if (special) {
    randomIndex = randomIndexFromRange(0, specialArr.length - 1);
    solution.push(specialArr[randomIndex]);
  }

  // for each criteria, now we run a loop through to grab characters and pass them to the solution array
  // we have: lowerCase, upperCase, numeric, special <<< booleans

  // this is the end here
}

generateBtn.addEventListener("click", writePassword);
// ////////////////////////////end///////////////////////////////////

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
