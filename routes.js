const express = require('express');
const users = require('./users')
const usermodel = require('./usermodel');
const UserModel2 = require('./usermodel2');


const router = express.Router();




router.get('/', function(request, response){
    response.status(200).send("hello home")
})


// router.post("/login", function(request,response){
//     const { username, password } = request.body
    
//     let user = users.filter(arrayelement => arrayelement.username === username)
    
//     if(user.length == 1){
        
//         if(user[0].password === password){
//             response.send("Login successful")
//         }
//         response.status.send("user or password is wrong")
//     } else {
//         response.send("User does not exit")
//     }
// })



router.post("/login", async (request,response) => {
    const { username, password } = request.body
    let responseData = await usermodel.findOne({username})
    console.log(responseData);
    if(responseData){
        if(password === responseData.password){
            response.status(200).send({success:"true", message:"Successful"})
        } else {
            response.status(400).send({failure:"true", message:"wrong username or password"})
        }
    } else {

        response.status(400).send({failure:"true", message:"User does not exist"})
    }



})






router.post('/signup', async (request,response) => {
    const { username, email,password, confirmpassword } = request.body
    console.log(username)

    let userModel = new usermodel({username, email, password, confirmpassword})

    let responseData =  await userModel.save()
    console.log(responseData)

    response.status(200).send({message:"you have successfully signed up. You can login now!!!", data: responseData})
})

// router.post('/AdvertisePage', async (request,response) => {
//     const { Upload_A_Picture, email, Contact, Amount, GhanaCard, Duration } = request.body

//     let usermodel2 = new usermodel2({Upload_A_Picture, email, Contact, Amount, GhanaCard, Duration})

//     let responseData =  await UserModel2.save()
//     console.log(responseData)

//     response.status(200).send({message:"you have successfully saved your data.", data: responseData})
// })




module.exports = router