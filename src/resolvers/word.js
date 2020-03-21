const { Word } = require('../entities')

const word = (parent, args, context, info) => {
    return Word.findById(args.word).exec()
}

const addWord = (parent, args, context, info) => {
    console.log({ _id: args.word, ...args })
    var word = new Word({ _id: args.word, ...args })
    return word.save()
}

module.exports = {
    Query: {
        word
    },
    Mutation: {
        addWord
    }
}