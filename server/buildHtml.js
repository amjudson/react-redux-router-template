import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */

fs.readFile('./index.html', 'utf8', (err, markup) => {
  console.log('Entered index.html build to dist...')
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  // since a seperate spreadsheet is only utilized for the production build, need to dynamicaly
  // $('head').prepend('<link rel="stylesheet" href="style.css">');

  console.log('Write new index.html to dist...')
  fs.writeFileSync('./dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.error(colors.red(err));
    }

    console.log('index.html written to /dist'.green);
  });
});
