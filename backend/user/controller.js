const userService=require('./service');
module.exports= class UserController {
    async signup(req,res){
        try{
        // if(!req.body)
        //     throw Error("user data cannot be empty");
        // console.log("hello")
       
        await userService.signup(req,res);
        }
        catch(err){
            return res.status(400).send(err);  
        }
    }

}