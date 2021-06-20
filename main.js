$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: true,
    customPaging: function (slick, index) {
      return "";
    },
    nextArrow: $(".btnSlider-next"),
    prevArrow: $(".btnSlider-prev"),
  });

  $('.list__deal').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: $(".btnDeal-next"),
    prevArrow: $(".btnDeal-prev"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

});

var upgradeTime = 18000;
var seconds = upgradeTime;
function timer() {
  var days = Math.floor(seconds / 24 / 60 / 60);
  var hoursLeft = Math.floor(seconds - days * 86400);
  var hours = Math.floor(hoursLeft / 3600);
  var minutesLeft = Math.floor(hoursLeft - hours * 3600);
  var minutes = Math.floor(minutesLeft / 60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  document.getElementById("countdown").innerHTML =
  `<span>${pad(hours)}</span>` + ":" + `<span>${pad(minutes)}</span>` + ":" + `<span>${pad(remainingSeconds)}</span>` ;
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval("timer()", 1000);

