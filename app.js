console.log("Start");

// --------------Express----------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
express.json
const port = process.env.PORT||9000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/success', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.render('success', { formData });
  });

  app.get('/index', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.render('success', { formData });
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});