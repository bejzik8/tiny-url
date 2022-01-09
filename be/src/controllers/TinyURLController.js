const TinyURL = require('../models/tinyUrl')

class TinyURLController {
    async saveUrl(req, res) {
        const tinyUrl = new TinyURL({ full: req.body.url })
        
        await tinyUrl.save()
        
        res.json({ message: 'Successful response', entry: tinyUrl })
    }
}

module.exports = new TinyURLController()