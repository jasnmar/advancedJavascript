const athlete1 = { name: "Alice", age: "50" }
const athlete2 = { name: "Dave", age: "51" }
const athlete3 = { name: "Nicky", age: "49" }

const finishers = new Map()

finishers.set(athlete1, 10000)
finishers.set(athlete2, 10200)
finishers.set(athlete3, 9800)

// finishers.forEach((value, key)=> console.log(key.name, value))
// console.log(finishers.size)
console.log(finishers.get(athlete3))

