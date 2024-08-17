/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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
};
