$('.popup-form_input, .popup-form_textarea').on('input', function() { 
  if ($(this).val().replace(' ', '') != '') {
    $(this).addClass('_active')
  } else {
    $(this).removeClass('_active')
  }
});

$('.popup_close').click(function (e) {
  e.preventDefault()

  $.fancybox.close()
})





