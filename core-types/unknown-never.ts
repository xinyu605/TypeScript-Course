/************************************************************************ 
  The Unknown Type 
  (shouldn't be used all the time, use union type as possible as you can)
*************************************************************************/

let userInput: unknown; // can replace: string | number
let userName: string;

userInput = 5;
userInput = "John";

// userName = userInput;  // Error: string is not assignable to unknown

// correct way to convert unknown to fixed type is by extra check:
if (typeof userInput === "string") {
  userName = userInput;
}

/****************************** 
  The Never Type (of function)
*******************************/

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// This function always crashes the script and 'never' returns anything.

generateError("An error occurred!", 500);
