const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const Login_RegisterModel = require('../Model/AdminDetail')

module.exports = {


    
    RegisterAdmin : function(req, res){

        const {email} = req.body
        const Hasspassword = bcrypt.hashSync(req.body.password, 10)
        Login_RegisterModel.create({email: email, password: Hasspassword}).then(success => {res.send('Admin Register')})
        
        .catch(err => {

            // 11000 is duplication code
            if(err.code === 11000){

                res.send("Email is already Been used")
            }

            else{
                
                res.send("Failed to Resgister Admin")
            }
        })
    },



    // Login API For the Admin
    LoginAdmin: function(req, res){
        
        const {email} = req.body
        Login_RegisterModel.findOne({email: email}).then(userinfo => {

            if(!userinfo){
                res.send('Email is Not Correct')
            }

            else if(bcrypt.compareSync(req.body.password, userinfo.password)){
                const token = jwt.sign({id: userinfo._id }, process.env.SCERETKEY , {expiresIn: '1h'});
                res.json({status: "Successfully Login", message: "User Found", token : token})    
                // res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
            }

            else{
                res.send('Invalid Password')

            }

        }).catch(err => res.send("Failed to send data temporary", err))





    },

}
