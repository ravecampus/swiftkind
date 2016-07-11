$(".card").each(function(){
    var $mainButton = $(this).find(".main-button"),
    $closeButton = $(this).find(".close-button"),
    $buttonWrapper = $(this).find(".button-wrapper"),
    $ripple = $(this).find(".ripple"),
    $layer = $(this).find(".layered-content");

    $mainButton.on("click", function(){
        $ripple.addClass("rippling");
        $buttonWrapper.addClass("clicked").delay(1500).queue(function(){
            $layer.addClass("active");
        });
    });

    $closeButton.on("click", function(){
        $buttonWrapper.removeClass("clicked");
        $ripple.removeClass("rippling");
        $layer.removeClass("active");
    });
});
