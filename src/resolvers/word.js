const { Word } = require('../entities')
const constants = require('../constants')

const word = async (parent, args, context, info) => {
    let word = await Word.findById(args.word).exec()
    if(word && word.sources) {
        let source = word.sources.find(x => x._id === constants.metadataSource.entryThroughThisService)
        return source && source.entry
    }
}

const addWord = async (parent, args, context, info) => {
    let word = await Word.findById(args.word).exec()
    if(word) {
        result = await Word.updateOne(
            { 
                "_id": args.word, 
                "sources._id": constants.metadataSource.entryThroughThisService 
            },
            {
                "$set": {
                    "sources.$.metadata.modifiedDate": new Date(),
                    "sources.$.entry": args
                }
            })
        
        if(!word.sources.find(x => x._id === constants.metadataSource.entryThroughThisService)) {
            result = await Word.updateOne(
                { 
                    "_id": args.word
                },
                {
                    $push: {
                        sources: {
                            _id: constants.metadataSource.entryThroughThisService,
                            metadata: {
                                source: constants.metadataSource.entryThroughThisService,
                                version: constants.versions.schema,
                                createdDate: new Date()
                            },
                            entry: args
                        }
                    }
                }
            )
        }
    } else {
        Word.create({
            _id: args.word,
            sources: [{
                _id: constants.metadataSource.entryThroughThisService,
                metadata: {
                    source: constants.metadataSource.entryThroughThisService,
                    version: constants.versions.schema,
                    createdDate: new Date()
                },
                entry: args
            }]
        })
    }
    
    return args
}

module.exports = {
    Query: {
        word
    },
    Mutation: {
        addWord
    }
}