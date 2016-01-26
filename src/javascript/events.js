// TODO: Yeah, this needs to be refactored like crazy. I want to eventually remove jquery - and bootstrap too
var $siteHeader = $(".site-header");
var $body = $("body");
var $overlay = $(".overlay");


$("[data-menu]").on("click", function() {
  $siteHeader.toggleClass("site-header--open");
  $body.css( { "overflow": "hidden" } );

  $overlay.toggleClass("overlay--enabled")
    .one("click", function() {
      $siteHeader.removeClass("site-header--open");
      $body.css( { "overflow": "auto" } );
      $overlay.removeClass("overlay--enabled")
    });
});
