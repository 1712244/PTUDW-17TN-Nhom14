const mongoose = require("mongoose");

exports.connectMongo = function() {
    mongoose.Promise = global.Promise;
    mongoose.set('useFindAndModify', false);
    mongoose.connect('mongodb+srv://1712760:1712760@cluster0-5gopb.mongodb.net/library?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function(err, db) {
        if (err) {
            return;
        } else {            
            // db.db.listCollections().toArray(function (err, names) {
            //     console.log(names); // [{ name: 'dbname.myCollection' }]
                
            // });
            console.log(1, "CONNECT DB SUCCESS");
        }
    });
};