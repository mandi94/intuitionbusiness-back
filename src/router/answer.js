const express = require('express')
const Answer = require('../models/question')
const auth = require('../middleware/auth')
const router = new express.Router()


// create new answer
router.post('/answer',auth,async (req,res)=>{
    const answer = new Answer({
        ...req.body,
        owner:req.user._id
    })
    try{
        await answer.save()
        res.status(201).send(answer)
    }catch(e){
        res.status(400).send(e)
    }
  
})

// GET /answer?limit=10&skip=20
// GET /answer?sortBy=createdAt:desc
// router.get('/answer',auth,async (req,res)=>{
//     const match= {}
//     const sort ={}

//     if(req.query.sortBy){
//         const parts= req.query.sortBy.split(':')
//         sort[parts[0]]= parts[1] === 'desc'? -1: 1
//     } 

//     try{
//         await req.user.populate({
//             path:'answer',
//             match,
//             options:{
//                 limit:parseInt(req.query.limit),
//                 skip:parseInt(req.query.skip),
//                 sort
//             }
//         }).execPopulate()
//         res.send(req.user.answer)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })



module.exports=router