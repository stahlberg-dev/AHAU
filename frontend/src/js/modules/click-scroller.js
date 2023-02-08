export class clickScroller {

    constructor(config) {
        this.linkAttributeName = config.linkAttributeName;
        this.lockedSections = config.lockedSections;
        this.callbacks = config.callbacks;
    }

    lockSection(gotoBlock, sectionClassName, unlockDelay) {
    
        const section = document.querySelector(sectionClassName);
            
        if (!gotoBlock.classList.contains( sectionClassName.slice(1) ) && section) {

            section.classList.add( `${sectionClassName}_locked`.slice(1) );

            setTimeout(() => {
                section.classList.remove( `${sectionClassName}_locked`.slice(1) );
            }, unlockDelay);

        }
    
    }

    onClick({linkAttributeName, lockedSections = [], callbacks = []}) {

        document.addEventListener("click", event => {
    
            const scrollLink = event.target.closest(`[${linkAttributeName}]`);
    
            if(!scrollLink) return;
    
            const gotoBlockName = scrollLink.getAttribute(linkAttributeName);
            const gotoBlock = document.querySelector(gotoBlockName);

            if (gotoBlock) {

                const gotoBlockValue = gotoBlock.getBoundingClientRect().top - 
                                        document.querySelector('.header__wrapper').offsetHeight - 20;

                window.scrollBy({
                    top: gotoBlockValue,
                    behavior: "smooth",
                });

                lockedSections.forEach( item => this.lockSection(gotoBlock, item.sectionClassName, item.unlockDelay ?? 0));
                callbacks.forEach(item => item(gotoBlock));

            }

            event.preventDefault();
    
        });

    }

    init() {

        this.onClick(this);

    }
}