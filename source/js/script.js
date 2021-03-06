// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

// fullPageScroll выносится в глобальную область видимости, чтобы была
// возможность перезаписать метод changeVisibilityDisplay() в отдельном
// модуле additions/curtain.js
window.fullPageScroll = new FullPageScroll();
window.fullPageScroll.init();

// custom modules
import Animation from './additions/animation.js';
import bodyload from './additions/bodyload.js';
import socialOnFocus from './additions/social-on-focus.js';
import changeScreens from './additions/change-screens.js';
import rulesButton from './additions/rules-button.js';
import ripple from './additions/ripple.js';
import resultAnimation from './additions/result-animation.js';

// Adding set of animate methods to global scope
window.Animation = Animation;

bodyload();
socialOnFocus();
changeScreens();
rulesButton();
ripple();
resultAnimation();
