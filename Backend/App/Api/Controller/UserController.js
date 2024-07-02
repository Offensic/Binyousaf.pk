const mongoose = require('mongoose');
const UserModel = require('../Model/UserModel');
const nodemailer = require('nodemailer');
const UserDetails = require('../Model/UserDetailModel')

module.exports = {

    // API FOR Posting the Order
    POSTORDER: function (req, res) {
        console.log(req.body)
        UserModel.create(req.body)
            .then(success => { res.send('Successfully Post the Order') })
            .catch(err => { res.send('Failed to Post Order: ' + err); });
    },


    ContactUs: function (req, res) {

        const { username } = req.body
        const { useremail } = req.body
        const { usernumber } = req.body
        const { usermessage } = req.body
        const nodemailer = require("nodemailer");

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                },
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: `${username}" <${useremail}>`, // sender address
                to: process.env.EMAIL, // list of receivers
                subject: `Mail from the Binyousaf Visitor ${username}`, // Subject line
                html: `<h3>Email: </h3> </br> <b>PH NO#</b> <span>${usernumber}</span> </br>  <p>${usermessage}</p>`, // html body
            });

            res.send('Success')
        }

        main().catch(console.error);



    },

    CreatedIP: function (req, res) {

        UserDetails.create(req.body).then(success => console.log("Successfully Ip Created"))
            .catch(error => {

                if (error.code = 11000) {

                    console.log("Ip is Already Exist")
                }

                else {
                    console.log("Failed to Create IP", error)
                }

            })

    }
};
