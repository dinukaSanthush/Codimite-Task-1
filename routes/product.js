const express = require('express');
const connection = require('../connection');
const router = express.Router();

 
router.post('/create',(req,res,next)=>{
      
    let product = req.body;
    query = "insert into todo (name,Description,status) values(?, ?, ?)";
    connection.query(query,[product.name, product.Description, product.status],(err,results)=>{
    if(!err){
        return res.status(200).json({message: "Added successfully"});
    }

    else
     return res.status(200).json(err);
          
    });

});

router.get('/read', (req,res,next)=>{

    var query = "select * from todo";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }

        else
         return res.status(500).json(err);

    });
});

router.delete('/delete/:name',(req,res,next)=>{
    const name = req.params.name;
    var query = "delete from todo where name=?";
    connection.query(query,[name],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Name does not exist!!!"});
            }

            return res.status(200).json({message: "Deleted successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    
    });
});





module.exports = router;