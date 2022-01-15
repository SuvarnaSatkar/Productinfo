const db=require('../module/users.module')
const signtbl=db.signtbl
//const sequelize=db.sequelize;
//const Sequelize=db.Sequelize;
module.exports={
    
    createUser:(req, res) =>{
        const user ={
            
            email:req.body.email,
            password:req.body.password
        }
        console.log(req.body.email)
        //console.log(user.password)
        signtbl.create(user).then((data)=>{
        //signtbl.create(user).then((data)=>{
            res.send({error:false, data:data,message:"user created"});
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    },
    signin:(req,res) =>{
        let email=req.body.email;
        let password=req.body.password;
        if(signtbl.email==email && signtbl.password==password)
        {            
            console.log('valid user')
        }
        else
        {
            console.log('not valid user')
        }    
        
    }
    
}