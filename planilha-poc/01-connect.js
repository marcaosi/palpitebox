const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require("./credentials.json")

const doc = new GoogleSpreadsheet("1omK9VRZxrB1IrZ45zOvBLAwMkQeocnV1u2KgrXk96_A")

const run = async() => {
    await doc.useServiceAccountAuth(credentials)

    await doc.loadInfo()

    console.log(doc.title)
}

run()