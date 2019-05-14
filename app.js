//const fs = require('fs');

//fs is fileSystem

//fs.writeFileSync('notes.txt', 'My name is Patricia.');
//fs.appendFileSync('notes.txt', ' I am 25 years old.');
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//const message = addNotes();
//console.log(message);

//console.log(chalk.green("You have reached " + chalk.blue.inverse("success!") + " Congratulations!"));

//customize yargs version:
yargs.version("1.1.0");

//Create add comand:
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//Create remove command:
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  }
});

//Create list command:
//comment below
yargs.command({
  command: "list",
  describe: "List the notes",
  handler: function () {
    console.log("Listing out all the notes");
  }
});

//Create read command:
yargs.command({
  command: "read",
  describe: "Read the notes",
  handler: function () {
    console.log("Reading the notes");
  }
});

//or console.log(yargs.argv);
yargs.parse()