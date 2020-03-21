const { gql } = require('apollo-server')

const schema = gql`
    type Pronunciation {
        accent: String,
        url: String
    }

    type Definition {
        definition: String,
        sentences: [String]
    }

    type DefinitionByWordType {
        wordType: String,
        pronunciation: [Pronunciation],
        definitions: [Definition]
    }

    type Word {
        word: String,
        relatedWords: [String],
        pronunciation: [Pronunciation]
        wordTypes: [DefinitionByWordType]
    }

    input PronunciationInput {
        accent: String,
        url: String
    }

    input DefinitionInput {
        definition: String,
        sentences: [String]
    }

    input DefinitionByWordTypeInput {
        wordType: String,
        pronunciation: [PronunciationInput],
        definitions: [DefinitionInput]
    }

    type Query {
        healthCheck: String,
        word(word: String): Word
    }

    type Mutation {
        addWord(word: String, relatedWords: [String], pronunciation: [PronunciationInput], wordTypes: [DefinitionByWordTypeInput]): Word
    }
`

module.exports = schema