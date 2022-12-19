export class clickAnimator {

    constructor(config) {
        this.clickableElementConfigs = config;
    }

    onClick(clickableElementClassName, 
            clickedElementClassName, 
            duration, 
            clickCoordinates) {

        const mediaQueryHover = window.matchMedia('(any-hover: none)');

        let downEvent = 'mousedown';
        let upEvent = 'mouseup';
        
        if (mediaQueryHover.matches) {
        
            downEvent = 'touchstart';
            upEvent = 'touchend';
        
        }

        const clickableElements = document.querySelectorAll(clickableElementClassName);

        clickableElements.forEach(clickableElement => {

            clickableElement.addEventListener(downEvent, event => {

                event.stopPropagation();

                clickableElement.classList.add(clickedElementClassName.slice(1));

                if (clickCoordinates) {

                    const clickX = event.offsetX;
                    const clickY = event.offsetY;

                    clickableElement.style.setProperty("--x", clickX + "px");
                    clickableElement.style.setProperty("--y", clickY + "px");

                }

                window.addEventListener(upEvent, () => {

                    setTimeout(() => {

                        clickableElement.classList.remove(clickedElementClassName.slice(1));

                    if (clickCoordinates) {

                        clickableElement.style.setProperty("--x", "");
                        clickableElement.style.setProperty("--y", "");

                    }
    
                    }, duration);

                }, {once: true});

            });

            clickableElement.addEventListener("dragstart", event => {
                event.preventDefault();
            });

        });                            

    }

    init() {

        const clickableElementConfigs = this.clickableElementConfigs;

        clickableElementConfigs.forEach(item => {

            this.onClick(item.clickableElementClassName, 
                         item.clickedElementClassName, 
                         item.duration ?? 300, 
                         item.clickCoordinates);

        });

    }

}
