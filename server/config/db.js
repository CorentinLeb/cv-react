const mongoose = require("mongoose");

mongoose 
.connect('mongodb+srv://CorentinLB:Brasilia_44200@cluster0.tos87.mongodb.net/test', 
    {
        useNewUrParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Failed to connect to MongoDB", err));


