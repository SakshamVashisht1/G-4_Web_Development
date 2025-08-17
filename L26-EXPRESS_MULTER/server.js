const express = require('express')
const multer = require('multer')
const app = express()
var hbs = require('hbs')

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    filename: function (res, file, cb) {
        const extension = file.originalname.split('.')
        const uniqueSuffix =
            Date.now() +
            '-' +
            Math.round(Math.random() * 1e9) +
            '.' +
            extension.at(-1)

        cb(null, file.fieldname + '-' + uniqueSuffix)
    },
})

const upload = multer({
    storage: storage,
})

hbs.registerPartials(__dirname + '/views/partials', function (err) {})

app.set('view engine', 'html')
app.engine('html', require('hbs').__express)

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        companyName: 'XYZ COMPANY',
        founder: 'Saksham Vashisht',
    })
})

app.get('/products', (req, res) => {
    res.render('products.hbs', {
        products: ['WATCH', 'SHOES', 'GLASSES'],
    })
})

app.post('/products', upload.single('image'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.redirect('/products')
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})