var ScrapeController = require('../controllers/ScraperController');

module.exports = [
    {
        method: 'GET',
        path  : '/scrape/club/{clubID}/week/{weekID}/championship/{csID}',
        config: {
            handler : ScrapeController.scrape
        }
    }
];