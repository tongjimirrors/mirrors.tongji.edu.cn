import { AutoloadPage } from '../../misc/PageLoader';
import { isBelow } from '../../utils/mediaQuery';
import { slideUp, slideDown } from '../../utils/slide';
import constants from '../../constants';

const footerPage = new AutoloadPage(() => {
  if ($('.footer').length === 0) {
    return;
  }
  $('.footer__category.expandable > h1').click(async ev => {
    if (!isBelow(constants.MOBILE_CUTOFF)) {
      return;
    }
    const $category = $(ev.currentTarget).closest('.footer__category');
    const $list = $category.find('.footer__category__expander');
    if ($category.hasClass('animating')) {
      return;
    }
    $category.addClass('animating');
    if ($category.hasClass('expanded')) {
      $category.removeClass('expanded');
      await slideUp($list, 300, { opacity: 1 }, { opacity: 0 });
    } else {
      $category.addClass('expanded');
      await slideDown($list, 300, { opacity: 0 }, { opacity: 1 });
    }
    $category.removeClass('animating');
  });
});

export default footerPage;
