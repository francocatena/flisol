jQuery(function($) {
  $(document).on('click', '[data-js]', function(event) {
    eval($(this).data('js'))
    event.preventDefault(event)
  })

  $(document).on('click', '[data-js-container]', function(event) {
    eval($($(this).data('js-container')).text())
    event.preventDefault(event)
  })
})
