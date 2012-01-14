
$(function() {
    if(!localStorage['tatezoraFontSize']) {
      localStorage['tatezoraFontSize'] = '16';
    }


    controllerHTML = '<div id="tatezora_control"> \
  <a href="#fontUp">+</a><a href="#fontNormal">0</a><a href="#fontDown">-</a> \
</div>'
  $(document.body).append($('<div>').html(controllerHTML).css({
        position: 'fixed',
        top: '8%',
        right: '10%',
        zIndex: '10'
      })
  ).css({
    fontSize: localStorage['tatezoraFontSize'] + 'px'
  });
  $('#tatezora_control a').click(function(e) {
    e.preventDefault();
    var button = e.target.getAttribute('href').substring(1);
    switch(button) {
    case 'fontUp':
      localStorage['tatezoraFontSize'] = (~~localStorage['tatezoraFontSize'] + 2).toString();
      break;
    case 'fontNormal':
      localStorage['tatezoraFontSize'] = '16';
      break;
    case 'fontDown':
      localStorage['tatezoraFontSize'] = (~~localStorage['tatezoraFontSize'] - 2).toString();
      break;
    }
    $(document.body).css({
      fontSize: localStorage['tatezoraFontSize'] + 'px'
    });
  });

});
