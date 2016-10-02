const cheerio = require('cheerio');
const request = require('request-promise');


function ScraperController() {
};

ScraperController.prototype = (function () {
    return {
        scrape: function (req, res) {
            var clubID = req.params.clubID;
            var weekID = req.params.weekID;

            // res.header('Content-Type', 'application/json');

            let result = '';

            const options = {
                uri: 'https://www.fff.fr/la-vie-des-clubs/' + clubID + '/agenda/semaine-' + weekID,
                headers: {
                    'User-Agent': 'Request-Promise'
                },
            };

            request (options, function(error, response, html){
                let json = {championnat: "", date: "", team1: "", team2: "", score: ""}
                if(!error){
                    const $ = cheerio.load(html)

                    let championnat, date, team1, team2

                    // We'll use the unique header class as a starting point.

                    $('h3').filter(function(){

                        // Let's store the data we filter into a variable so we can easily see what's going on.

                        const data = $(this)

                        championnat = data.text();

                        if (championnat == 'EXCELLENCE SENIORS - POULE A') {
                            json.championnat = championnat;
                            json.date = data.next().find('h4').text();
                            json.team1 = data.next().find('.eqleft > a').text();
                            json.team2 = data.next().find('.eqright > a').text();
                            json.score = data.next().find('.score > .message').text();

                            result += JSON.stringify(json);
                            res(result);
                            return;
                        }
                    })
                }
            })



        }
    }
})();

var scraperController = new ScraperController();
module.exports = scraperController;

