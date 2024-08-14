let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let domains = pronoun.flatMap(p => 
    adj.flatMap(a => 
        noun.flatMap(n => `${p} ${a} ${n}.com`)
    )
)

console.log(domains)