const mongoose=require('mongoose')


const user = new mongoose.Schema({
  name:  String, // String is shorthand for {type: String}
  gender: String,
  contact_no:   String,
  email: String,
  password:String,
  is_admin:Boolean,
  image:String,

});
module.exports=mongoose.model('User',user)