import { AutoloadPage } from '../../misc/PageLoader';

import Slideout from 'slideout';

const slideoutPage = new AutoloadPage(() => {
  if ($('.nav').length === 0) {
    return;
  }
  const slideout = new Slideout({
    menu: $('#slideout-menu')[0],
    panel: $('#slideout-panel')[0],
    padding: 200,
  });
  [['beforeopen', 'add'], ['beforeclose', 'remove']].forEach(([event, action]) => {
    slideout.on(event, () => $('.nav__hamburger .hamburger')[`${action}Class`]('is-active'));
  });
  $('.nav__hamburger').click(() => slideout.toggle());
});

export default slideoutPage;
