const users=require('../db/models/user');
const Util=require('../shared/util');
module.exports= class UserService{
    static async signup(req,res){
        // console.log(req,"--------------------");
        console.log("hello UserService")        
        const params=await this.createUserParams(req.body);
        var userModel = new users(params);
        console.log(params)
        console.log("userModel")
        console.log(userModel)
        userModel.save((err,user) => {
            if (err) {
                res.json({
                success: false,
                error: err.message
            });
            } else {
                console.log("in Save")
                console.log(user);
                res.json({
                    success: true,
                    data: user
                });
            }
        });
    
    };
    static async createUserParams(params){
        const userParams = {
            
            'name':params.name,
            'email':params.email,
            'password':params.password
       
           }
        //    return userParams
            return Util.filterUndefinedValues(userParams);
         }
    }

