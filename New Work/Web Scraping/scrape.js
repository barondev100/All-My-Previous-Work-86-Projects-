const request = require('request');
const cheerio = require('cheerio');

request('https://www.traversymedia.com/', (error, response, html)=>{
    if(!error && response.statusCode == 200){
       const $ = cheerio.load(html);

       const siteHeading = $('.col-lg-9');

    //    const output = siteHeading.children('h2').parent().text();
    $('.navbar  a').each((i,element)=>{
        const item = $(element).text();
        const link = $(element).attr('href');
        console.log(link);
    })
   
    }
});