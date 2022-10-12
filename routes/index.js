const express = require('express');
const router = express.Router();
const pdfService = require('../service/pdf-service');

router.get('/invoice', (req, res, next) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment;filename=invoice.pdf`,
  });
  pdfService.buildPDF(
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
});

module.exports = router;
