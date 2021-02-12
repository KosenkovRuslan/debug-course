// const people = [
//   {id: 1, name: 'Ruslan', age: 32},
//   {id: 2, name: 'Ivan', age: 25},
//   {id: 3, name: 'Olga', age: 15},
//   {id: 4, name: 'Lena', age: 23}
// ]

// console.table(people);

console.time('timer')
const items = []
for (let i = 0; i < 1000000; i++) {
items.push({el: i + 1})
}
console.timeEnd('timer')