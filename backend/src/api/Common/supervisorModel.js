import mongoose from 'mongoose'

const supervisorSchema = new mongoose.Schema({ 
    name:{
        type: String
    },
    emailid:{
        type: String
    },
   password:{
       type:String
   },
    phone:{
        type: String
    }
},
{
    timestamps:true
})

const supervisorModel=mongoose.model('supervisors',supervisorSchema)

export default supervisorModel;