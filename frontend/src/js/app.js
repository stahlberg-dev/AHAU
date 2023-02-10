import {addLoadedClass} from "./modules/functions.js";
import * as sliders from "./modules/sliders.js";
import {scrollObserver} from "./modules/scroll-observer.js";
import {burger} from "./modules/burger.js";
import {popupsMaker} from "./modules/popups-maker.js";
import {spoilers} from "./modules/spoilers.js";
import {clickScroller} from "./modules/click-scroller.js";
import {clickAnimator} from "./modules/click-animation.js";
import {modelSwitcher} from "./modules/model-switcher.js";
import {formHandler} from "./modules/forms.js";

//----- Add Loaded Class --------------------------------------------------------------------

addLoadedClass('.title-screen', '.title-screen_loaded');

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

//----- Click animation ---------------------------------------------------------------------

new clickAnimator([
    {
        clickableElementClassName: '.underlined-link',
        clickedElementClassName: '.underlined-link_clicked',
    },
    {
        clickableElementClassName: '.header-link',
        clickedElementClassName: '.header-link_clicked',
    },
    {
        clickableElementClassName: '.lang',
        clickedElementClassName: '.lang_clicked',
    },
    {
        clickableElementClassName: '.menu__lang-link',
        clickedElementClassName: '.menu__lang-link_clicked',
    },
    {
        clickableElementClassName: '.burger',
        clickedElementClassName: '.burger_clicked',
    },
    {
        clickableElementClassName: '.slider-nav-button',
        clickedElementClassName: '.slider-nav-button_clicked',
    },
    {
        clickableElementClassName: '.footer-link',
        clickedElementClassName: '.footer-link_clicked',
    },
    {
        clickableElementClassName: '.popup__close',
        clickedElementClassName: '.popup__close_clicked',
    },
    {
        clickableElementClassName: '.button',
        clickedElementClassName: '.button_clicked',
        clickCoordinates: true,
        duration: 300,
    },
]).init();

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

// ----- Model-as330-white gallery ----------------------------------------------------------

sliders.modelSlider_as330_w();

//-------------------------------------------------------------------------------------------

// ----- Model-as425-white gallery ----------------------------------------------------------

sliders.modelSlider_as425_w();

//-------------------------------------------------------------------------------------------

// ----- Model-as250-black gallery ----------------------------------------------------------

sliders.modelSlider_as250_b();

//-------------------------------------------------------------------------------------------

// ----- Model-as330-black gallery ----------------------------------------------------------

sliders.modelSlider_as330_b();

//-------------------------------------------------------------------------------------------

// ----- Model-as425-black gallery ----------------------------------------------------------

sliders.modelSlider_as425_b();

//-------------------------------------------------------------------------------------------

//----- Model switcher ----------------------------------------------------------------------

modelSwitcher();

//-------------------------------------------------------------------------------------------

//----- Forms -------------------------------------------------------------------------------

new formHandler({
    formClassName: '.form',
    modelInputClassName: '.form__input_type_model',
    phoneInputClassName: '.form__input_type_phone',
    messageInputClassName: '.form__input_type_message',
    sendingFormClassName: '.form_sending',
    mailerConfigPath: '../api/sendLetter.php',
    successOrderPopupName: 'checkout',
    successMessagePopupName: 'message',
    failPopupName: 'fail',
}).init();

//-------------------------------------------------------------------------------------------
