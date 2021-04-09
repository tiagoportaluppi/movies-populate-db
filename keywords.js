require('./utils/database')
const csv = require('csvtojson')
const fs = require('fs')
const { convertStringToJson } = require('./utils/convertStringToJson')

async function init() {
  const data = await csv().fromFile('./csv/keywords.csv')

  const json = []

  for (const x of data) {
    try {
      for (const y of convertStringToJson(x.keywords)) {
        if (!json.some(({ id }) => id === y.id)) {
          json.push(y)
        }
      }
    } catch (error) {
      console.log(error.message)
      break
    }
  }

  console.log(json.length)
  fs.writeFileSync('./data/keywords.json', JSON.stringify(json, null, 2))
}

init()
