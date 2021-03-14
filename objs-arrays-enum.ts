/*******************
  Core Types: Tuple
********************/

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];  //Tuple type
} = {
  name: 'Max',
  age: 22,
  hobbies: ['baseball', 'cooking'],
  role: [2, 'musician']
}

//execute result:

person.role.push('actor');  // ok
// person.role.push(true); // error
person.role[1] = 'actor';  //ok
// person.role[1] = 3;  // error


/**********************************************
  Core Types: Enum  (方便用 index 管理數個狀態)
**********************************************/

// JavaScript 的做法:
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// TypeScript 使用 enum 簡化上列宣告:
enum Role1 { ADMIN, READ_ONLY, AUTHOR}; // enum 常用全大寫給值，但不是強制
enum Role2 { ADMIN = 'ADMIN', READ_ONLY = 'READ_ONLY', AUTHOR = 'AUTHOR' } // ok
enum Role3 { ADMIN = 200, READ_ONLY = 300, AUTHOR = 900 } // ok

const person2 = {
  name: 'Max',
  age: 22,
  hobbies: ['baseball', 'cooking'],
  role: Role1.ADMIN
}

if(person2.role === Role1.ADMIN) {
  console.log('is admin');
};