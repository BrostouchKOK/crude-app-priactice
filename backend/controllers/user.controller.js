const db = require("../config/db");

const getAllUsers = async (req, res)=>{
    try {
        const sql = "SELECT * FROM users";
        db.query(sql,(err, data)=>{
            if(err) return res.json(err)
            return res.json(data)
        })
    } catch (error) {
        console.log(error);
    }
}

const createUser  = async (req, res)=>{
    try {
        const sql = "INSERT INTO users (`name`, `phone`, `email`) VALUES (?)";
        const values = [
            req.body.name,
            req.body.phone,
            req.body.email,
        ]
        db.query(sql, [values],(err, data)=>{
            if(err) return res.json(err)
            return res.json("user created")
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllUsers,createUser}