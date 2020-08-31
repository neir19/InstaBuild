const router= require('express').Router();

const apiApartmentRouter= require('./api/apartment');

router.use('/apartment',apiApartmentRouter);

module.exports=router;