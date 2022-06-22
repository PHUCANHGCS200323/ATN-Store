let mongoose = require('mongoose');

const mongodb_url = 'mongodb+srv://PhucAnh:12345@cluster0.atmvg.mongodb.net/ATNstore?retryWrites=true&w=majority'

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true})
            .then(() => {
                console.log("Database connection successfully!");
            })
            .catch(err => {
                console.log("Database connection error!");
            })
    }
}

module.exports = new Database();
