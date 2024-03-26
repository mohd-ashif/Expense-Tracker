const  mongoose = require ('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title : { type:String, require: true, maxLength: 20,trim: true },

    amount: {type:Number , required : true, maxLength: 20, trim:true },

    type: { type: String, default:"expense"},

    date: {type:Number, require: true ,trim : true},

    category : { type: String, require: true, maxLength: 20, trim:true},

    description : {type: String, require : true , maxLength: 20, trim : true}

}, {timestamps: true})

module.exports = mongoose.model('expense', ExpenseSchema);
