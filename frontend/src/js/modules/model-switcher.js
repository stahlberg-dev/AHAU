export function modelSwitcher() {

    const tabAttrNames = ['data-size', 'data-color'];
    const tabModelAttrName = 'data-model';
    const tabButtonClassName = '.catalog-tab-button';
    const tabContentClassName = '.catalog-tab-content';
    const activeTabButtonClassName = '.catalog-tab-button_active';
    const activeTabContentClassName = '.catalog-tab-content_active';
    const modelInputClassName = '.form__model';
    const changeTabsTime = 1000;
    let unlockTab = true;

    const tabButtons = document.querySelectorAll(tabButtonClassName);
    const tabContentBlocks = document.querySelectorAll(tabContentClassName);
    const modelInputs = document.querySelectorAll(modelInputClassName);
  
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

                modelInputs.forEach(modelInput => {

                    modelInput.value = newActiveContentAttrName;

                });
    
                setTimeout(() => {
                    unlockTab = true;
                }, changeTabsTime);

            });

        });

    });

}
