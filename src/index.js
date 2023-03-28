import express from 'express';
import { generatePdf } from './pdfShift.js';

const app = express();
app.set('view engine','ejs')
const port = process.env.PORT || 3000;

generatePdf()
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
