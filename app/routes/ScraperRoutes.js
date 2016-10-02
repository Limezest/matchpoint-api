var ScrapeController = require('../controllers/ScraperController');

module.exports = [
    {
        method: 'GET',
        path  : '/scrape/club/{clubID}/week/{weekID}',
        config: {
            handler : ScrapeController.scrape
        }
    }
];