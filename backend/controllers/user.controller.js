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

module.exports = {getAllUsers}