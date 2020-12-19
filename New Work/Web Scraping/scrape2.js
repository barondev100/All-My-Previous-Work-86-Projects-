const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

//Write Head
writeStream.write(`Title, Link \n`);

request('https://devmountain.com/?utm_source=Traversy%20Media&utm_campaign=Traversy%20Media', (error, response, html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        $('.elementor-column').each((i,el)=>{
            const title =$(el).find('.tuition').text().replace(/\s\s+/g, '');
            const link = $(el).find('a').attr('href');

            writeStream.write(`${title}, ${link}, \n`);
        })
    console.log('Scraping Done!');
    }
});