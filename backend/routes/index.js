module.exports=function (app){
    app.get("/luxerange/login", (req, res) => user.login(req, res));
}