const User=require('./controller')
const user =new User();

module.exports=function (app){
    app.post("/luxerange/signup", (req, res) => {
        console.log(req.body);
        user.signup(req, res)
    });
}