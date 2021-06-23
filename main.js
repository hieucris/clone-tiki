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

// time countdown sale

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


// product__tab

const tab__item = document.querySelectorAll('.header__tab--item');
const tab__product = document.querySelectorAll('.product__content--tab')
tab__item.forEach((item,index) => {
  item.onclick = function () {
    document.querySelector('.header__tab--item.active').classList.remove('active')
    this.classList.add('active')

    const product = tab__product[index]
    document.querySelector('.product__content--tab.active').classList.remove('active')
    product.classList.add('active')

  }
})

// scroll fix search

window.onscroll = function() {myFunction()};

var product__header = document.querySelector('.product__suggest--header');
var sticky = product__header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky - 600) {
    product__header.classList.add("sticky")
  } else {
    product__header.classList.remove("sticky");
  }
}


// product__suggest

$(".product__item1").slice(0, 15).show()
$(".btn1").on("click", function(){
    $(".product__item1:hidden").slice(0, 5).slideDown()
    if ($(".product__item1:hidden").length == 0) {
        $(".btn1").fadeOut('slow')
    }
})

$(".product__item2").slice(0, 10).show()
$(".btn2").on("click", function(){
    $(".product__item2:hidden").slice(0, 5).slideDown()
    if ($(".product__item2:hidden").length == 0) {
        $(".btn2").fadeOut('slow')
    }
})

$(".product__item3").slice(0, 5).show()
$(".btn3").on("click", function(){
    $(".product__item3:hidden").slice(0, 5).slideDown()
    if ($(".product__item3:hidden").length == 0) {
        $(".btn3").fadeOut('slow')
    }
})

$(".product__item4").slice(0, 10).show()
$(".btn4").on("click", function(){
    $(".product__item4:hidden").slice(0, 5).slideDown()
    if ($(".product__item4:hidden").length == 0) {
        $(".btn4").fadeOut('slow')
    }
})

$(".product__item5").slice(0, 5).show()
$(".btn5").on("click", function(){
    $(".product__item5:hidden").slice(0, 5).slideDown()
    if ($(".product__item5:hidden").length == 0) {
        $(".btn5").fadeOut('slow')
    }
})





