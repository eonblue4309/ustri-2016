(function() {
  var siteHeader = document.querySelector(".site-header");
  var overlay = document.querySelector(".overlay");
  var menu = document.getElementById("menu");

  menu.addEventListener("click", function() {
    toggleClass(siteHeader, "site-header--open");
    toggleClass(overlay, "overlay--enabled");
    document.body.style.overflow = "hidden";
  });

  overlay.addEventListener("click", function() {
    removeClass(siteHeader, "site-header--open");
    removeClass(overlay, "overlay--enabled");
    document.body.style.overflow = "auto";
  });

  function toggleClass(el, className) {
      if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push(className);

      el.className = classes.join(' ');
    }
  }

  function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

}());
