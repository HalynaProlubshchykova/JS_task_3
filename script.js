/*1.
Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
початкове значення
кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
*/

function createArray(start, end) {
  if (typeof start !== "number" || typeof end !== "number" || start > end) {
    return [];
  }

  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

let arr = createArray(4, 12);
console.log(arr);

/*2.
Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...
*/

function generatePattern(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    for (let j = 0; j < i - a + 1; j++) {
      result.push(i);
    }
  }

  return result.join(",");
}

const pattern = generatePattern(1, 5);

console.log(pattern);

/*3.
Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.Випадкові числа генеруються із діапазону 1 - 500.
randArray(5);  // [399,310,232,379,40]
*/

function randArray(k) {
  const result = [];
  for (let i = 0; i < k; i++) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    result.push(randomNumber);
  }
  return result;
}

const randomNumbers = randArray(10);
console.log(randomNumbers);

/*4.
Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]
*/

function compact(arr1) {
  const newArr = [];

  for (const item of arr1) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }

  return newArr;
}

const arr1 = [5, 1, 3, 1, 5, 6, 8, 3, 4, 5, 6, 7, 3, 9, 0, 1, 2, 4, 1];
const arr2 = compact(arr1);
console.log(arr2);

/*5.
Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
let arrNew = funcName(arr);
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/

function separateDataTypes(arr) {
  const numberArray = [];
  const stringArray = [];

  function extractDataTypes(inputArray) {
    for (const item of inputArray) {
      if (Array.isArray(item)) {
        extractDataTypes(item);
      } else if (typeof item === "number") {
        numberArray.push(item);
      } else if (typeof item === "string") {
        stringArray.push(item);
      }
    }
  }

  extractDataTypes(arr);

  return [numberArray, stringArray];
}

const arrNew = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
const [arrNumbers, arrStrings] = separateDataTypes(arrNew);

console.log(arrNumbers);
console.log(arrStrings);

/*6.
Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
calc(10, 3, 1); // => 7
*/

function calc(a, b, op) {
  if (op === 1) {
    return a - b;
  } else if (op === 2) {
    return a * b;
  } else if (op === 3) {
    if (b === 0) {
      return "Division by zero is impossible";
    } else {
      return a / b;
    }
  } else {
    return a + b;
  }
}

console.log(calc(10, 3, 1));

/*7.
Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/

function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
      return false;
    }
  }

  return true;
}

console.log(findUnique([1, 2, 1, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

/*⭐⭐⭐
(Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.  (потребує використання closure)
const tom = create("pass_for_Tom");
tom("pass_for_Tom"); //повертає true 
tom("pass_for_tom"); //повертає false
*/

function create(externalPassword) {
  return function (password) {
    return password === externalPassword;
  };
}

const tom = create("pass_for_Tom");

console.log(tom("pass_for_Tom"));
console.log(tom("pass_for_tom"));
