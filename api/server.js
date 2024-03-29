const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')

//PORT for using
const port = process.env.PORT || 5000

//import pool from db.js file
const pool = require('./config/db')

//require body pharser
const bodyParser = require('body-parser')

//json data to be imported
const productData = require('./product/arrayOfProducts.json')


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

//Sending product data to Search input field
app.get('/', (req, res) => {
    res.json(productData)
})

//Create user with password hashed pushing through the database with email and password only
app.post('/user', async(req, res) => {
    try {
        const {email, password} = req.body
        const salt = bcrypt.genSaltSync(8)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const userCreated = await pool.query('INSERT INTO ecommerce (email, password) VALUES($1, $2) RETURNING *', [email, hashedPassword])
        res.send(userCreated.rows)
    } catch (error) {
        console.error(error.message)
    }
})


//Validating email and password in Login
app.post('/userlogin', async(req, res) => {
    try {
        const {email, password} = req.body
        const userDetails = await pool.query("SELECT * FROM ecommerce WHERE email = $1", [email])
        if (userDetails.rowCount !== 0) {
            const passwordMatch = await bcrypt.compare(password, userDetails.rows[0].password)
            if (passwordMatch) {
                res.json(userDetails.rows)
            } else {
                res.send('Wrong')
            }
            
        } else {
            res.send('User does not exist')
        }
        
    } catch (error) {
        console.error(error.message)
    }
})



app.listen( port, () => console.log(`Listening to port ${port}`))