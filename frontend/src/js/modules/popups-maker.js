import {popups} from "./popups.js";

export const popupsMaker = new popups({
    linkAttributeName: 'data-popup',
    popupAttributeName: 'data-popup-name',
    popupContentClassName: '.popup__content',
    openedPopupClassName: '.popup_opened',
    popupCloseButtonClassName: '.close-popup',
    lockPaddingElementClassName: '.lock-padding',
    showHideTime: 300,
    video: [
        {
            popupName: 'perfectionVideo',
            videoClassName: '.perfection-popup__video',
            mp4Path: 'video/work.mp4',
            ogvPath: 'video/work.ogv',
        },

        {
            popupName: 'workVideo',
            videoClassName: '.work-popup__video',
            mp4Path: 'video/work.mp4',
            ogvPath: 'video/work.ogv',
        },
        
    ]
});