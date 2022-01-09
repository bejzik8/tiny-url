const router = require('express').Router()
const TinyURLController = require('../controllers/TinyURLController')

router.post('/', TinyURLController.saveUrl)

module.exports = router