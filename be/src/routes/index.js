const router = require('express').Router()

router.use('/shorten-url', require('./tiny-url'))

module.exports = router