function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = { name: "Alice", hobbies: ["reading", "traveling"] };
const cloned = clone(original);


cloned.hobbies.push("coding");

console.log("Original:", original); 
console.log("Clone:", cloned);