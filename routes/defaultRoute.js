var router =require('express').Router();

router.get('/',function(req,res){
	res.json({status:'failed',message:'bad route'});
})

router.post('/',function(req,res){
	res.json({status:'failed',message:'bad route'});
})

module.exports = router;