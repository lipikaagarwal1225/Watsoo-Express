var flag, e_trigger, single_Sec;
var getTop = $(".crm-hub-cntsec").offset().top;
var hidnav = $(".crm-hub-sell").offset().top - $(window).scrollTop();
var windoutHit = $(window).outerHeight(true);
var setTesthit = $(".crm-hub-testimo").outerHeight();
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $(".crmhub-mobnav").click(function () {
    $(".hub-moblist").slideToggle(300);
    $("body").toggleClass("hub_vH");
    $(".hub-dwnicn").toggleClass("icon-rotat");
  });
  $(".sel-img").find("img").attr("alt", "Mobile CRM app for SFA - Zoho CRM");
  var a = window.location.href;
  var b = a.split("&");
  var d = b[1];
  var f = false;
  var e = false;
  $(".ftrs-nav").each(function () {
    var g = $(this).attr("data-id");
    if (d.indexOf(g) != -1) {
      f = true;
    }
  });
  if (a.indexOf("srcPlan=NewCRM") != -1) {
    e = true;
  }
  if (d != null && e != true) {
    $(".zc_lazy").each(function () {
      var g = $(this);
      g.attr("data", g.attr("data-src")).removeAttr("data-src");
    });
    setTimeout(function () {
      var g = $("#" + d).offset().top - 100;
      $("html, body").animate({ scrollTop: g }, 500);
    }, 1000);
  }
  if ($(window).outerWidth() <= 767) {
    var c = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(c)) {
      $(".g-play").show();
      $(".app-store").hide();
    } else {
      if (/iPad|iPhone|iPod/.test(c) && !window.MSStream) {
        $(".g-play").hide();
        $(".app-store").show();
      } else {
        $(".g-play,.app-store").hide();
      }
    }
  }
  if ($(window).outerWidth() > 767) {
    $(".hub-testi-img").css("height", setTesthit);
  }
  setTimeout(function () {
    if ($(window).scrollTop() < $(".hubfrst").offset().top) {
      $(".crm-featur-nav li:nth-child(2)").addClass("activecls");
    }
    if ($(window).outerWidth() > 1440) {
      setBg();
      $(".hubfrst").find(".media-anim").addClass("img-animate");
    }
  }, 1000);
  fst_lazy_imgset();
  $(".crm-featur-nav").hover(function () {
    $(".zc_lazy").each(function () {
      var g = $(this);
      g.attr("data", g.attr("data-src")).removeAttr("data-src");
      g.find("img")
        .attr("src", g.find("img").attr("data-src"))
        .removeAttr("data-src")
        .end()
        .removeClass("zc_lazy");
    });
  });
});
window.onload = function () {
  setTimeout(function () {
    $(".crm-hub-main,.crmhub-mobnav,.hub-cmn-sprit").addClass("bg_lazy_loaded");
  }, 300);
  if ($(window).outerWidth() > 1440) {
    setTimeout(function () {
      setBg();
    }, 1000);
  }
};
$(window).resize(function () {
  if ($(window).outerWidth() > 1440) {
    setTimeout(function () {
      setBg();
    }, 1000);
  }
});
var tp_val;
var set_flg = true;
$(window).scroll(function () {
  var d = $(window).scrollTop();
  fst_lazy_imgset();
  if (set_flg == true) {
    setTimeout(function () {
      var e = $("#Clickto").outerHeight(true) + 20;
      $(".inner-container").css("height", e);
    }, 1500);
    set_flg = false;
  }
  var b = $(".hub-last").offset().top;
  var a = $(".hub-last").position().top - 115;
  if (
    d > getTop &&
    !$(".crm-featur-nav .ftrs-nav:last-child").hasClass("activecls") &&
    d < b
  ) {
    $(".crm-featur-nav").css({ position: "fixed", top: "0" });
  } else {
    if ($(".crm-featur-nav .ftrs-nav:last-child").hasClass("activecls")) {
      $(".crm-featur-nav").css({ position: "absolute", top: a });
    } else {
      $(".crm-featur-nav").css({ position: "absolute", top: "0" });
    }
  }
  if ($(window).outerWidth() <= 1080) {
    if (
      d > $(".hubfrst").offset().top - 80 &&
      d < $("#hub-intsec").offset().top
    ) {
      $(".crmhub-mobnav").show();
    } else {
      $(".crmhub-mobnav,.hub-moblist").hide();
      $(".icon-rotat").removeClass("icon-rotat");
    }
  }
  if (d > $("#hub-intsec").offset().top) {
    $(".strt-dwn").show();
  } else {
    $(".strt-dwn").hide();
  }
  var c = $(window).scrollTop() + $(window).outerHeight();
  $(".crm-hub-imgsec")
    .find(".scl-img")
    .each(function (e, f) {
      if ($(this).offset().top + 200 < c) {
        $(this).addClass("active");
      }
    });
  tp_val = d + $(".crm-featur-nav").outerHeight() + 60;
  if (d < $(".hubfrst").offset().top) {
    $(".crm-featur-nav li:nth-child(2)").addClass("activecls");
  }
  if ($(window).outerWidth() > 1023) {
    var c = $(window).scrollTop() + $(window).outerHeight();
    $(".crm-hub-container")
      .find(".media-anim")
      .each(function (e, f) {
        if ($(this).offset().top - 200 < c) {
          $(this).addClass("img-animate");
        }
      });
    $(".anim-lft").each(function (e, f) {
      if ($(this).offset().top + 200 < c) {
        $(this).addClass("mov-left");
      }
    });
  }
});
function go_Section(b, a) {
  a.preventDefault();
  var c = $(b).attr("data-id");
  $("body,html")
    .stop()
    .animate(
      { scrollTop: $("#" + c).offset().top - 85 },
      700,
      "swing",
      function () {
        $(document).on("scroll", onScroll);
      }
    );
  if ($(".crm-featur-nav .ftrs-nav:last-child").hasClass("activecls")) {
    $(".rem").removeClass("activecls");
  }
}
function onScroll(a) {
  a.preventDefault();
  var b = $(document).scrollTop();
  $(".ftrs-nav").each(function () {
    var d = $(this).attr("data-id");
    var c = $("#" + d).offset().top;
    if (c <= b + 115 && c + $("#" + d).outerHeight() > b) {
      if ($(window).outerWidth() < 1080) {
        $(".activecls").removeClass("activecls");
      }
      $(this).addClass("activecls");
    } else {
      $(this).removeClass("activecls");
    }
  });
  if ($(".crm-featur-nav .ftrs-nav:last-child").hasClass("activecls")) {
    $(".rem").removeClass("activecls");
  }
}
function topSec() {
  $("html, body").animate({ scrollTop: 0 }, 500);
}
function fst_lazy_imgset() {
  var b = $(window).outerHeight(),
    c;
  var d = $(".hubfrst").offset().top;
  var a = $(window).outerHeight() * 1.5;
  srl_top = $(window).scrollTop();
  if (d < b) {
    $(".hubfrst .zc_lazy").each(function () {
      c = $(this);
      single_Sec = parseInt(c.offset().top);
      if (single_Sec < b) {
        layloading.set_original_images(c);
      }
    });
  } else {
    layloading.scroll_lazy_imgset();
  }
}
function setBg() {
  var a = $(".crm-hub-inte").offset().left;
  var c = $(".crm-hub-sell").offset().left;
  var b = $(window).outerWidth();
  $(".crm-hub-integr-bg").css({ width: b, left: -a });
  $(".crm-hub-selbg").css({ width: b - c });
}
