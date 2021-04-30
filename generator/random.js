module.exports = {
    returnJson
}

/* DELETED WORDS

HACK, "an agile", "a lean", "Curate", "Ideate", "Craft", "Create", "Prioritize",

*/

const constants = {
    verbs:  [
            "Disrupt",  "Destroy", "Gamify", "Revolutionize", "Monetize",
              "Redefine", "Innovate", "Re-imagine", "Go beyond", "Increase sales for",
            "Re-disrupt", "Uber for", "Airbnb for", "Netflix for", "Shift", 
            "Engage profits for", "Improve marketing effectiveness for" 
            ],
    sectors:[
            "education", "health", "prison", "transportation", "cryptocurrency",
            "housing", "real estate", "grocery", "delivery", "shopping", "work",
            "labor", "music", "blog", "manufacturing", "pet insurance", "insurance",
            "public", "construction", "entertainment", "luxury travel", "healthcare",
            "food delivery", "grocery delivery", "cannibis", "subscription", "well-being",
            "mental health", "fitness", "home security", "energy", "perscription drug",
            "Millenial", "Gen Y", "Gen Z", "Baby Boomer", "skin care", "automotive",
            "health insurance", "home insurance", "life insurance"
            ],
    nouns: [
            "middleman", "industry", "sector", "workforce", "network", "marketplace"
           ],
    prepositions: [
            "with", "through", "via"
            ],
    adjectives: [
            "a proprietary", "an innovative", "a curated", "a reinforced", "a carbon neutral",
            "an exclusive", "a revolutionary", "a modern", "a coaching", "a remote-first",
            "a video-first", "a review-based", "a cloud-based",
            "a blockchain", "an on-demand", "a universal", "an easy to use", "an at-home",
            "a personalized", "a transparent", "an authentic", 
            ],
    solutions: [
            "personal coaching", "computing", "food delivery", "third-party", "therapy",
            "IoT", "B2B", "blogging", "vlogging", "unprecedented", "social commerce", "fitness",
            "customer engagement", "Millenial focused", "video sharing", "generic",
            "customer collaboration", "AI", "team collaboration", "sleep meditation"
            ],
    systems: [
            "system", "digital platform", "framework", "platform", 
            "paradigm shift", "strategy", "network", "schema", "provider",
            "framework", "scheme", "approach", "plan", "customer experience", "digital library"
            ]
}

class Idea {
    constructor(constantArr){
        this.verb = this.randomize(constantArr.verbs);
        this.sector = "the " + this.randomize(constantArr.sectors);
        this.noun =  this.randomize(constantArr.nouns);
        this.preposition = this.randomize(constantArr.prepositions);
        this.adjective = this.randomize(constantArr.adjectives);
        this.solution = this.randomize(constantArr.solutions);
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