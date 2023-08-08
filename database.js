const mysql = require('mysql2');

//Create a Database Connection

const con = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'lib'
})
// 3306
con.connect((err) => {
    if(err)
    {
        console.log(err)
    }else{
        console.log("CONNECTION SUCCESSFUL!")
    }
})

// Get The Data From The Table
con.query('select * from books', (err, res) =>{
    return console.log(res)
})
