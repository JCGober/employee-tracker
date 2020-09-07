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

            console.log(answers.adding)
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
        "Employee?"
        ]
        }).then(function(answers){

            console.log(answers.viewing)
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

