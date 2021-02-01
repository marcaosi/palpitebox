const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require("./credentials.json")

const doc = new GoogleSpreadsheet("1omK9VRZxrB1IrZ45zOvBLAwMkQeocnV1u2KgrXk96_A")

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]

    //Nome	E-mail	Whatsapp	Cupom	Promo

    await sheet.addRow({
        Nome: "Marcos Antonio",
        "E-mail": "marcosantonio.dev@gmail.com",
        Whatsapp: "35 99867-2990",
        Cupom: "aaa111",
        Promo: "asdasdf"
    })
}

run()