const yargs = require('yargs');

const { addNote, removeNote, printNotes } = require('./notes.controller');

yargs.command({
  command: 'add',
  describe: 'Add new note to the list',
  builder: { title: { type: 'string', describe: 'Note title', demandOption: true } },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: 'list',
  describe: 'Print notes list',
  handler() {
    printNotes();
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove note from list by id',
  builder: { id: { type: 'string', describe: 'Note ID', demandOption: true } },
  handler({ id }) {
    removeNote(id);
  },
});

yargs.parse();
