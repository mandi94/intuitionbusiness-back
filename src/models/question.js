const mongoose=require('mongoose')

const questionSchema = new  mongoose.Schema({

    description:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    option:{
        questionOptions:[{
            optionId:{
                type:String
            },
            description:{
                type:String
            }}],
    },
    type:{ type: String, enum: ['radiobutton', 'slider','chips','inputtext','checkbox'], default: 'inputtext' }
},{
    timestamps:true
})

const Question = mongoose.model('Question',questionSchema)


module.exports=Question