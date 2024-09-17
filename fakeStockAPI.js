function getStockData() {
  const newTime = new Date()
  const timeString = newTime.toLocaleTimeString()
  const price = Math.floor(Math.random() * 300) / 100
  return {
      name: 'QtechAI',
      sym: 'QTA',
      price: price, 
      time: timeString
  }
}
export default getStockData
