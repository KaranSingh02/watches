const User=require('../db/models/user')
const Util=require('../shared/util')
module.exports= class UserService{
    static async signup(req,res){
        try{
        // var user = new User();
        // console.log(req,"--------------------");
        console.log("hello")
        console.log(req.body);
        console.log(req.body.name,"-----------------")
        // const params=this.createUserParams(req.body);
        
        // console.log(params)
        // user=params;
        // console.log(user,"--------------")
        // user.save(function (err) {
        //     if (err) {
        //        res.json({ message: 'Error in User Signup'});
        //         res.send(err);
        //     } else {
        //         res.json({ message: 'User Created Successfully', data: user});
        //     }
        // })
        // return res
        }
        catch(err){
            throw err;
        }
    
    };
    static async createUserParams(params){
        const userParams = {
            
            name:params.name,
            gender:params.gender,
            email:params.email,
            contact_no:params.contact_no,
            gender:params.gender,
            is_admin:params.is_admin,
            password:params.password

       
           }
           return userParams
        //    return Util.filterUndefinedValues(userParams);
         }
    }

