export function isWebp() {
    function testWebP(callback) {
        let webP = new Image(); 
        webP.onload = webP.onerror = function () { 
            callback(webP.height == 2); 
        }; 
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

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

    document.addEventListener('DOMContentLoaded', () => {

        elements.forEach(element => {
            element.classList.add(loadedClassName.slice(1));
        });


    });

}

export function modelSwitcher() {

    const tabAttrNames = ['data-size', 'data-color'];
    const tabModelAttrName = 'data-model';
    const tabButtonClassName = '.catalog-tab-button';
    const tabContentClassName = '.catalog-tab-content';
    const activeTabButtonClassName = '.catalog-tab-button_active';
    const activeTabContentClassName = '.catalog-tab-content_active';
    const changeTabsTime = 1000;
    let unlockTab = true;

    const tabButtons = document.querySelectorAll(tabButtonClassName);
    const tabContentBlocks = document.querySelectorAll(tabContentClassName);

    if (tabButtons.length == 0 || tabContentBlocks.length == 0) return;

    document.querySelectorAll(activeTabContentClassName).forEach(item => {
        item.style.visibility = 'visible';
    });

    let selectedProduct = new Map();

    tabAttrNames.forEach(attrName => {

        const activeButton = document.querySelector(`${activeTabButtonClassName}[${attrName}]`);
        const activeButtonAttrValue = activeButton?.getAttribute(attrName);

        selectedProduct.set(attrName, activeButtonAttrValue);

    });

    tabAttrNames.forEach(attrName => {

        const typedTabButtons = document.querySelectorAll(`${tabButtonClassName}[${attrName}]`);
        
        typedTabButtons.forEach(button => {

            button.addEventListener("click", () => {

                if (button.classList.contains(activeTabButtonClassName.slice(1)) || !unlockTab) return;

                const oldActiveButton = document.querySelector(`${activeTabButtonClassName}[${attrName}]`);
                const oldActiveContentBlocks = document.querySelectorAll(activeTabContentClassName);
                unlockTab = false;

                oldActiveButton.classList.remove(activeTabButtonClassName.slice(1));

                oldActiveContentBlocks.forEach(block => {

                    block.classList.remove(activeTabContentClassName.slice(1));

                    setTimeout(() => {
                        block.style.visibility = '';
                    }, changeTabsTime);

                });

                const newActiveButtonAttrValue = button.getAttribute(attrName);
                selectedProduct.set(attrName, newActiveButtonAttrValue);

                let newActiveContentAttrName = '';
                for (let value of selectedProduct.values()) {
                    newActiveContentAttrName += value;
                }

                const newActiveContentBlocks = document
                    .querySelectorAll(`${tabContentClassName}[${tabModelAttrName}="${newActiveContentAttrName}"]`);

                button.classList.add(activeTabButtonClassName.slice(1));

                newActiveContentBlocks.forEach(block => {

                    block.classList.add(activeTabContentClassName.slice(1));
                    block.style.visibility = 'visible';

                });
    
                setTimeout(() => {
                    unlockTab = true;
                }, changeTabsTime);

            });

        });

    });

}
/* export function modelSwitcher() {

    const changeSliderTime = 1000;
    const tabButtons = document.querySelectorAll('[data-model-button]');
    let unlockTab = true;

    if (document.querySelector('.catalog-tab-content_active')) {
        document.querySelector('.catalog-tab-content_active').style.visibility = 'visible';
    }

    tabButtons.forEach(item => {

        item.addEventListener("click", () => {

            if (item.classList.contains('catalog-tab-button_active') || !unlockTab) return;
                            
            const activeTabButtons = document.querySelectorAll('.catalog-tab-button_active');
            unlockTab = false;

            activeTabButtons.forEach(element => {

                const activeTabButtonName = element.getAttribute('data-model-button');
                const activeSlider = document.querySelector(`[data-model="${activeTabButtonName}"]`);

                element.classList.remove('catalog-tab-button_active');
                
                if (activeSlider) {
                    
                    activeSlider.classList.remove('catalog-tab-content_active');

                    setTimeout(() => {
                        activeSlider.style.visibility = '';
                    }, changeSliderTime);

                }

            });

            const tabButtonName = item.getAttribute('data-model-button');
            const newActiveTabButtons = document.querySelectorAll(`[data-model-button="${tabButtonName}"]`);
            const newActiveSlider = document.querySelector(`[data-model="${tabButtonName}"]`);

            newActiveTabButtons.forEach(element => {
                element.classList.add('catalog-tab-button_active');
            });

            if (newActiveSlider) {
                newActiveSlider.classList.add('catalog-tab-content_active');
                newActiveSlider.style.visibility = 'visible';
            }

            setTimeout(() => {
                unlockTab = true;
            }, changeSliderTime);

        });

    });

} */