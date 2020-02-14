$(document).ready(function() {
  // Größerer Abstand zwischen Hauptmenü und Content, wenn Submenü offen ist
  if($('.page-navigation__sub-list:visible').length > 0)
    $('.content__wrapper').addClass('margin-top__large');

  // Mobile Menu setup
  var $inactiveSubLists = $('.mobile-menu li:not(.active) .page-navigation__sub-list');
  $inactiveSubLists.each(function(idx, element) {
    closeSubMenu($(element));
  });

  // Mobile Pagenavigation dropdown
  $('.mobile-menu .page-navigation__link').click(function(event) {
    event.stopPropagation();
  });

  $('.mobile-menu li').click(function(event) {
    var $subList = $('.page-navigation__sub-list', this);

    if($subList.hasClass('closed')) {
      openSubMenu($subList);
    } else {
      closeSubMenu($subList);
    }
  });

  // Functions
  function closeSubMenu($target) {
    typecheckJqueryObject($target);

    $target.toggleClass('closed', true);

    $target.siblings('.page-navigation__dropdown-icon')
      .removeClass('fa-caret-down')
      .addClass('fa-caret-left');
  }

  function openSubMenu($target) {
    typecheckJqueryObject($target);

    $target.toggleClass('closed', false);

    $target.siblings('.page-navigation__dropdown-icon')
      .removeClass('fa-caret-left')
      .addClass('fa-caret-down');
  }

  function typecheckJqueryObject(obj) {
    if(!(obj instanceof $))
      throw new TypeError("Argument ist kein jQuery-Objekt.");
  }
});
