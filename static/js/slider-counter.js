function roll()
{
  var slider = $('.slider > .widget');
    slider.removeClass('do-slide');
  
  $('.slider > .controls > .bottom > label').html(slider.find('> li').first().attr('num'));
  
  window.sliderTimeout = setTimeout(function()
  {
    slider.addClass('do-slide');
    window.sliderTimeout = setTimeout(function()
    {
      slider.find('> li').first().appendTo(slider);
      roll();
    }, 2500);
  }, 5000);
}

$(function()
{
  $('.slider > .widget > li').each(function()
  {
    $(this).attr('num', $(this).index() + 1);
  });
  
  $('.slider a').click(function()
  {
    
    return false;
  });
  
  roll();
});