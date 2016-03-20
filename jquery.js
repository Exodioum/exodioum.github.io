$(function() {
  $(".gg_Slider ._content ._item").each(function () {
    var bGround = $(this).data("bg");
    $(this).css("background-image", "url("+ bGround +"), linear-gradient(to bottom right, #2b2b2b 30%, transparent 100%)");
  });

  setInterval(function () {
    $(".gg_Slider_Nav > span.down").click();
  }, 5000);

  $(".gg_Slider ._content ._item").each(function() {
    $(this).clone().appendTo(".gg_Slider ._block ._items").children().wrapAll("<span></span>");
  });

  $(".gg_Slider_Nav > span.up").click(function() {
    if ($(".gg_Slider ._content ._item.active").is(":first-child")) {

      $(".gg_Slider ._content ._item.active").removeClass("active");
      $(".gg_Slider ._content ._item:last-child").addClass("active");

      $(".gg_Slider ._block ._items > ._item.active").removeClass("active");
      $(".gg_Slider ._block ._items > ._item:last-child").addClass("active");

      $(".gg_Slider ._block ._items").animate({
        scrollTop: $(".gg_Slider ._block ._items > ._item:first-child").offset().top
      }, 500);
    } else {
      $(".gg_Slider ._content ._item.active").removeClass("active").prev("._item").addClass("active");
      $(".gg_Slider ._block ._items > ._item.active").removeClass("active").prev("._item").addClass("active");

      $(".gg_Slider ._block ._items").animate({
        scrollTop: $(".gg_Slider ._block ._items").scrollTop() - 100
      }, 500);
    }
  });

  $(".gg_Slider_Nav > span.down").click(function() {
    if ($(".gg_Slider ._content ._item.active").is(":last-child")) {

      $(".gg_Slider ._content ._item.active").removeClass("active");
      $(".gg_Slider ._content ._item:first-child").addClass("active");

      $(".gg_Slider ._block ._items > ._item.active").removeClass("active");
      $(".gg_Slider ._block ._items > ._item:first-child").addClass("active");

      $(".gg_Slider ._block ._items").animate({
        scrollTop: 0
      }, 500);
    } else {
      $(".gg_Slider ._content ._item.active").removeClass("active").next("._item").addClass("active");
      $(".gg_Slider ._block ._items > ._item.active").removeClass("active").next("._item").addClass("active");

      $(".gg_Slider ._block ._items").animate({
        scrollTop: $(".gg_Slider ._block ._items").scrollTop() + 100
      }, 500);
    }
  });
});
