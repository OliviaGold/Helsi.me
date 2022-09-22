///////////////////////////////// TABS /////////////////////////////////
const tabs   = document.querySelectorAll(".tabs__nav-btn");
const tabsContent = document.querySelectorAll(".tabs__img");

tabs.forEach(onTabClick);

function onTabClick(content) {
    content.addEventListener("click", function() {
        let currentBtn = content;
        let tabId = currentBtn.getAttribute("tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains("active") ) {
            tabs.forEach(function(content) {
                content.classList.remove("active");
            });
    
            tabsContent.forEach(function(content) {
                content.classList.remove("active");
            });
    
            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
}

document.querySelector(".tabs__nav-btn").click();

///////////////////////////////// TOGGLE /////////////////////////////////

let btns = document.querySelectorAll(".about-reform__btn");
console.log(btns)

for (button of btns) {
    button.addEventListener("click", function() {
    let text = this.closest(".about-reform__text")
    let dots = text.querySelector(".dots");
    let more = text.querySelector(".more");

    if(dots.style.display === "none") {
      dots.style.display = "inline";
      more.style.display = "none";
      this.textContent = "Детальніше";
    } else {
      dots.style.display = "none";
      more.style.display = "inline";
      this.textContent = "Сховати";
    }
  });
}
////////////////////////////////// BURGER ///////////////////////////
const hamburger = document.querySelector(".btn-menu");
const navMenu = document.querySelector(".nav");
const menuBtn = document.querySelector(".header__btn")
const body = document.body;

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-open");
  menuBtn.classList.toggle("is-open");
  body.classList.toggle("no-scroll");
}