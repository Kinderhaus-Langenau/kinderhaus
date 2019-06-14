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

  // Text nach 2 Absätzen zusammenklappen
  $('.content.content--fold h1').each(function() {
    var contentElements = $(this).nextUntil('h1');

    var cuttingPoint = function() {
      var cuttingPoint = 0;
      var ignored = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'B', 'I'];

      contentElements.each(function(index, element) {
        if(contentElements.length < 2) {
          cuttingPoint = 1;
          return false;
        }

        if(ignored.indexOf(contentElements[index + 1].tagName) > -1) {
          return true;
        }

        if(index >= 2) {
          cuttingPoint = index;
          return false;
        }
      });

      return cuttingPoint;
    }.bind(contentElements)();

    contentElements
      .slice(cuttingPoint)
      .wrapAll('<div class="hideable-text"></div>');
  });

  $('.hideable-text')
    .before('<div class="read-more"><span class="read-more__arrow"></span> Mehr lesen</div>');

  $('.read-more').click(function() {
    $(this)
      .next('.hideable-text')
      .contents()
      .unwrap();

    $(this).hide();
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
