$(function () {
    // menganalisis
    var nav = $(".bg-putih");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      // kondisi
      if (scroll >= 50) {
        nav.removeClass("bg-dark").addClass("bg-primary bg-putih shadow-lg");
      } else {
        nav.removeClass("bg-merah bg-dark shadow-lg ").addClass("bg-priimary");
      }
    });
  });
  
  