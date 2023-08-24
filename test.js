const header = document.querySelector("header");
console.log(header);

const billed = document.querySelector("img");
console.log(billed);

const article = document.querySelector("article");
console.log(article);

const brødtekst = document.querySelector("p");
console.log(brødtekst);

const footer = document.querySelector("footer");
console.log(footer);

//overskrift //
const overskrift = document.querySelector("h1");
console.log(overskrift);
overskrift.textContent = "her er titlen";

//udskift tekst få fat i spicifik artikkel og sektion, husk nyt (functions)navn//
const afsnit = document.querySelector("section article:nth-child(1) p");
console.log(afsnit.textContent);
afsnit.innerHTML = "tekst tekst";

const afsnit2 = document.querySelector("section article:nth-child(2) p");
console.log(afsnit2.textContent);
afsnit2.innerHTML = "tekst tekst";
