import puppeteer from 'puppeteer';
import fs from 'fs';

export const generatePdf = async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const data = fs.readFileSync('test.json', 'utf8');
    const stringData = data.toString();
    // Set the page content to the JSON data
    await page.setContent(`<p>${stringData}</p>`);
    // Generate the PDF file
    await page.pdf({
      path: 'data.pdf',
      format: 'A4',
      width: 200,
      height: 200,
    });
    console.log('pdf creation done ');
    await browser.close();
  } catch (error) {
    console.log('error', error);
    return res.status(500).send({ status: false, message: error });
  }
};
