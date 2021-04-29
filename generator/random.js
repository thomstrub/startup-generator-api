module.exports = {
    returnJson
}

/* DELETED WORDS

HACK, "an agile", "a lean",

*/

const constants = {
    verbs:  [
            "Disrupt", "Curate", "Destroy", "Gamify", "Revolutionize", "Monetize",
            "Create", "Prioritize", "Redefine", "Innovate", "Re-imagine", "Ideate",
            "Re-disrupt", "Uber for", "Airbnb for", "Netflix for", "Craft", "Shift" 
            ],
    sectors:[
            "education", "health", "prison", "transportation", "cryptocurrency",
            "housing", "real estate", "grocery", "delivery", "shopping", "work",
            "labor", "music", "blog", "manufacturing", "pet insurance", "insurance",
            "public sector", "construction", "entertainment", "luxury travel",
            "food delivery", "grocery delivery", "cannibis", "subscription", "well-being",
            "mental health", "fitness"
            ],
    nouns: [
            "middleman", "industry", "concept", "sector", "workforce"
           ],
    prepositions: [
            "with", "through", "via"
            ],
    adjectives: [
            "a proprietary", "an innovative", "a curated", "a reinforced", 
            "an exclusive", "a revolutionary", "a modern", "a coaching",
            "a video-first", "a review-based", "a cloud-based", "a cloud computing", 
            "a blockchain", "a personal coaching"
            ],
    systems: [
            "system", "platform", "convergence", "paradigm shift", "strategy", "network",
            "framework", "scheme", "approach", "plan"
            ]
}

class Idea {
    constructor(constantArr){
        this.verb = this.randomize(constantArr.verbs);
        this.sector = "the " + this.randomize(constantArr.sectors);
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