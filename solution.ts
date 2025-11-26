type ValueType = string | number | boolean;
function formatValue(value: ValueType): ValueType {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};
function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(books: Book): void {
  console.log(
    `Title: ${books.title}, Author: ${books.author}, Published: ${
      books.publishedYear
    }, Available: ${books.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  let result: (number | string)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (arr2[i] === result[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(arr2[i]);
    }
  }

  return result;
}
