const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {connection} = require('./src/Connection');

connection