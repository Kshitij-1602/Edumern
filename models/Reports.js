const mongoose = require('mongoose')

const ReportsSchema = new mongoose.Schema({
    email: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    reporttype: {
        type: String
    },
    contentid: {
        type: String
    }
})

module.exports = Reports = mongoose.model('reports', ReportsSchema)