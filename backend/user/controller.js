const userService=require('./service');
module.exports= class UserController {
    async signup(req,res){
        try{
        // if(!req.body)
        //     throw Error("user data cannot be empty");
        // console.log("hello")
       
        const response=await userService.signup(req,res);
        return res.status(200).send({response});
        }
        catch(err){
            return res.status(400).send(err);  
        }
    }

}