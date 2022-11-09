import {isWebp, modelSwitcher} from "./modules/functions.js";
import * as sliders from "./modules/sliders.js";
import {scrollObserver} from "./modules/scroll-observer.js";
import {burger} from "./modules/burger.js";
import {popupsMaker} from "./modules/popups-maker.js";
import {spoilers} from "./modules/spoilers.js";
import {phoneMask, promoMask} from "./modules/masks.js";
import {lockEquipmentVideo, clickScroller} from "./modules/click-scroller.js";


//----- Webp --------------------------------------------------------------------------------

isWebp();

//-------------------------------------------------------------------------------------------

//----- Header scroll -----------------------------------------------------------------------

new scrollObserver({
    elementClassName: '.header',
    scrolledClassName: '.header_scroll',
}).init();

//-------------------------------------------------------------------------------------------

// ----- Burger -----------------------------------------------------------------------------
  
new burger({
    buttonClassName: '.burger',
    activeButtonClassName: '.burger_active',
    menuClassName: '.menu__body',
    activeMenuClassName: '.menu__body_active',
    menuLinkClassName: '.menu__link',
    lockPaddingElementClassName: '.lock-padding',
    showHideTime: 300,
}).init();

//-------------------------------------------------------------------------------------------

// ----- Popups -----------------------------------------------------------------------------

popupsMaker.init();

//-------------------------------------------------------------------------------------------

// ----- Phone mask -------------------------------------------------------------------------

const phoneInputsClassName = 'jsPhone';

phoneMask(phoneInputsClassName);

//------------------------------------------------------------------------------------------- 

//----- Click scroller ----------------------------------------------------------------------

new clickScroller({
    linkAttributeName: 'data-goto',
}).init();

//-------------------------------------------------------------------------------------------

//----- Spoilers ----------------------------------------------------------------------------

new spoilers({
    spoilerClassName: '.spoiler',
    spoilerBlockClassName: '.spoiler-block',
    spoilerActiveBlockClassName: '.spoiler-block_active',
    hideTime: 300,
}).init();

//-------------------------------------------------------------------------------------------

// ----- Title slider -----------------------------------------------------------------------

sliders.swiperTitleSlider();

//------------------------------------------------------------------------------------------- 

// ----- About slider -----------------------------------------------------------------------

sliders.swiperAboutSlider();

//------------------------------------------------------------------------------------------- 

// ----- About slider -----------------------------------------------------------------------

sliders.swiperAboutSlider();

//------------------------------------------------------------------------------------------- 

// ----- Model-as250-white gallery ----------------------------------------------------------

sliders.modelSlider_as250_w();

//-------------------------------------------------------------------------------------------

// ----- Model-as250-white gallery ----------------------------------------------------------

sliders.modelSlider_as330_w();

//-------------------------------------------------------------------------------------------

// ----- Model-as250-white gallery ----------------------------------------------------------

sliders.modelSlider_as425_w();

//-------------------------------------------------------------------------------------------

//----- Model switcher -----------------------------------------------------------------

modelSwitcher();

//-------------------------------------------------------------------------------------------
