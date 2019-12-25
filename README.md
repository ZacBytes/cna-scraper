# CNA-Scraper
[![Build Status](https://travis-ci.com/ZacBytes/cna-scraper.svg?branch=master)](https://travis-ci.com/ZacBytes/st-scraper)

Easy to use node_js scraper for Channel News Asia articles.
## Installation

Use the package manager [npm](https://www.npmjs.com/) to install cna-scraper.

```bash
npm install cna-scraper
```

## Usage

```js
const cnascraper = require('cna-scraper');

cnascraper.ScrapeArticle('CNA ARTICLE URL HERE', function(err, ArticleData){
   console.log(ArticleData) //logs entire article data object

   console.log(ArticleData.title) //logs article title
   console.log(ArticleData.category) //logs article ctegory
   console.log(ArticleData.text) //logs article text
   console.log(ArticleData.postdate) //logs article post date
   console.log(ArticleData.img) //logs image source (parsed for you)
   console.log(ArticleData.imgcaption) //logs article image caption
   console.log(ArticleData.source) //logs article source
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to test before making pull requests.

## License
[MIT](https://choosealicense.com/licenses/mit/)
