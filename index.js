const cheerio = require('cheerio');
const request = require('request');
const validUrl = require('valid-url');
const srcset = require('srcset');

function cnascraper () {}

cnascraper.prototype.ScrapeArticle = function (articleURL, callback) {
	articleURL = articleURL.toLowerCase()
	if (validUrl.isUri(articleURL) && articleURL.includes('channelnewsasia.com')){
		//Proceed with scraping
		request(articleURL, function (error, response, body) {
		
			if (error) return console.error(error);
			const $ = cheerio.load(body);

			var title = $('h1.article__title').text();
			var category = $('span.article__category').text()
			var imgparsed = srcset.parse($('picture.picture__container').find('source').attr('data-srcset')); 
			var img = imgparsed[1]["url"];

			var imgcaption = $('figcaption.picture__caption').text();
			var postdate = $('time.article__details-item').text()
			var source = $('span.article__source').text();

			var text = "";
     	 	$("div.c-rte--article").each(function(i, item){
      			text += ($("p", item).text())
      		});

			var ArticleData = {};
			ArticleData.title = title;
			ArticleData.category = category;
			ArticleData.text = text;
			ArticleData.source = source;
			ArticleData.postdate = postdate;
			ArticleData.img = img;
			ArticleData.imgcaption = imgcaption;
			callback(null, ArticleData)


		});

	} 
	else {
		callback("Invalid articleURL provided to ScrapeArticle function");
	}
}


module.exports = new cnascraper()
  
