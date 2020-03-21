const mongoose = require('mongoose')

const Word = mongoose.model(
    'Word',
    new mongoose.Schema({
        _id: String,
        word: String,
        pronunciation: [{
            accent: String,
            url: String
        }],
        relatedWords: [String],
        wordTypes: [{
            wordType: String,
            pronunciation: [{
                accent: String,
                url: String
            }],
            definitions: [{
                definition: String,
                sentences: [String]
            }]
        }]
    })
)

module.exports = {
    Word
}