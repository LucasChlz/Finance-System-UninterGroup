const express = require("express");
const fs = require("fs");
const dbConnect = require("../Database/db");

const router = express.Router();

router.post("/user/usuarios", (req, res) => {
    const { name, email, password } = req.body;
  
    dbConnect.query("INSERT INTO users SET ?", { name: name, email: email, password: password},
    function(error, results, fields) {
        if(error) {
            console.log({message:error});
        }

        return res.send("ok");
    })
  
});



module.exports = app => app.use('/', router);