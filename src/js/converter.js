import '../scss/main.scss';

const el = document.querySelector(".el--js")
const textarea__input = document.querySelector(".textarea__input--js")
textarea__input.value = `<main>
    <header class="header">header</header>
</main>`
const textarea__output = document.querySelector(".textarea__output--js")

const button = document.querySelector(".button__convert--js")
button.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(textarea__input.value)

    let htmlCode = textarea__input.value;

const tagsHTML = ["script","main","header","pre","div","p"];
const brackets = [
    {chars: "</", changeText: "AAAAAA", span: "<span>&lt&#47;</span>"},
    {chars: "/>", changeText: "BBBBBB", span: "<span>&#47&gt;</span>"},
    {chars: "<", changeText: "CCCCCC", span: "<span>&lt;</span>"},
    {chars: ">", changeText: "DDDDDD", span: "<span>&gt;</span>"}, //generuje błąd <hea>D, zamienić innym zakodowaniem
];
const htmlAttributies = ["id","class"];
//-----------------

//                 1     
// 1. Wyróżnienie - zakodowanie znaczników otwierających html: main, header itp
for (const tag of tagsHTML) {
    let reg = new RegExp(`<${tag}` , "gi");
    htmlCode = htmlCode.replace(reg, `<XXXXXX${tag}`);
}
console.log("Zakodowanie znaczników html: main, header itp")
console.log(htmlCode)

//                 1 
// 1. Wyróżnienie - zakodowanie znaczników zamykających html: main, header itp
for (const tag of tagsHTML) {
    let reg = new RegExp(`</${tag}` , "gi");
    htmlCode = htmlCode.replace(reg, `</YYYYYY${tag}`);
}

console.log("Zakodowanie znaczników html: main, header itp")
console.log(htmlCode)

//                 2
//2.  Zakodowanie nawiasów kątowych: < </ > />
for(const bracket of brackets) {
    const reg = new RegExp(`${bracket.chars}` , "gi");
    htmlCode = htmlCode.replace(reg, `${bracket.changeText}`)
}
console.log("Zakodowanie nawiasów kątowych: < </ > />")
console.log(htmlCode)

//                 3
// Zakodowanie atrybutów HTML: class, id itp
for (const attr of htmlAttributies){
    const reg = new RegExp(`${attr}="` , "gi");
    htmlCode = htmlCode.replace(reg, `SSSS${attr}SSSS="`)
}
console.log(htmlCode)

//                 4
// Zmiana wartości atrybutów
{
    const reg = new RegExp(`\"([a-zA-Z]+.*)\"` , "gi");
    htmlCode = htmlCode.replace(reg, `"<span class="attr-value">$1</span>"`)
}
console.log(htmlCode)

// Odkodowanie atrybutów HTML: class, id itp
for (const attr of htmlAttributies){
    const reg = new RegExp(`SSSS(${attr})SSSS` , "gi");
    htmlCode = htmlCode.replace(reg, `<span class="attr">$1</span>`)
}
console.log(htmlCode)

// Odkodowanie nawiasów kątowych: < </ > />
for(const bracket of brackets) {
    const reg = new RegExp(`${bracket.changeText}` , "gi");
    htmlCode = htmlCode.replace(reg, `${bracket.span}`)
}
console.log("Odkodowanie nawiasów kątowych: < </ > />")
console.log("----------")

// Odkodowanie znaczników otwierających html: main, header itp
for (const tag of tagsHTML) {
    const reg = new RegExp(`XXXXXX${tag}` , "gi");
    htmlCode = htmlCode.replace(reg, `<span class="code-html__tag">${tag}</span>`);
}
console.log(htmlCode)

// Odkodowanie znaczników zamykających html: main, header itp
for (const tag of tagsHTML) {
    const reg = new RegExp(`YYYYYY${tag}` , "gi");
    htmlCode = htmlCode.replace(reg, `<span class="code-html__tag">${tag}</span>`);
}
console.log(htmlCode)


el.innerHTML = `<pre>${htmlCode}</pre>`;
textarea__output.value = `<pre>${htmlCode}</pre>`;
})

