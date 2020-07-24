var number = 0;
var maxNumber = $(".quiz__item").length;
var $element = $(".quiz__item").find("input, select, textarea");
var btnPrev = $(".quiz__btn--prev");
var btnNext = $('.quiz__btn--next');
var btnSemifinal = $('.quiz__semifinal-btn');
var isValid;
var dataBlock;
var activeSlide = [];

for (var i = 0; i < maxNumber; i++) {
  activeSlide[i] = false;
}

$(".test-num-current").text(number + 1);
$(".test-num-all").text(maxNumber);

$element.on('change input', function (e) {
  var value = $(this).val().trim();
  isValid = value !== "";
  btnActive(!isValid);
});

function btnActive(isValid) {

  if (number === 0) {
    btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  } else {
    btnPrev.prop('disabled', false);
    if (activeSlide[number] === true || isValid === false) {
      btnNext.prop('disabled', false);
    } else {
      btnNext.prop('disabled', true);
    }
  }

  if (number === maxNumber - 2) {
/*     btnSemifinal.prop('disabled', true); */
    console.log(number);
    console.log(!isValid);

    btnSemifinal.prop('disabled', true);
    if (activeSlide[number] || !isValid) {
      btnSemifinal.prop('disabled', false);
    } else {
      btnSemifinal.prop('disabled', true);
    }
  }
}

// sidebar

function progress(num) {
  $('.quiz__progress-item').eq(num).addClass('quiz__progress-item--active');
}
progress(0);

// btn
function btnClick() {
  btnPrev.on('click', function (event) {
    event.preventDefault();
    --number;
    $(".quiz__item").hide();
    $(".quiz__item").eq(number).fadeIn();
    btnActive(!isValid);
/*   if (number === maxNumber - 2) {
    btnNext.show();
    btnPrev.show();
  } */

    if (number === 0) {
      btnPrev.hide();
    }
    progress(number);

    animateTop();
  });


  btnNext.on('click', function (event) {
    event.preventDefault();
    activeSlide[number] = true;
    ++number;
    $(".quiz__item").hide();
    $(".quiz__item").eq(number).fadeIn(1000);
    btnActive(!isValid);

    if (activeSlide[number] === true) {
      btnNext.prop('disabled', false);
    } else {
      btnNext.prop('disabled', true);
    }

    if (number > 0) {
      btnPrev.show();
    }

    if (number === maxNumber - 2) {
      btnNext.hide();
      btnPrev.hide();
    }
    progress(number);

    animateTop();
  });

  btnSemifinal.on('click', function (event) {
    event.preventDefault();
    activeSlide[number] = true;
    ++number;
    $(".quiz__item").hide();
    $(".quiz__item").eq(number).fadeIn(1000);
    btnActive(!isValid);

    if (activeSlide[number] === true) {
      btnSemifinal.prop('disabled', false);
    } else {
      btnSemifinal.prop('disabled', true);
    }
  })
}
btnClick();

function animateTop(eq) {
  var elem = $('.quiz__wrapper');
  var top = elem.offset().top - 15;
  $('body,html').animate({ scrollTop: top }, 400);
}


$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined;
};



function ajaxfunct(selector) {
  $(selector).submit(function (event) {

    event.preventDefault();

    var action = "assets/mailer/smart.php";
    var msg = $(this).serialize();
    var formThis = $(this);
    formThis.find('.btn').attr({ "disabled": "true" });
    // console.log(msg);
    $.ajax({
      type: "POST",
      url: action,
      data: msg,
      success: function (data) {
        if (formThis.find('.test-val').val() === "test") {

          $(".overlay").fadeOut();
          $("#modal-thanks").fadeIn();
          $('html').addClass('stop');
          formThis.find('input , button').attr({
            'disabled': 'disabled',
          });
          $('.quiz__btn').attr({
            'disabled': 'disabled',
          });
        } else {
          $(".overlay").fadeOut();
          $('html').addClass('stop');
          $("#modal-thanks").fadeIn();
          formThis.find('.btn').removeAttr('disabled');
        }

        $('form').trigger('reset');


      },
      error: function (xhr, str) {

        alert('Произошла ошибка, попробуйте немного позже');
      }
    });
  });
}

ajaxfunct('form');