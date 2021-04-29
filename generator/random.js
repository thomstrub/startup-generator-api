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
    constructor(constantArr){
        this.verb = this.randomize(constantArr.verbs);
        this.sector = this.randomize(constantArr.sectors);
        this.noun =  this.randomize(constantArr.nouns);
        this.preposition = this.randomize(constantArr.prepositions);
        this.adjective = this.randomize(constantArr.adjectives);
        this.system = this.randomize(constantArr.systems);
    }
    randomize(constant) {
       return constant[Math.floor(Math.random() * constant.length)]
    }
    generate(){
        let idea = [];
        for(const [key, value] of Object.entries(this)){
            idea.push(value);
        }
        return idea.join(" ");
    }
    
}

function returnJson(){
    const newIdea = new Idea(constants);
    console.log(newIdea);
    return(
        {"idea": newIdea.generate() + "."}
    )
}