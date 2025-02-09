let sentenceBuilder = {
    subject: "",
    verb: "",
    object: "",

    buildSentence: function () {
        return (this.subject.trim() && this.verb.trim() && this.object.trim()) 
            ? `${this.subject} ${this.verb} ${this.object}` 
            : "Incomplete sentence";
    },

    updateProperty: function (property, value) {
        if (this.hasOwnProperty(property)) {
            this[property] = value;
        } else {
            return "Invalid property";
        }
    }
};

console.log(sentenceBuilder.buildSentence()); 
sentenceBuilder.updateProperty("subject", "I");
sentenceBuilder.updateProperty("verb", "am learning");
sentenceBuilder.updateProperty("object", "coding");
console.log(sentenceBuilder.buildSentence()); 
sentenceBuilder.updateProperty("verb", "");
console.log(sentenceBuilder.buildSentence()); 

sentenceBuilder.updateProperty("subject", "The cat");
sentenceBuilder.updateProperty("verb", "is chasing");
console.log(sentenceBuilder.buildSentence()); 

console.log(sentenceBuilder.updateProperty("mood", "happy")); 