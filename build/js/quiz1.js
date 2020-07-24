var number = 0;
var maxNumber = $(".quiz__item").length;
var $element = $(".quiz__item").find("input, select, textarea");
var btnPrev = $(".quiz__btn--prev");
var btnNext = $('.quiz__btn--next');
var isValid;
var dataBlock;
var activeSlide = [];

for (var i = 0; i < maxNumber; i++) {
  activeSlide[i] = false;
}

// $(".test-num-current").text(number + 1);
// $(".test-num-all").text( 5);
var w41 = false;
var w42 = false;
var w43 = false;
$element.on('change, input', function (e) {


  if ($(this).attr('name') === 'qw4_1' || $(this).attr('name') === 'qw4_2' || $(this).attr('name') === 'qw4_3') {
    $('input[name="qw4_1"]').each(function (index, el) {
      if ($(this).prop('checked')) {
        w41 = true;
      }
    });
    $('input[name="qw4_2"]').each(function (index, el) {
      if ($(this).prop('checked')) {
        w42 = true;
      }
    });
    $('input[name="qw4_3"]').each(function (index, el) {
      if ($(this).prop('checked')) {
        w43 = true;
      }
    });

    if (w41 && w42 && w43) {
      var value = $(this).val().trim();

      isValid = value !== "";
      btnActive(!isValid);
    }
  } else {
    var value = $(this).val().trim();

    isValid = value !== "";
    btnActive(!isValid);
  }
});

function btnActive(isValid) {
  if (number === 0) {
    btnPrev.prop('disabled', 'false');
    btnPrev.hide();
    btnNext.prop('disabled', isValid);
    $('.btn-lbs').hide();
  } else {
    btnPrev.fadeIn();
    btnPrev.prop('disabled', false);
    $('.btn-lbs').hide();
    if (activeSlide[number] === true || isValid === false) {
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    } else {
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }

  }

}
// btnPrev.hide();

var lbs = false;
$('.btn-lbs').on('click', function (event) {
  event.preventDefault();
  $(this).addClass('act');

  if (!lbs) {
    setTimeout(function () {
      $('.btn-lbs').removeClass('act');
      lbs = false;
    }, 3000);
    lbs = true;
  }

});

$("input[name='qw-e']").on('change, input', function () {

  if ($(this).hasClass('vit')) {
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в Viber');
    $('.eml').hide();
  } else if ($(this).hasClass('wat')) {
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в WhatsApp');
    $('.eml').hide();
  } else if ($(this).hasClass('teg')) {
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в Telegram');
    $('.eml').hide();
  } else if ($(this).hasClass('phn')) {
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон ');
    $('.eml').fadeIn();
  }

});
// sidebar

function progress(num) {
  $('.progress__item').eq(num).addClass('active');
}
progress(0);

// btn
var q3ch = false;
function btnLoop() {
  $(".test-item").each(function (index, el) {
    if (!$(this).is(":hidden")) {
      $(this).find("input, select, textarea").each(function (index, el) {
        // if($(this).val() !== ''){

        // }
        if ($(this).attr('type') === 'radio' || $(this).attr('type') === 'checkbox') {
          if ($(this).prop('checked')) {
            var value = $(this).val().trim();
            // console.log(value);
            isValid = value !== "";
            btnActive(!isValid);
          }
        } else {
          var value = $(this).val().trim();
          // console.log(value);
          if ($(this).attr('name') == 'qw3' && !q3ch || $(this).attr('name') == 'my_range' && !q3ch || $(this).attr('name') == 'my_range2' && !q3ch) {
            isValid = false;
          } else {
            isValid = value !== "";
          }
          btnActive(!isValid);
        }

      });
    }

  });
}

function btnClick() {

  btnPrev.on('click', function (event) {
    event.preventDefault();
    --number;

    $('.test-item').hide();
    $('.test-item').eq(number).fadeIn(1000);
    $(".test__right-text-item").hide();
    $(".test__right-text-item").eq(number).fadeIn(500);
    btnActive(!isValid);


    animateTop();
  });

  btnNext.on('click', function (event) {
    event.preventDefault();
    activeSlide[number] = true;
    ++number;
    //     ++number2;
    btnActive(!isValid);

    if (activeSlide[number] === true) {
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    } else {
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }

    if (number === maxNumber - 2) {
      $(".test__btns").hide();

      $(".test-item, .test__cont").hide();
      $(".test__content").hide();
      $(".test-load").fadeIn(600);

      setTimeout(function () {
        $(".test-load").hide();
        $(".test__right-title, .test__right-dog").hide();
        $(".test__content").show();
        $(".test__quests").show();
        $(".ph-end").show();
        $(".text-end-rh").show();
        $(".test__cont").show().addClass('end');
        $(".test-item").eq(number + 1).fadeIn(1000);
      }, 4000);
    } else {
      $(".test-item").hide();
      $(".test-item").eq(number).fadeIn(1000);
    }
    btnLoop();


    progress(number);

    animateTop();

    $(".test__right-text-item").hide();
    $(".test__right-text-item").eq(number).fadeIn(700);
    //  btnLoop();
  });


}
btnClick();

function animateTop(eq) {
  var elem = $('.test-scroll-js2');
  var top = elem.offset().top - 15;

  $('body,html').animate({ scrollTop: top }, 400);
}


$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined;
};





var nForm = false;
$(function () {
  'use strict';
  var action = $('.ajax-url').val();
  $('form').on('submit', function (e) {
    e.preventDefault();
    var formThis = $(this);
    var fd = new FormData(this);
    var dopT3 = $('.ajax-page').val();
    formThis.find('.btn').attr({
      'disabled': 'true'
    });
    fd.append('url1', dopT3);



    if (formThis.find('input[name="formname"]').val() === "price") {
      var link = document.createElement('a');
      link.setAttribute('href', $('.price-pdf').val());
      link.setAttribute('target', "_blank");
      link.setAttribute('download', '');

      if (navigator.userAgent.indexOf('Mac') > 0) {
        window.location = $('.price-pdf').val();
      } else {
        simulate(link, "click");
      }

      $('html').addClass('stop');
      $(".overlay").fadeOut();
      $("#modal-load").fadeIn();
      formThis.find('.btn').removeAttr('disabled');

    } else if (formThis.find('input[name="formname"]').val() === "pdf") {
      var link = document.createElement('a');
      link.setAttribute('href', $('.pdf-pdf').val());
      link.setAttribute('target', "_blank");
      link.setAttribute('download', '');

      if (navigator.userAgent.indexOf('Mac') > 0) {
        window.location = $('.pdf-pdf').val();
      } else {
        simulate(link, "click");
      }

      $('html').addClass('stop');
      $(".overlay").fadeOut();
      $("#modal-load").fadeIn();
      formThis.find('.btn').removeAttr('disabled');

    } else if (formThis.find('input[name="formname"]').val() === "test") {

      if ($('.inp-enp-ph').val() == "") {
        alert('Введите номер телефона!');
        formThis.find('.btn').removeAttr('disabled');
        return;
      }
      formThis.find('input').attr({
        'disabled': 'true',
      });
      formThis.find('button').attr({
        'disabled': 'true',
      });

      //$(".overlay").fadeOut();
      // $('html').addClass('stop');
      //$("#modal-insta").fadeIn();
    } else if (formThis.hasClass('js-tab-elem')) {
    } else {
      //$(".overlay").fadeOut();
      //$('html').addClass('stop');
      //$("#modal-insta").fadeIn();
      formThis.find('.btn').removeAttr('disabled');
    }


    $('form').trigger('reset');


    $.ajax({
      url: action,
      type: 'POST',
      contentType: false,
      processData: false,
      data: fd,
      success: function (msg) {

      },

    });
  });
});




// ---------------------

function simulate(element, eventName) {
  var options = extend(defaultOptions, arguments[2] || {});
  var oEvent, eventType = null;

  for (var name in eventMatchers) {
    if (eventMatchers[name].test(eventName)) { eventType = name; break; }
  }

  if (!eventType)
    throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

  if (document.createEvent) {
    oEvent = document.createEvent(eventType);
    if (eventType == 'HTMLEvents') {
      oEvent.initEvent(eventName, options.bubbles, options.cancelable);
    }
    else {
      oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
        options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
        options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
    }
    element.dispatchEvent(oEvent);
  }
  else {
    options.clientX = options.pointerX;
    options.clientY = options.pointerY;
    var evt = document.createEventObject();
    oEvent = extend(evt, options);
    element.fireEvent('on' + eventName, oEvent);
  }
  return element;
}

function extend(destination, source) {
  for (var property in source)
    destination[property] = source[property];
  return destination;
}

var eventMatchers = {
  'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
  'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
  pointerX: 0,
  pointerY: 0,
  button: 0,
  ctrlKey: false,
  altKey: false,
  shiftKey: false,
  metaKey: false,
  bubbles: true,
  cancelable: true
}



/*
var cookiesTest2 = get_cookie ( "test2" );
  if(cookiesTest2 !== '' && cookiesTest2 !== null){
    // return false;
  }else{
   var closeMod = false;
   $(document).mouseleave(function(event) {
       event = event || window.event;
       if (event.clientY < 0 || event.clientY < 3) {
           if (!closeMod) {
            console.log(cookiesTest2);
               $('#modal-stop').fadeIn();
               $('html').addClass('stop');
               closeMod = true;
               var date2 = new Date();
               date2.setDate(date2.getDate() + 7);
              date2 = date2.toUTCString();
              document.cookie = "test2=1;expires=" + date2;
           }

       }
   });
  
  }
  */




function get_cookie(cookie_name) {
  var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

  if (results)
    return (unescape(results[2]));
  else
    return null;
}



$(".js-range-slider").ionRangeSlider({
  min: 1,
  max: 300,
  from: 56,
  onStart: function (data) {
    $('#qw3inp').val($(".js-range-slider").prop("value"));
  },
});
var my_range = $(".js-range-slider");

my_range.on("change input", function () {
  var $inp = $(this);
  var from2 = $inp.data("from");
  $('#qw3inp').val(from2);
  q3ch = true;
});

var my_range_instance = my_range.data("ionRangeSlider");
$('#qw3inp').on('change input', function () {
  var _val = $(this).val();
  my_range_instance.update({
    from: _val,

  });
  q3ch = true;
});


$(".js-range-slider2").ionRangeSlider({
  min: 1,
  max: 700,
  from: 250,
  onStart: function (data) {
    $('#qw3inp2').val($(".js-range-slider2").prop("value"));
  },
});
var my_range = $(".js-range-slider2");

my_range.on("change input", function () {
  var $inp = $(this);
  var from2 = $inp.data("from");
  $('#qw3inp2').val(from2);
  q3ch = true;

});

var my_range_instance = my_range.data("ionRangeSlider");
$('#qw3inp2').on('change input', function () {
  var _val = $(this).val();
  my_range_instance.update({
    from: _val,

  });
  q3ch = true;
});




