const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://emachado0923:Rh5dwZoKjzyawcMq@cluster0.6ekpxfe.mongodb.net")
    .then(() => console.log("MongoDB Connected..."))
    .catch((err: any) => console.log(err));