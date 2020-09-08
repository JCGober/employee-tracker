let inquirer = require("inquirer")


inquirer
.prompt({
    type:"list",
    message: "What would you like to do?",
    name: "action",
    choices:[
        "Add",
        "View",
        "Update"
    ]
}).then(function(answers){
    console.log(answers.action)

    if(answers.action === "Add"){

        inquirer
        .prompt({
        type:"list",
        message: "What would you like to add?",
        name: "adding",
        choices:[
        "Department",
        "Role",
        "Employee?"
        ]
        }).then(function(answers){


        
        }); 

    } else if (answers.action === "View") {

        inquirer
        .prompt({
        type:"list",
        message: "What would you like to view?",
        name: "viewing",
        choices:[
        "Department",
        "Role",
        "Employee"
        ]
        }).then(function(answers){

            if(answers.viewing === "Department"){


                var mysql = require("mysql");

                var connection = mysql.createConnection({
                    host: "localhost",
                  
                    // Your port; if not 3306
                    port: 3306,
                  
                    // Your username
                    user: "root",
                  
                    // Your password
                    password: "rootroot",
                  
                    database: "employee_tracker_db"
                  });
                
                  connection.connect(function(err) {
                    if (err) throw err;
                    console.log("connected as id " + connection.threadId);
                    afterConnection();
                });
                
                function afterConnection() {
                    connection.query("SELECT * FROM department", function(err, res) {
                        if (err) throw err;
                        console.table(res)
                        connection.end();
                    });
                }

                





            }else if (answers.viewing === "Role"){

                var mysql = require("mysql");

                var connection = mysql.createConnection({
                    host: "localhost",
                  
                    // Your port; if not 3306
                    port: 3306,
                  
                    // Your username
                    user: "root",
                  
                    // Your password
                    password: "rootroot",
                  
                    database: "employee_tracker_db"
                  });
                
                  connection.connect(function(err) {
                    if (err) throw err;
                    console.log("connected as id " + connection.threadId);
                    afterConnection();
                });
                
                function afterConnection() {
                    connection.query("SELECT * FROM role", function(err, res) {
                        if (err) throw err;
                        console.table(res)
                        connection.end();
                    });
                }





            }else if (answers.viewing === "Employee"){



                var mysql = require("mysql");

                var connection = mysql.createConnection({
                    host: "localhost",
                  
                    // Your port; if not 3306
                    port: 3306,
                  
                    // Your username
                    user: "root",
                  
                    // Your password
                    password: "rootroot",
                  
                    database: "employee_tracker_db"
                  });
                
                  connection.connect(function(err) {
                    if (err) throw err;
                    console.log("connected as id " + connection.threadId);
                    afterConnection();
                });
                
                function afterConnection() {
                    connection.query("SELECT * FROM employee", function(err, res) {
                        if (err) throw err;
                        console.table(res)
                        connection.end();
                    });
                }





            }





    
        }); 

    } else if (answers.action === "Update"){

        inquirer
        .prompt({
        type:"list",
        message: "What would you like to view?",
        name: "updating",
        choices:[
        "Department",
        "Role",
        "Employee?"
        ]
        }).then(function(answers){

            console.log(answers.updating)
        }); 
    }
})

