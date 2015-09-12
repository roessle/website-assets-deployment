(function() {
  $(document).ready(function() {
    $('.navigation-colors').before('<div class=navigation-colors-bar></div>');
    return $('.logo').prepend('<a href="/">' + '<div class=logo-roessle>' + '<div class=logo-hotel-gasthof>Hotel Gasthof</div>' + '<div class=logo-stamp-roessle></div>' + '</div>' + '</a>');
  });

}).call(this);
