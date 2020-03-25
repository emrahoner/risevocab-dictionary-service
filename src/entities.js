const mongoose = require('mongoose')

const Word = mongoose.model(
    'Word',
    new mongoose.Schema({
        _id: String,
        word: String,
        sources: [{
            _id: String,
            metadata: {
                source: String,
                version: String,
                createdDate: Date,
                modifiedDate: Date
            },
            entry: {
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
            }
        }]
    })
)

module.exports = {
    Word
}