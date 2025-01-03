AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});

jQuery(document).ready(function ($) {
  "use strict";

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);
        $this.prepend('<span class="arrow-collapse collapsed">');
        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });
        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });
        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});

let homeIcon = "../img/home.svg";
let homeIconBlue = "#60cdff";
var finalUrl;

{
  /* <img src=${base_url_tw && (pathArray_tw[1] === "") || (pathArray_tw[1] == "index.html") ? homeIconBlue : homeIcon}></img> */
}

let currentLocationTw = location.href;
let base_url_tw = window.location.origin;
var pathArray_tw = window.location.pathname.split("/");

const copyRightYear = new Date();

class Myheader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="site-mobile-menu">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>




  <header class="site-navbar" id="navbar" role="banner">
  <div class="top_header mt-3" id="myDiv">
    <div class="container-fluid">
      <div class="row">
      <div class="col-md-4 offset-md-8 text-right">
      <div class="top_item">
        <a href="#" class="mr-3">Career</a>
        <a href="#">Partner with us <i class="icofont-double-right mr-2"></i></a>
      </div>
      </div>
      </div>
    </div>
    </div>
    <div class="menu___bar">
      <div class="container-fluid">
        <div class="row align-items-center">

          <div class="col-7 col-md-6 col-xl-2" data-aos="fade-down">
            <div class="men_logo">
              <a href="/" class="logo">
                <img src="img/logo.svg" alt="logo">
              </a>
            </div>
          </div>

          <div class="col-10 col-xl-10 text-right d-none d-xl-block" data-aos="fade-down">
            <nav class="site-navigation position-relative d-flex justify-content-between" role="navigation" style="padding-left: 14%;">
              <ul class="site-menu js-clone-nav d-none d-lg-block p-0">
              <li> <a href="about-us.html">About Us</a> </li>
                
                <li class="has-children custom_dropdown product_menus">
                  <a href="javascript:void(0)" class="dropdown_link">Products</a>
                  <ul class="dropdown">
                  <div class="row ml-0 mr-0">

                  <div class="col-xl-4 p-2 p-lg-3" style="background: aliceblue;">
                      <a href="construction-erp-software.php"> <h5>ERP</h5></a>
                      <ul class="list_item_data">
                      <li><a href="planning-and-billing.html"><i class="icofont-double-right"></i> Planning and Billing</a></li>
                      <li><a href="finance-and-accounting.html"><i class="icofont-double-right"></i> Finance and Accounting</a></li>
                      <li><a href="plant-and-machinery.html"><i class="icofont-double-right"></i> Plant and Machinery</a></li>
                      <li><a href="supply-chain-management.html"><i class="icofont-double-right"></i> Supply Chain Management</a></li>
                      <li><a href="project-management.html"><i class="icofont-double-right"></i> Project Management</a></li>
                        <li><a href="enterprise-asset-management.html"><i class="icofont-double-right"></i> Enterprise Asset Management</a></li>
                        <li><a href="sfa.html"><i class="icofont-double-right"></i> Sales Force Automation</a></li>
                      </ul>
                  </div>

                  <div class="col-xl-4 p-2 p-lg-3" style="background: #f1f0ff;">
                    <a href="hrms.html"> <h5>HRMS</h5></a>
                    <ul class="list_item_data">
                      <li><a href="core-hr.html"><i class="icofont-double-right"></i> Core HR</a></li>
                      <li><a href="payroll.html"><i class="icofont-double-right"></i> Payroll</a></li>
                      <li><a href="attendance.html"><i class="icofont-double-right"></i> Attendance</a></li>
                      <li><a href="performance-management.html"><i class="icofont-double-right"></i> Performance Management</a></li>
                      <li><a href=""><i class="icofont-double-right"></i> Expense Management </a></li>
                      <li><a href=""><i class="icofont-double-right"></i> Recruitment Management</a></li>
                      <li><a href="asset-management.html"><i class="icofont-double-right"></i> Learning and Development</a></li>
                    </ul>
                  </div>

                  <!--<div class="col-xl-4 p-2 p-lg-3" style="background: #fff0fc;">
                    <h5>Logistics</h5>
                    <ul class="list_item_data">
                      <li><a href="transport-management.html"><i class="icofont-double-right"></i> Transport Management </a></li>
                      <li><a href="warehouse-management.html"><i class="icofont-double-right"></i> Warehouse Management</a></li>
                      <li><a href="fleet-management.html"><i class="icofont-double-right"></i> Fleet Management</a></li>
                      <li><a href="finance-and-accounting.html"><i class="icofont-double-right"></i> Finance and Accounting </a></li>
                      <li><a href="ftl-and-ptl.html"><i class="icofont-double-right"></i> FTL and PTL </a></li>
                      <li><a href="billing.html"><i class="icofont-double-right"></i> Billing </a></li>
                    </ul>
                  </div>-->

                  <div class="col-xl-4 p-2 p-lg-3" style="background: #f6fff0;">
                    <a href="iot-telematics-devices.html"> <h5>IoT Devices</h5></a>
                    <ul class="list_item_data">
                      <li><a href="2g-telematics.html"><i class="icofont-double-right"></i> 2G GPS Tracker </a></li>
                      <li><a href="4g-basic.html"><i class="icofont-double-right"></i> 4G GPS Tracker  </a></li>
                      <li><a href="2g-advanced.html"><i class="icofont-double-right"></i> AIS-140 GPS Devices </a></li>
                      <li><a href="2g-ais.html"><i class="icofont-double-right"></i> Fuel Sensor</a></li>
                      <li><a href="4g-oem.html"><i class="icofont-double-right"></i> E-Lock for Fleets </a></li>
                      <li><a href="4g-ais-140.html"><i class="icofont-double-right"></i> Load Sensors </a></li>
                    </ul>
                  </div>

                  </div>
                  </ul>


                  <!-- <ul class="dropdown">
                    <li><a href="ais-140.html">AIS 140</a></li>
                    <li><a href="fuel-sensor.html">FUEL SENSORS</a></li>
                    <li><a href="digitallock.html">DIGITAL LOCKS</a></li>
                    <li><a href="load-sensor.html">LOAD SENSORS</a></li>
                    <li><a href="gps-devices.html">GPS DEVICES</a></li>
                  </ul> -->
                </li>

                
                <li class="has-children custom_dropdown">
                  <a href="javascript:void(0)" class="dropdown_link">Solutions</a>
                  <ul class="dropdown">
                  <div class="row ml-0 mr-0">

                  <div class="col-xl-3 p-3" style="background: aliceblue;">
                      <a href="telematics-solutions.html"> <h5>Telematics</h5></a>
                      <ul class="list_item_data">          
                        <li> <a href=""><i class="icofont-double-right"></i> Transport Management </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Trip Management System </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Vehicle Tracking System </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Waste Management System </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Water Transport Management </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Highway and Toll Management </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Fuel Monitoring System </a> </li>
                      </ul>
                  </div>
                  <div class="col-xl-3 p-3" style="background: aliceblue;">
                      <h4>&nbsp;</h4>
                      <ul class="list_item_data">
                        <li> <a href=""><i class="icofont-double-right"></i> Wieghbridge Automation </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Warehouse Management </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Fleet Management </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Full Truck Load </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Part Truck Load </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> Tyre Management System </a> </li>
                        <li> <a href=""><i class="icofont-double-right"></i> School Bus Management </a> </li>
                      </ul>
                  </div>

                  <div class="col-xl-3 p-3" style="background: #f1f0ff;">
                    <a href="solutions-for-financial-institutions.html"> <h5>Finance</h5></a>
                    <ul class="list_item_data">
                      <li><a href="blockchain-based-solutions.html"><i class="icofont-double-right"></i> Blockchain-Based Solutions</a></li>
                      <li><a href="cbdc-solutions.html"><i class="icofont-double-right"></i> CBDC Solutions</a></li>
                      <li><a href="core-banking-system.html"><i class="icofont-double-right"></i> Core Banking System</a></li>
                      <li><a href="regulatory-reporting.html"><i class="icofont-double-right"></i> Reconciliation System </a></li>
                      <!--<li><a href="account-aggregation.html"><i class="icofont-double-right"></i> Account Aggregation</a></li>
                      <li><a href="credit-profiling.html"><i class="icofont-double-right"></i> Credit Profiling</a></li>-->
                    </ul>
                  </div>

                  <div class="col-xl-3 p-3" style="background: #fff0fc;">
                     <a href="business-automation-solutions.html"> <h5>Business Automation</h5></a>
                    <ul class="list_item_data">
                    <li><a href="technology-consulting.html"><i class="icofont-double-right"></i> Technology Consulting </a></li>
                    <li><a href="facial-recognition.html"><i class="icofont-double-right"></i> Facial Recognition</a></li>
                      <li><a href="enterprise-ready-generative-ai-solution.html"><i class="icofont-double-right"></i> Generative AI Solution</a></li>
                      <li><a href="end-to-end-custom-solutions.html"><i class="icofont-double-right"></i> On-Demand Custom Solutions</a></li>
                    </ul>
                  </div>

                  </div>
                  </ul>
                </li>
                <li class="has-children">
                  <a href="javascript:void(0)" class="dropdown_link">Industries</a>
                  <ul class="dropdown">
                  <li><a href="banking-and-finance.html">Banking & Finance</a></li>
                  <li><a href="logistics.html">Logistics</a></li>
                    <li><a href="mining.html">Mining</a></li>
                    <li><a href="construction.html">Construction</a></li>
                    <li><a href="agriculture.html">Agriculture</a></li>
                    <li><a href="water-supply.html">Water Supply</a></li>
                    <li><a href="public-transport.html">Public Transport</a></li>
                    <li><a href="schools.html">Schools</a></li>
                    <li><a href="oil-gas.html">Oil & Gas</a></li>
                    <li><a href="maharashtra-mahakhanij-mining.html">
                    Maharashta Mahakhanij Mining</a></li>
                    <!-- <li class="has-children">
                      <a href="#">About-2</a>
                      <ul class="dropdown">
                        <li><a href="#">About-3</a></li>
                        <li><a href="#">About-3</a></li>
                        <li><a href="#">About-3</a></li>
                      </ul>
                    </li> -->
                  </ul>
                </li>
                <li class="has-children">
                  <a href="javascript:void(0)" class="dropdown_link">Resources</a>
                  <ul class="dropdown">
                  <li> <a href="https://blog.watsoo.com" target="_blank">Blog</a> </li>
                  </ul>
                </li>
                </ul>
                <div class="header_btn"><a href="contact-us.html">Contact Us</a></div>
            </nav>
          </div>

          <div class="col-5 col-md-6 col-xl-1 d-inline-block d-xl-none text-right" data-aos="fade-down">
            <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-md-1 py-0" style="position: relative;">
              <a href="#" class="site-menu-toggle js-menu-toggle text-black">
                <span class="icon-menu h3"></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </header>
        `;
  }
}

customElements.define("my-header", Myheader);

const arrowFooter = `<i class="icofont-double-right mr-2"></i>`;

class Myfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a id="top_button"><i class="icofont-arrow-up"></i></a>
        <footer id="footer" class="footer_bg">
          <div class="top_footer">
            <div class="container">
              <div class="row">

                <div class="col-md-6 col-lg-4">
                  <div class="footer_box footer_about">
                    <img src="img/watsoo-logo.png" alt="logo" class="footer_logo">
                    <p>We manufacture various IoT devices like AIS-140, 
Basic tracking devices, Fuel Sensors, Digital Locks 
etc. Along with these devices we also provide end to 
end solution for various business needs</p>
                    <div class="footer_social">
                      <div class="social_icon">
                        <a href="https://www.facebook.com/watsooexpress" target="_blank">
                          <i class="icofont-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/watsooexpress/" target="_blank">
                          <i class="icofont-instagram"></i>
                        </a>
                        <a href="https://x.com/watsooexpress" target="_blank">
                          <i class="icofont-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/watsooexpress" target="_blank">
                          <i class="icofont-linkedin"></i>
                        </a>
                        <a href="https://www.youtube.com/@watsooexpressyt" target="_blank">
                          <i class="icofont-youtube-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-5">
                  <div class="footer_box">
                  <div class="row">
                  <div class="col-md-6 col-lg-6">
                  <h5 class="footer_heading">Services</h5>
                        <ul>
                        <li><a href="#"> ${arrowFooter} Advanced IoT Manufacturing</a></li>
                        <li><a href="#"> ${arrowFooter} IoT Design and Engineering</a></li>
                        <li><a href="#"> ${arrowFooter} Logistics Services</a></li>                    
                        </ul>

                         <h5 class="footer_heading">IoT Devices</h5>
                        <ul>
                        <li><a href="2g-telematics-devices.php"> ${arrowFooter} 2G Telematics Devices</a></li>
                        <li><a href="4g-telematics-devices.php"> ${arrowFooter} 4G Telematics Devices</a></li>
                        <li><a href="fuel-monitoring-devices.php"> ${arrowFooter} Fuel Monitoring Devices</a></li>
                        <li><a href="digital-lock.php"> ${arrowFooter} Digital Lock</a></li>
                        <li><a href="load-balancer.php"> ${arrowFooter} Load Balancer</a></li>
                        <li><a href="weighbridge-system.php"> ${arrowFooter} Weighbridge System</a></li>                    
                        </ul>
                      </div>
                      <div class="col-md-6 col-lg-6">
                      <h5 class="footer_heading">Solutions</h5>
                        <ul>
                          <li><a href="#"> ${arrowFooter} Telematics</a></li>
                          <li><a href="#"> ${arrowFooter} Finance Technology</a></li>
                          <li><a href="#"> ${arrowFooter} Business Automation</a></li>                  
                        </ul>

                        <h5 class="footer_heading">Useful Links</h5>
                        <ul>
                          <li><a href="#"> ${arrowFooter} About us</a></li>
                          <li><a href="#"> ${arrowFooter} Industries</a></li>
                          <li><a href="#"> ${arrowFooter} Blog</a></li>  
                          <li><a href="#"> ${arrowFooter} Contact us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                

               
                <div class="col-md-6 col-lg-3">
                  <div class="footer_box">
                    <h5 class="footer_heading">Contact Us</h5>
                    <div class="footer_list">
                      <span class="footer_icon">
                        <i class="icofont-google-map"></i>
                      </span>
                      <span class="footer_list_text">Watsoo Express Plot 872, Udyog Vihar, Phase 5, Sector 19, Gurugram, Haryana 122016</span>
                    </div>
                    <div class="footer_list">
                      <span class="footer_icon">
                      <i class="icofont-email"></i>
                      </span>
                      <span class="footer_list_text"><a href="mailto:vltd@watsoo.com">vltd@watsoo.com</a></span>
                    </div>
                    <div class="footer_list">
                      <span class="footer_icon"><i class="icofont-ui-call"></i></span>
                      <span class="footer_list_text">
                      <p>Sales/VLTD enquiry: </p>
                      <a href="tel:+918448835133">+91 84488 35133</a> <br>
                      <a href="tel:+919667736407">+91 96677 36407</a> 
                      </span>
                    </div>
                    <div class="footer_list">
                      <span class="footer_icon"><i class="icofont-ui-call"></i></span>
                      <span class="footer_list_text">
                      <p>Service and Support: </p>
                      <a href="tel:+919810545864">+91 98105 45864</a> <br>
                      <a href="tel:+919873955903">+91 98739 55903</a>
                      </span>
                    </div>                    
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="container copyright mt-3 py-3" style="border-top: 1px solid #000">
            <div class="row">
              <div class="col-md-5 col-lg-5 col-12">
                <span>© Copyright ${copyRightYear.getFullYear()} Watsoo Express | All Rights Reserved</span>
              </div>
              <div class="col-md-7 col-lg-7 col-12">
                <ul class="policies">
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
                  <li><a href="copyright-policy.html">Copyright Policy</a></li>
                  <li><a href="disclaimer.html">Disclaimer</a></li>
                  <li><a href="legal-notice.html">Legal Notice</a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </footer>
        `;
  }
}

let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterup();
  }, 50);
});

customElements.define("my-footer", Myfooter);

const params = new URLSearchParams(window.location.search);

var activeType, activeProjectType;
activeType = "All";
activeProjectType = "All";
function activeTab(value) {
  activeType = value;
  var allNav = document.querySelectorAll(".tabs_link");
  allNav.forEach((element) => {
    console.log(element);
    element.classList.remove("active_link");
    element.classList.add("non_active");
  });
  console.log(allNav);
  switch (value) {
    case "All":
      document.getElementById("all").classList.add("active_link");
      activeTypes("All", true);
      break;
    case "Roads":
      document.getElementById("roads").classList.add("active_link");
      activeTypes("Roads", true);
      break;
    case "industrial":
      document.getElementById("industry").classList.add("active_link");
      activeTypes("industrial", true);
      break;
    case "Building":
      document.getElementById("building").classList.add("active_link");
      activeTypes("Building", true);
      break;

    default:
      break;
  }
}

// Read more read less button

$(".moreless-button").click(function () {
  $(".moretext").slideToggle();
  if ($(".moreless-button").text() == "Read more") {
    $(this).text("Read less");
  } else {
    $(this).text("Read more");
  }
});

// var $owl = $('#careersImage');

// $owl.children().each( function( index ) {
//   $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
// });

// $owl.owlCarousel({
//   center: true,
//   loop: true,
//   nav: true,
//   items: 3,
//   dots: false,
// });

// $(document).on('click', '.owl-item>div', function() {
//   var $speed = 300;  // in ms
//   $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
// });

$(".carousel").carousel({
  interval: 2000,
});

// common get quotes

class GetQuotes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <span class="side_button">Get Quote</span>

      <div class="form_bg" id="side">
      <div class="side_form">
      <div id="side_close"><i class="icofont-close"></i></div>
        <form id="formSubmit">
          <div class="form-group">
            <label for="company">Company/Name</label>
            <input type="text" class="form-control form-control-sm" id="company" placeholder="Company/Name" required>
          </div>
          <div class="form-group">
          <label for="email">Email</label>
            <input type="email" class="form-control form-control-sm" id="email" placeholder="Email" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="number" class="form-control form-control-sm" id="phone" placeholder="Phone Number" required> 
          </div>
          <div class="form-group">
            <label for="requirement">Requirement</label>
            <textarea class="form-control form-control-sm" id="requirement" rows="3" placeholder="Requirement"></textarea>
          </div>    
          <div class="form-group d-flex">
                  <div id="captcha1"></div>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Captcha"
                    id="cpatchaTextBox1"
                  />
                </div>
                <div class="form-group text-right">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
        </form>
      </div>
      </div>

    `;
  }
}

customElements.define("get-quotes", GetQuotes);

class GetCookie extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="modal fade" id="cookieModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">This website uses cookies</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class="icofont-close-line"></i></span>
        </button>
      </div>
      <div class="modal-body">
        <p>We use cookies to provide you with the best possible user experience. The cookies we collect are used to personalise content and ads, and allow us to track traffic for analysis.</p>
      </div>
      <div class="modal-footer">
        <a href="privacy-policy.html" class="btn primary_btn">Privacy Policy</a>
        <button type="button" class="btn btn-primary" onclick="acceptCookieConsent()">Accept</button>
      </div>
    </div>
  </div>
</div>

    `;
  }
}
customElements.define("cookies-set", GetCookie);

const listItems = document.querySelectorAll(".list_item");

// for (let i = 0; i < listItems.length; i++) {
//   const ele = listItems[i];
//   ele.addEventListener("mouseover", (e)=>{
//     // console.log(e, ele)
//     e.target.classList.add("active")
//   })
//   ele.addEventListener("mouseout", (e)=>{
//     e.target.classList.remove("active")
//   })
// }

const defaultItem = document.getElementById("default_item");
const logisticTransp = document.getElementById("logistic_transp");
const minign = document.getElementById("mining");
const constructionAndEngineering = document.getElementById(
  "Construction-and-Engineering"
);
const agriculture = document.getElementById("Agriculture");
const waterSupply = document.getElementById("Water-Supply");
const publicTransport = document.getElementById("Public-Transport");
const school = document.getElementById("School");
const oilandGas = document.getElementById("Oil-and-Gas");
async function imageChangeHandle(type) {
  if (type === "Logistics-and-Transportations") {
    logisticTransp.style.display = "block";
    minign.style.display = "none";
    constructionAndEngineering.style.display = "none";
    agriculture.style.display = "none";
    waterSupply.style.display = "none";
    publicTransport.style.display = "none";
    school.style.display = "none";
    oilandGas.style.display = "none";
    defaultItem.style.display = "none";

    return;
  }
  if (type === "Mining") {
    minign.style.display = "block";
    logisticTransp.style.display = "none";
    constructionAndEngineering.style.display = "none";
    agriculture.style.display = "none";
    waterSupply.style.display = "none";
    publicTransport.style.display = "none";
    school.style.display = "none";
    oilandGas.style.display = "none";
    defaultItem.style.display = "none";
    return;
  }
  if (type === "Construction-and-Engineering") {
    constructionAndEngineering.style.display = "block";
    minign.style.display = "none";
    logisticTransp.style.display = "none";
    agriculture.style.display = "none";
    waterSupply.style.display = "none";
    publicTransport.style.display = "none";
    school.style.display = "none";
    oilandGas.style.display = "none";
    defaultItem.style.display = "none";
    return;
  }
  if (type === "Agriculture") {
    agriculture.style.display = "block";
    constructionAndEngineering.style.display = "none";
    minign.style.display = "none";
    logisticTransp.style.display = "none";
    waterSupply.style.display = "none";
    publicTransport.style.display = "none";
    school.style.display = "none";
    oilandGas.style.display = "none";
    defaultItem.style.display = "none";
    return;
  }
  if (type === "Water-Supply") {
    waterSupply.style.display = "block";
    agriculture.style.display = "none";
    constructionAndEngineering.style.display = "none";
    minign.style.display = "none";
    logisticTransp.style.display = "none";
    publicTransport.style.display = "none";
    school.style.display = "none";
    oilandGas.style.display = "none";
    defaultItem.style.display = "none";
    return;
  }
  if (type === "Public-Transport") {
    publicTransport.style.display = "block";
    waterSupply.style.display = "none";
    agriculture.style.display = "none";
    constructionAndEngineering.style.display = "none";
    minign.style.display = "none";
    logisticTransp.style.display = "none";
    school.style.display = "none";
    oilandGas.style.display = "none";
    defaultItem.style.display = "none";
    return;
  }
  if (type === "School") {
    school.style.display = "block";
    publicTransport.style.display = "none";
    waterSupply.style.display = "none";
    agriculture.style.display = "none";
    constructionAndEngineering.style.display = "none";
    minign.style.display = "none";
    logisticTransp.style.display = "none";
    oilandGas.style.display = "none";
    defaultItem.style.display = "none";
    return;
  }
  if (type === "Oil-and-Gas") {
    oilandGas.style.display = "block";
    school.style.display = "none";
    publicTransport.style.display = "none";
    waterSupply.style.display = "none";
    agriculture.style.display = "none";
    constructionAndEngineering.style.display = "none";
    minign.style.display = "none";
    logisticTransp.style.display = "none";
    defaultItem.style.display = "none";
    return;
  }
}

function leaveHandle() {
  oilandGas.style.display = "none";
  school.style.display = "none";
  publicTransport.style.display = "none";
  waterSupply.style.display = "none";
  agriculture.style.display = "none";
  constructionAndEngineering.style.display = "none";
  minign.style.display = "none";
  logisticTransp.style.display = "none";
  defaultItem.style.display = "block";
}

$(document).ready(function () {
  const carousel1 = $("#empower-left-carousel");
  const carousel2 = $("#empower-right-carousel");
  var hoverItem = false;
  $("#empower-right-carousel").on("mouseenter", function () {
    hoverItem = true;
    carousel1.trigger("stop.owl.autoplay"); // Stop autoplay on hover
    carousel2.trigger("stop.owl.autoplay"); // Stop autoplay on hover
  });

  $("#empower-right-carousel").on("mouseleave", function () {
    hoverItem = false;
    carousel1.trigger("play.owl.autoplay"); // Resume autoplay on mouse leave
    carousel2.trigger("play.owl.autoplay"); // Resume autoplay on mouse leave
  });

  $("#empower-left-carousel").on("mouseenter", function () {
    hoverItem = true;
    carousel1.trigger("stop.owl.autoplay"); // Stop autoplay on hover
    carousel2.trigger("stop.owl.autoplay"); // Stop autoplay on hover
  });

  $("#empower-left-carousel").on("mouseleave", function () {
    hoverItem = false;
    carousel1.trigger("play.owl.autoplay"); // Resume autoplay on mouse leave
    carousel2.trigger("play.owl.autoplay"); // Resume autoplay on mouse leave
  });

  $(carousel1).owlCarousel({
    loop: true,
    autoplaySpeed: 3000,
    smartSpeed: 2000,
    mouseDrag: false,
    margin: 0,
    nav: true,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    autoplay: true,
    autoplayHoverPause: hoverItem,
  });
  $(carousel2).owlCarousel({
    loop: true,
    margin: 0,
    autoplaySpeed: 3000,
    smartSpeed: 2000,
    mouseDrag: false,
    nav: true,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    autoplay: true,
    autoplayHoverPause: hoverItem,
  });

  $("#next_c_btn").on("click", function () {
    carousel1.trigger("next.owl.carousel");
    carousel2.trigger("next.owl.carousel");
  });

  $("#prev_c_btn").on("click", function () {
    carousel1.trigger("prev.owl.carousel");
    carousel2.trigger("prev.owl.carousel");
  });

  $(".owl-dots .owl-dot").on("click", function () {
    var index = $(this).index();
    carousel1.trigger("to.owl.carousel", index);
    carousel2.trigger("to.owl.carousel", index);
  });
});

let i = 2;

$(document).ready(function () {
  var radius = 200;
  var fields = $(".itemDot");
  var container = $(".dotCircle");
  var width = container.width();
  radius = width / 2.5;

  var height = container.height();
  var angle = 0,
    step = (2 * Math.PI) / fields.length;
  fields.each(function () {
    var x = Math.round(
      width / 2 + radius * Math.cos(angle) - $(this).width() / 2
    );
    var y = Math.round(
      height / 2 + radius * Math.sin(angle) - $(this).height() / 2
    );
    $(this).css({
      left: x + "px",
      top: y + "px",
    });
    angle += step;
  });

  $(".itemDot").click(function () {
    var dataTab = $(this).data("tab");
    $(".itemDot").removeClass("active");
    $(this).addClass("active");
    $(".CirItem").removeClass("active");
    $(".CirItem" + dataTab).addClass("active");
    i = dataTab;

    $(".dotCircle").css({
      transform: "rotate(" + (360 - (i - 1) * 36) + "deg)",
      transition: "2s",
    });
    $(".itemDot").css({
      transform: "rotate(" + (i - 1) * 36 + "deg)",
      transition: "1s",
    });
  });

  setInterval(function () {
    var dataTab = $(".itemDot.active").data("tab");
    if (dataTab > 4 || i > 4) {
      dataTab = 1;
      i = 1;
    }
    $(".itemDot").removeClass("active");
    $('[data-tab="' + i + '"]').addClass("active");
    $(".CirItem").removeClass("active");
    $(".CirItem" + i).addClass("active");
    i++;

    $(".dotCircle").css({
      transform: "rotate(" + (360 - (i - 2) * 36) + "deg)",
      transition: "2s",
    });
    $(".itemDot").css({
      transform: "rotate(" + (i - 2) * 36 + "deg)",
      transition: "1s",
    });
  }, 5000);
});

var currentStep = 1;
var numSteps = 4;

function nextStep() {
  currentStep++;
  if (currentStep > numSteps) {
    currentStep = 1;
  }
  var stepper = document.getElementById("stepper1");
  var steps = stepper.getElementsByClassName("step");

  Array.from(steps).forEach((step, index) => {
    let stepNum = index + 1;
    if (stepNum === currentStep) {
      addClass(step, "active");
    } else {
      removeClass(step, "active");
    }
    if (stepNum < currentStep) {
      addClass(step, "done");
    } else {
      removeClass(step, "done");
    }
  });
}

function hasClass(elem, className) {
  return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}

function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += " " + className;
  }
}

function removeClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  }
}

// Auto-play functionality
setInterval(nextStep, 3000); // Change step every 3 seconds

document.addEventListener("DOMContentLoaded", function () {
  // Open Modal
  const openModalButtons = document.querySelectorAll(".openModalBtn");
  openModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = document.getElementById("joinWaitlistModal");
      modal.style.display = "flex"; // Show modal
      document.body.style.overflow = "hidden"; // Disable background scrolling
      document.body.classList.add("modal-open"); // Optional: Add a class for additional effects
    });
  });

  // Close Modal
  document.getElementById("closeModal").addEventListener("click", function () {
    const modal = document.getElementById("joinWaitlistModal");
    modal.style.display = "none"; // Hide modal
    document.body.style.overflow = ""; // Enable background scrolling
    document.body.classList.remove("modal-open"); // Remove modal class
  });
});

$(document).ready(function () {
  var isScrolling = false;

  // Click event for smooth scroll
  $(".ftrs-nav").click(function () {
    isScrolling = true; // Temporarily disable scroll event to avoid conflict
    const sectionId = $(this).attr("data-id");
    const section = $("#" + sectionId);

    // Smooth scroll to the section
    $("html, body").animate(
      {
        scrollTop: section.offset().top,
      },
      800,
      function () {
        isScrolling = false; // Re-enable the scroll event once the animation is done
      }
    );

    // Update active class on click
    $(".ftrs-nav").removeClass("activecls");
    $(this).addClass("activecls");
  });

  // Scroll event to update active class dynamically
  $(window).scroll(function () {
    if (isScrolling) return; // Prevent scroll event during click-triggered smooth scrolling

    $(".srlcrm").each(function () {
      const sectionTop = $(this).offset().top - $(window).scrollTop();
      const sectionHeight = $(this).outerHeight();
      const id = $(this).attr("id");

      // If the section is in view
      if (sectionTop >= -sectionHeight / 7 && sectionTop < sectionHeight / 7) {
        $(".ftrs-nav").removeClass("activecls");
        $('.ftrs-nav[data-id="' + id + '"]').addClass("activecls");
      }
    });
  });
});

// blog call from api

// URL of the WordPress REST API endpoint for retrieving posts
//  ?per_page=5  for pagination
const apiUrl = "https://watsoo.com/blog/wp-json/wp/v2/posts?per_page=5";
// const apiUrl = 'https://blog.watsoo.com/wp-json/wp/v2/posts';
const categoriesApiUrl = "https://watsoo.com/blog/wp-json/wp/v2/categories";

// <div class="post_box">
//               <img src="img/posts/post1.jpg" alt="post1" loading="lazy">
//               <p>IOT</p>
//               <a href="#">
//                 <h4>
//                   Transform Your Trucking Operations with Our IoT Trackers
//                   and Locks.
//                 </h4></a>
//             </div>

async function fetchBlogCategory() {
  try {
    const response = await fetch(categoriesApiUrl);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}

// Function to fetch and display blog posts
async function fetchBlogPosts() {
  try {
    const response = await fetch(apiUrl);
    const posts = await response.json();
    const categoryData = await fetchBlogCategory();
    const blogPostsContainer = document.getElementById("post-carousel");
    console.log(categoryData);
    // Loop through each post and create HTML elements to display them
    posts.forEach((post) => {
      console.log(post);
      const categoryName = categoryData?.find(
        (ele) => ele.id === post.categories[0]
      );
      const postElement = document.createElement("div");
      postElement.setAttribute("class", "item");
      postElement.innerHTML = `
            <div class="pstr_img">
              <div class="post_img">
              <img src="${
                post?.yoast_head_json?.og_image[0]?.url
              }" alt="post1" loading="lazy">
              </div>
              <div class="und_blog">
              <a href="${categoryName?.link}">
              <span>${categoryName?.name || "-"}</span>
              </a>
              <a href="${post.link}">
                <h5>${post.title.rendered}</h5>
              </a>
              <p>${post.excerpt.rendered}</p>
              </div>
            </div>
            `;
      console.log(blogPostsContainer, postElement);
      blogPostsContainer.appendChild(postElement);
    });
    $("#post-carousel").owlCarousel({
      loop: true,
      margin: 15,
      autoplay: true,
      nav: true,
      items: 1,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}

// Call the function to fetch and display blog posts
fetchBlogPosts();

// carousel start here

$(document).ready(function () {
  $(".client").owlCarousel({
    loop: true,
    items: 7,
    autoplay: true,
    margin: 25,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3,
        margin: 5,
      },
      600: { items: 7 },
    },
  });

  $(".testimo").owlCarousel({
    center: true,
    items: 2, // Number of visible items
    loop: true,
    dots: false,
    margin: 10,
    autoplay: true, // Set to true if autoplay is needed
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
    },
  });

});
