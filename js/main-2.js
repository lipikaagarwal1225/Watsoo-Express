let siteMenu = document.querySelectorAll("ul.site-menu > li");
let siteMenudropdwn = document.querySelectorAll("ul.dropdown > li > a");
let menuAnchor = document.querySelectorAll("ul.site-menu > li > a");
let currentLocation = location.href;
let base_url = window.location.origin;
var pathArray = window.location.pathname.split("/");

for (let i = 0; i < menuAnchor.length; i++) {
  if (base_url && pathArray[1] === "") {
    siteMenu[0].className = "active";
  }
  if (menuAnchor[i].href === currentLocation) {
    siteMenu[i].className = "active";
  }
}
for (let i = 0; i < siteMenudropdwn.length; i++) {
  if (siteMenudropdwn[i].href === currentLocation) {
    console.log(siteMenudropdwn[i]);
    siteMenudropdwn[i].parentElement.className = "active";
    const parentItem =
      siteMenudropdwn[i].parentElement.parentElement.parentElement;
    parentItem.classList.add("active");
  }
}

// Sticky header

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-130px";
  }

  prevScrollpos = currentScrollpos;
};

// Active Class Add

// let workItem = document.getElementById('exploreWork');
// let projUrl = document.querySelector('a.prj_url')
// let workHtml = location.href;

// if (projUrl.href === workHtml) {
//   workItem.classList.add('wrks');
// //   alert('hey');
// }

// const pdfBtnView = document.querySelectorAll('.pdf_btn_group > .pdf_btn')

// for (let i = 0; i < pdfBtnView.length; i++) {
// 	pdfBtnView[i].href="issue.html";
// }

//////////////////////////////////////////////////////////////////
// Breadcrumd display handle
const afterApendElement = document.querySelector("header");

function breadCrumb() {
  const location = window.location;
  const stringReplace = location.pathname.replace(
    /[&\/\\#,+()$~%.'":*?<>{}-]/g,
    " "
  );
  const stringSplit = stringReplace.split(" ");
  const breadCrumbStringArray = stringSplit.slice(1, -1);
  const arrayJoin = breadCrumbStringArray.join(" ");
  let finalBread = arrayJoin;
  if (
    breadCrumbStringArray.includes("sfa") ||
    breadCrumbStringArray.includes("hrms") ||
    breadCrumbStringArray.includes("industries")
  ) {
    breadCrumbStringArray.shift();
    const arrayJoin = breadCrumbStringArray.join(" ");
    finalBread = arrayJoin;
    if (breadCrumbStringArray.includes("nbfc")) {
      finalBread = "Non-Banking Financial Company";
    }
    if (breadCrumbStringArray.includes("fmcg")) {
      finalBread = "Fast-Moving Consumer Goods";
    }
    if (breadCrumbStringArray.includes("it")) {
      finalBread = "Information Technology";
    }
  }
  const homeUrl = `${location.origin}`;
  const hrmsbreatCrumbHtml = `
    <nav aria-label="breadcrumb" class="dynamic_breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="${homeUrl}">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">HRMS</li>
      </ol>
    </nav>
  `;
  const gpsbreatCrumbHtml = `
    <nav aria-label="breadcrumb" class="dynamic_breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="${homeUrl}">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">GPS Devices</li>
      </ol>
    </nav>
  `;
  if (
    location.pathname !== "/" &&
    location.pathname !== "/index.html" &&
    location.pathname !== "/404-page-not-found.html"
  ) {
    if (location.pathname == "/hrms.html") {
      afterApendElement.insertAdjacentHTML("afterend", hrmsbreatCrumbHtml);
    } else if (location.pathname == "/gps-devices.html") {
      afterApendElement.insertAdjacentHTML("afterend", gpsbreatCrumbHtml);
    } else {
      afterApendElement.insertAdjacentHTML("afterend", breatCrumbHtml);
    }
  }
}
breadCrumb();


const formSubmit = document.getElementById("formSubmit");

function quotePage() {
  let code;
  const cpatchaTextBox = document.getElementById("cpatchaTextBox");
  function createCaptcha() {
    //clear the contents of captcha div first
    document.getElementById("captcha").innerHTML = "";
    let charsArray =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    let lengthOtp = 6;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      let index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    let canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    let ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
  }
  createCaptcha();

  const quoteSubmit = document.getElementById("quoteSubmit");
  quoteSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const quoteFormCompany = document.getElementById("quotecompany");
    const quotePhoneNumber = document.getElementById("quotephone");
    const quoteEmail = document.getElementById("quoteemail");
    const quoteRequirement = document.getElementById("quoterequirement");

    let payLoad = {
      name: quoteFormCompany.value,
      email: quoteEmail.value,
      phoneNo: quotePhoneNumber.value,
      companyName: quoteFormCompany.value,
      employeeDetails: quoteRequirement.value,
    };
    if (cpatchaTextBox.value === code) {
      thankyouFetch(payLoad);
    } else {
      alert("Invalid Captcha. try Again");
      createCaptcha();
    }
  });
}

function slideForm() {
  let code;
  const cpatchaTextBox = document.getElementById("cpatchaTextBox1");
  function createCaptcha() {
    //clear the contents of captcha div first
    document.getElementById("captcha1").innerHTML = "";
    let charsArray =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    let lengthOtp = 6;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      let index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    let canv = document.createElement("canvas");
    canv.id = "captcha1";
    canv.width = 100;
    canv.height = 50;
    let ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    // storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha1").appendChild(canv); // adds the canvas to the body element
  }
  createCaptcha();

  const quoteSubmit = document.getElementById("quoteSubmit");
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const formCompany = document.getElementById("company");
    const phoneNumber = document.getElementById("phone");
    const email = document.getElementById("email");
    const requirement = document.getElementById("requirement");
    let payLoad = {
      name: formCompany.value,
      email: email.value,
      phoneNo: phoneNumber.value,
      companyName: formCompany.value,
      employeeDetails: requirement.value,
    };
    if (cpatchaTextBox.value === code) {
      thankyouFetch(payLoad);
    } else {
      alert("Invalid Captcha. try Again");
      createCaptcha();
    }
  });
}
slideForm();

function thankyouFetch(items) {
  fetch("https://www.watsoo.com/thankyou", {
    method: "POST",
    body: JSON.stringify(items),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      if (res.ok) {
        // alert("Form has been submited!!!");
        window.location = "https://www.watsoo.com/thank-you.html";
        // location.reload();
      } else {
        alert("Something wrong!!");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => {
      alert("Something wrong!!");
    });
}

function slideItem() {
  const fixedButton = document.querySelector(".side_button");
  const showSlideItem = document.getElementById("side");
  const outSideClick = document.getElementById("side_close");
  const bodyShade = document.querySelector("body");

  fixedButton.addEventListener("click", () => {
    bodyShade.classList.add("quote_item");
    showSlideItem.classList.add("show");
  });
  outSideClick.addEventListener("click", () => {
    showSlideItem.classList.remove("show");
    bodyShade.classList.remove("quote_item");
  });
  window.onclick = function (e) {
    if (e.target.className == "form_bg show") {
      showSlideItem.classList.remove("show");
    }
  };
}
slideItem();

if (window.location.pathname === "/contact-us.html") {
  quotePage();
}

cookieDisplay();
function cookieDisplay() {
  //  && userCookie === "user_cookies_data"
  const userCookie = document.cookie;
  // console.log(userCookie)
  const cookieSplit = userCookie.split(" ");
  if (
    (userCookie !== "" && cookieSplit.includes("user_cookies_data=1;")) ||
    cookieSplit.includes("user_cookies_data=1")
  ) {
    $("#cookieModal").modal("hide");
  } else {
    $("#cookieModal").modal("show");
  }
}

// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Set cookie consent
function acceptCookieConsent() {
  deleteCookie("user_cookies_data");
  setCookie("user_cookies_data", 1, 30);
  $("#cookieModal").modal("hide");
}



$(function () {
  $(".accordion-content").css("display", "none");
  // $(".js-accordion-title").addClass("open");
  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});

var scrollTopBtn = $("#top_button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    scrollTopBtn.addClass("show");
  } else {
    scrollTopBtn.removeClass("show");
  }
});

scrollTopBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});