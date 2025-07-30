console.log("Start");

// --------------Express----------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 9000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.use(express.static('public')); // for images/css
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/success', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.render('success', { formData });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
