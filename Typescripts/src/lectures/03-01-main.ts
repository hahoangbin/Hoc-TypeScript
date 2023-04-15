const count = 1;

const channelName = 'Easy Frontend';

const isActive = false;

function getStatusName(state: 'active') {
  console.log(state);
}

let s = 'active';
getStatusName(s as 'active');

// Type Alias and Interface !
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  name: string;
  id: number;
}

interface Contact {
  email: string;
  phone: number;
}

type Employee = BusinessPartner & Contact & Identity
type Customer = Contact & Identity

const e: Employee = {
  name: 'Customer',
  id: 1,
  email: 'Customer@',
  phone: 12345,
  credit: 100001,
}

type NewType = number & string // never

function fail(message: string): never {
  throw new Error(message)
}

function fn(x: string | number) {
  if ( typeof x === "string") {
    // do something
  } else if ( typeof x == "number") {
    // do something else
  } else {
    x // has type 'never'
  }
}

// cach 1
function createStudent(student: {id: number, name: string, age: number})
{
  const { id, name, age } = student
  console.log(id, name, age);
}
createStudent ({
  id: 1,
  name: 'aaa',
  age: 18
})

// cach 2
function createStd2({id, name, age}: {id: number, name: string, age: number})
{
  console.log(id, name, age);
}
createStd2 ({
  id: 1,
  name: 'aaa',
  age: 18
})

// cach 3
interface create3 {
  id: number,
  name: string,
  age: number
}
function createname3 ({id, name, age}: create3) {
  console.log(id, name, age);
}
createname3 ({
  id: 1,
  name: 'aaa',
  age: 18
})

// bang type compatible
// 1. string, number, boolean
// 2. null
// 3. undefined
// 4. any
// 5. unknown
// 6. void
// 7. never