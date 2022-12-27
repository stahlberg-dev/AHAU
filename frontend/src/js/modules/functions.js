export function lockBody (lockPaddingElements, disablePointerDelay = 0) {

    if (!document.body.classList.contains('locked')) {

        const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';

        document.body.classList.add('locked');
        document.body.style.paddingRight = lockPaddingValue;

        lockPaddingElements.forEach(item => {
            item.style.paddingRight = lockPaddingValue;
        });

        let scroller = document.createElement('div');
        scroller.className = 'scroller disable-pointer';
        document.body.append(scroller);

        setTimeout(function() {

            scroller.classList.remove('disable-pointer');

        }, disablePointerDelay);

    }

}

export function unlockBody (lockPaddingElements, unlockDelay = 0) {

    if (document.body.classList.contains('locked')) {

        const scroller = document.querySelector('.scroller');
        scroller?.classList.add('disable-pointer');

        setTimeout(function() {
            
            document.body.classList.remove('locked');
            document.body.style.paddingRight = '0px';

            lockPaddingElements.forEach(item => {
                item.style.paddingRight = '0px';
            });
            
            scroller?.remove();
    
        }, unlockDelay);

    } 

}

export function addLoadedClass(elementsClassName, loadedClassName) {
    
    const elements = document.querySelectorAll(elementsClassName);

    window.addEventListener('load', () => {

        elements.forEach(element => {
            element.classList.add(loadedClassName.slice(1));
        });


    });

}
