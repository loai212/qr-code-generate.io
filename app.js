// Import necessary modules and dependencies
import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import qr from 'qr-image';

// Create an Express application
const app = express();
const port = 3000;

// Set up the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Render the main webpage
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission and generate QR code
app.post('/generate', (req, res) => {
  const data = req.body.data;
  const qrCode = qr.image(data, { type: 'png' });
  res.type('png');
  qrCode.pipe(res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});