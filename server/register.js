const db = require('./connection')

function unsafe_register(req,res,next) {
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let sql = `
        INSERT INTO user
        VALUES ('`+ username + `','`+ password + `','`+ name+ `')`
        console.log("unsafe sql: " + sql);
    db.query(sql,(err)=>{
        if (err)
            res.send("an error occurred" + err);
        else
            next();
    })
}

function register(req,res,next) {
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let sql = `
        INSERT INTO user
        VALUES (?,?,?);
    `
    db.query(sql,[username,password,name],(err)=>{
        if (err)
            res.send("an error occurred");
        else {
            next();
            console.log("safe sql: " + sql);
        }
            
    })
}

module.exports = {
    register,
    unsafe_register
}