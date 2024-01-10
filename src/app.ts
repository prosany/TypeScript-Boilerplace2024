import cors from 'cors';
import express from 'express';
import compression from 'compression';
import expressMongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';

import { app } from '@/utils/createServer';

// enable cors
app.use(cors());
app.options('*', cors());

// body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // parse urlencoded request body

// sanitize request data
app.use(xss());
app.use(expressMongoSanitize());

// gzip compression
app.use(compression());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
