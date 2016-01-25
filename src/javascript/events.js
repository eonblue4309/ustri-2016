$("[data-menu]").on("click", function() {
  $(".site-header").toggleClass("site-header--open");
  $("body").css( { "overflow": "hidden" } );
  $(".overlay")
    .toggleClass("overlay--enabled")
    .one("click", function() {
      $(".site-header").removeClass("site-header--open");
      $("body").css( { "overflow": "auto" } );
      $(".overlay").removeClass("overlay--enabled")
    });
});
