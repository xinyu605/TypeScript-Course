/****************************************** 
  Union Type, Literal Type, and Type Alias
*******************************************/
export {}; // prevent Error: Duplicate function implementation

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversation: ConversionDescriptor
) {
  let result;
  if (
    // 視邏輯需求加判斷，非必需
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversation === "as-number"
  ) {
    result = +input1 + +input2;
    // 如果沒有寫 + (等同 parseFloat())，TypeScript 會抓 (Operator '+' cannot be applied to types 'string | number' and 'string | number')
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
