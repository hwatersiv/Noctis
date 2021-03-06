import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config';
import open from 'open';


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, 'src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`running app on: http://localhost:${port}`)
    open(`http://localhost:${port}`);
  }
});
