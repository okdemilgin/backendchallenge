const router = require ('express').Router();

router.get ('/', (res,req,next)=> {
    res.json ('router working as expected...')
})


module.exports = router;