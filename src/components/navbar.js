const navbar = $('.navbar-nav')
const active = 'active';

navbar.on('click', function(e) {
  const $nav = $(e.target).parent();

  if (!$nav.hasClass(active)) {
    $nav.siblings().removeClass(active);
    $nav.addClass(active);
  }
})