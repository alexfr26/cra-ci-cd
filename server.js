/* eslint-disable no-console */
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.info(`listening on port ${PORT}`));
