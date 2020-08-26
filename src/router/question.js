const express = require('express')
const Question = require('../models/question')
const auth = require('../middleware/auth')
const router = new express.Router()



router.get('/questions',async (req,res)=>{
    try{
        const questions = await Question.find()
        console.log(questions)
        if(!questions){
            return res.status(404).send()
        }

        res.send(questions)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/question',auth,async (req,res)=>{
    const question = new Question({
        ...req.body,
        owner:req.user._id
    })
    try{
        await question.save()
        res.status(201).send(question)
    }catch(e){
        res.status(400).send(e)
    }
  
})

module.exports=router