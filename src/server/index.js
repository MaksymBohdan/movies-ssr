import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

app
  .use(cors())
  .use(express.static('public'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/', router)
  // eslint-disable-next-line no-console
  .listen(3000, () => console.log('Example app listening on port 3000!'));
