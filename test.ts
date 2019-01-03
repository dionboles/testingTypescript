import * as express from "express";
import * as Sequelize from "sequelize";
// glob vars 
const app =  express();
const dbSetup: object = {
    database: '',
    username: '',
    password: '',
    dialect: 'mysql',
    port : 0000
};
// database init
const db = new Sequelize(dbSetup);
// model creation
const employee = db.define("employee",{
    firstname: Sequelize.STRING(),
    lastname: Sequelize.STRING(),
});
const article = db.define("article",{
    title: {
        type: Sequelize.STRING(),
        unique: true,
        allowNull:false
    },
    body: {
        type: Sequelize.TEXT,
        // defaultValue: 'Coming soon...'
    }
});

// send to the server then get data back 
function parse(element, index, array) { 
    return (element.firstname)
}
app.get("/",function(req: express.Request,res: express.Response){
    employee.findAll().then(function(users){
        res.send(users);
    })
   
});
app.listen(3000);
