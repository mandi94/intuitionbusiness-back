const express = require('express')
const Question = require('../models/question')
const auth = require('../middleware/auth')
const router = new express.Router()



router.get('/questions',async (req,res)=>{
    try{
        const questions = await Question.find()

        if(!questions){
            return res.status(404).send()
        }

        res.send(questions)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports=router