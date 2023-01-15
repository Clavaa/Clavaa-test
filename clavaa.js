// full divs
const sign_in = document.getElementById("num-01");
const pay = document.getElementById("num-02");
const rewards = document.getElementById("num-03");
const redeem = document.getElementById("num-04");

const pic_array = [sign_in, pay, rewards, redeem];

function sign_func(elem) {
  for (i of pic_array) {
    console.log(i);
    if (i != elem) {
      i.style.display = "none";
    } else {
      i.style.display = "block";
    }
  }
}

// pic links
const sign_in_tab = document.getElementsByClassName("pic-1");
const pay_tab = document.getElementsByClassName("pic-2");
const rewards_tab = document.getElementsByClassName("pic-3");
const redeem_tab = document.getElementsByClassName("pic-4");

function clicker_function(pic_link, full_div) {
  for (i of pic_link) {
    
    i.addEventListener("click", function () {
      sign_func(full_div);
    });
  }
}

clicker_function(sign_in_tab, sign_in);
clicker_function(pay_tab, pay);
clicker_function(rewards_tab, rewards);
clicker_function(redeem_tab, redeem);

// picture clicking done/   faqs starting


function faqsBarStatus(tab, tabI) {
  console.log(tabI)
  if (tab.style.display == "block") {
    tab.style.display = "none";
    tabI.style.transform = "rotate(0deg)"
  } else {
    tab.style.display = "block";
    tabI.style.transform = "rotate(180deg)"
}}

function faqsClick(clickTab, opendTab, clickedI) {
  clickTab.addEventListener("click", function () {
    faqsBarStatus(opendTab, clickedI);
  });
}

for(let i = 0; i < 10; i++) {
    let clickedName = `#questions-${i} h6`
    let openedName =  `#questions-${i} p`
    let openedI = document.querySelector( `#questions-${i} i`)
    let clicked = document.querySelector(clickedName)
    let opened = document.querySelector(openedName)
    faqsClick(clicked, opened, openedI)
}

