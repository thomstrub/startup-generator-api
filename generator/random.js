module.exports = {
    returnJson
}

const constants = {
    verbs: [
        "Disrupt", "Curate", "Destroy", "Gamify", "Revolutionize", "Monetize",
        "Create", "Prioritize", "Redefine", "Innovate", "Re-imagine", "Ideate",
        "Re-disrupt", "Uber for", "Airbnb for", "Netflix for", "Craft", "Hack",
        "Shift"
        ],
    sectors: [
            "education", "health", "prison", "transportation", "cryptocurrency",
            "housing", "real-estate", "grocery", "delivery", "shopping", "work",
            "labor", "music", "blog"
            ],
    nouns: [
            "middleman", "industry", "concept", "process", "development"
          ],
    prepositions: [
                    "with", "through", "by", "via"
                ],
    adjectives: [
                "proprietary", "innovative", "lean", "curated", "reinforced"
               ],
    systems: [
              "system", "platform", "convergence", "paradigm shift", "strategy", "investment"
            ]
}

class Idea {
    constructor(constants){
        this.verb = constants.verbs[Math.floor(Math.random() * constants.verbs.length)]
        this.sector = constants.verbs[Math.floor(Math.random() * constants.verbs.length)]
        this.noun = 
        this.preposition =
        this.adjective = 
        this.system =
    }
    
    
}

function returnJson(){
    return(
        {"message": "test idea from random.js"}
    )
}