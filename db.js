const mongoose = require('mongoose');



const connectDB = async () => {

    try {
        const connect = await mongoose.connect('mongodb+srv://admin:heya!@cluster0.eaohf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
     
         console.log("DB Connected ...")
        
    } catch (error) {
       console.log(error) 
    }
}
 

module.exports = connectDB