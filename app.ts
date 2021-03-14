/*************************************************
  Strict Compilation Options
  (Strict Type-Checking Options in tsconfig.json)
**************************************************/

const button = document.querySelector("button"); // strictNullChecks

function clickHandler(message: string) {
  console.log(`click me! ${message}`);
}

button?.addEventListener("click", clickHandler.bind(null, "John")); // strictBindCallApply
