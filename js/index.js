$(".action").click(function(){
  $(".content1").addClass("inactive").delay(200).fadeOut(0);
  $(this).addClass("active");
  $(".content2").fadeIn(0).addClass("active");
});

$(".close").click(function(){
  $(".content2").removeClass("active").delay(300).fadeOut(0);
  $(".action").removeClass("active");
  $(".content1").fadeIn(0).removeClass("inactive");
});