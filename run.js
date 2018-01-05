const refactor = require('./')
const fs = require('fs')

const path = './test.js'

fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    const newData = refactor(data, 'es')
    fs.writeFile(path.replace(/\.js$/, '.ts'), newData, 'utf8', (err) => {
        if (err) throw err
        console.log(`write ${path}`)
    })
})
