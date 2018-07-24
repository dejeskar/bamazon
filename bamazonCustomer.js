var inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "type",
        message: "What Would you like to do?",
        type: "list",
        choices: ["POST AN ITEM", "BID ON AN ITEM"]
    }
]).then(function (answers) {



    console.log(answers)
});