let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.com', '.net', '.us', '.io'];

let domains = pronoun.flatMap(p => 
    adj.flatMap(a => 
        noun.flatMap(n => 
            dom.flatMap(d => `${p} ${a} ${n} ${d}`)
        )
    )
)

console.log(domains)