const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
    file.path = __dirname + '/uploads/' + file.name;
  });

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log('file', file.path);
  });
  form.on('end', () => {
    res.json();
  });

  res.sendFile(__dirname + '/index.html');
};
