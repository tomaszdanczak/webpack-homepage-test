window.addEventListener("scroll", function(){
    const nav = document.querySelector(".nav--js");
    nav.classList.toggle("nav--sticky", window.scrollY > 0)
});

console.log("test");