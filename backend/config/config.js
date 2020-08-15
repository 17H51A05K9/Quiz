module.exports={
    url:process.env.MONGO||"mongodb://localhost:27017/Quiz",
    port:process.env.PORT || 3000,
    options:{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
}