const express = require('express');
const router = express.Router();
const userContoller = require('../controller/user.controllers');
//router.use(express.json())
router.get('/first',(req,res)=>{
console.log(req.params.id)
   res.send({sucess:true,msg:'sucess'}) 
})

/* GET users listing. */
router.post('/createUser',(req,res)=>{
   let password=req.body.name
console.log(password)
   res.send('hello' + password)
});

router.post('/signin',userContoller.signin);

module.exports = router;
