var mysql =require("mysql")

var connection = mysql.createConnection({

	host:"",
	port: 3306,
	user: "root",
	password: "",
	database; "hangman.db"


})

connection.connect(onConnected)

function onConnected(err) {
	if (err) throw err
	console.log("connected as id " + connection.threadId)
connection.end()
}