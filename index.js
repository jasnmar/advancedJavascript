import { itemsBoughtArr } from '/itemsBoughtArr.js'

const calculateTotalCost = itemsBoughtArr => itemsBoughtArr.reduce((acc, val) => acc + val.priceUSD, 0)

console.log(calculateTotalCost(itemsBoughtArr))

/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/