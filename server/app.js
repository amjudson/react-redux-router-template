import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config';
import open from 'open';
import path from 'path';
import colors from 'colors';
import * as consts from './serverConstants';

/* eslint-disable no-console */

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(consts.port, function (err) {
  if (err) {
    console.log(err.red.bold);
  } else {
    console.log(`Signed into port: ${consts.port}`.blue.bold);
    open(`http://localhost:${consts.port}`);
  }
});
