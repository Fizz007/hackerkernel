const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://faisal:VUX7N67LLpaeEFeA@cluster0.zxg5gk9.mongodb.net//", {
    dbName: "Task"
}).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
})