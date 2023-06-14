const express = require('express');
const post = require('../models/post');
const router = express.Router();

router

.post('/getpost', async (req, res) => {
    try {
      let getpost = await post.getpost(req.body.id);
      res.send(getpost)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  .post('/createpost', async (req, res) => {
    try {
      let createpost = await post.createpost(req.body.id, req.body.postcontent);
      res.send(createpost)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  


  .post('/updatepost', async (req, res) => {
    try {
      let updatepost = await post.updatepost(req.body.id, req.body.postcontent);
      res.send(updatepost)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/deletepost', async (req, res) => {
    try {
      let deletepost= await post.deletepost(req.body.id);
      res.send(deletepost)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports=router;