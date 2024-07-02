const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('./Database/db')


// Allow to send a Cookies
const cookieparser = require('cookie-parser');
app.use(cookieparser())

// Allow to Receive  aReques to the Frontend
const cors = require('cors');
// using Cors for Prodcution
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

// using Cors for Deployment
app.use(cors({ origin: 'https://binyousaf-pk.vercel.app', credentials: true }))

// Allow to send Data in Body
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// serving Stack FIle
// app.use(express.static("./Uploads"))  // Not I am Not using Static file serving my Image using Cloudinary

const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: '.env' });



// Path for the  server Checking
app.use('/checkingserver', (req, res, ) => {
        res.send('Binyousaf Server is working Hello')
})

// Path for the Products
const CategoryRoutes = require('./Route/CategoryRoute')
app.use('/', CategoryRoutes)



// Path for the Aminpanel
const Login_RegisterRoute = require('./Route/Login_ReigisterRoute')
app.use('/Owner', Login_RegisterRoute)

// Path for thre Admin
const AdminRoutes = require('./Route/AdminRoute')
app.use('/admin', ValidateAdmin, AdminRoutes)

// APi For Uploaedin File witgh Category Data 
const CategoryFileUpload = require('./Route/FileUploadAPI/CategoryFileUploads')
app.use('/admin/addCategory', CategoryFileUpload)

const CategoryFileUpdate = require('./Route/FileUploadAPI/CategoryFilUpdateApi')
app.use('/admin/update', CategoryFileUpdate)

// Route fir Posting the Order
const UserRoute = require('./Route/UserRoute')
app.use('/user', UserRoute)





app.use(express.static(path.join(__dirname, "./build")));

app.use("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./build/index.html"))
});


function ValidateAdmin(req, res, next) {

        const token = req.cookies.token
        // const token = req.header('token')
        console.log('This is a token',token)
       if (!token) {
                // res.json({'Status': 'UnAuthorization', message: "Token Not Found"})
                res.send("404 Not Found 🥴")
        } 

        jwt.verify(token, process.env.SCERETKEY, function (err, success) {

                if (err) {
                        // res.json({'Status': 'UnAuthorization', message: err.message})
                        console.log("Jwt Error", err)
                        res.send("Invalid Signatures 🎃")
                }

                else {
                        // res.send("Success")
                        console.log("Jwt Success")
                        next();
                }
        });


}



// const sslServer = https.createServer({

//    key: '',
//    cert: '',


// }, app)


// sslServer.listen(process.env.PORT,  () => {

//         console.log("Your Port is working on", process.env.PORT)


// })

app.listen(process.env.PORT, () => {

        console.log("Your Port is working on", process.env.PORT)

})





















